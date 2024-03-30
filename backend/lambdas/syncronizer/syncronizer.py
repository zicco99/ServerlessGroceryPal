from sqlalchemy import MetaData
from sqlalchemy.orm import sessionmaker
import re
from bs4 import BeautifulSoup
import requests

from aws_lib.lambda_utils import LambdaResponse, LambdaResponseCode

from aws_lib.logger import logger

from backend_db.connection import BackendDBClient
from backend_db.models.mappers import *
from backend_db.models.schemas import *

from backend_db.models import custom_base

debug = False
recipe_schema = RecipeSchema()

def findTitle(soup):
    titleRecipe = ""
    for title in soup.find_all(attrs={'class': 'gz-title-recipe gz-mBottom2x'}):
        titleRecipe = title.text
    return titleRecipe


def findIngredients(soup):
    allIngredients = []
    for tag in soup.find_all(attrs={'class': 'gz-ingredient'}):
        nameIngredient = tag.a.string
        contents = tag.span.contents[0]
        quantityProduct = re.sub(r"\s+", " ",  contents).strip()
        allIngredients.append([nameIngredient, quantityProduct])
    return allIngredients


def findCategory(soup):
    for tag in soup.find_all(attrs={'class': 'gz-breadcrumb'}):
        category = tag.li.a.string
        return category


def findImage(soup):
    pictures = soup.find('picture', attrs={'class': 'gz-featured-image'})
    if pictures is None:
        pictures = soup.find(
            'div', attrs={'class': 'gz-featured-image-video gz-type-photo'})
    imageSource = pictures.find('img')
    imageURL = imageSource.get('data-src')

    if imageURL is not None:
        return imageURL
    else:
        return None

def findSteps(soup):
    steps = []
    for step_tag in soup.find_all(class_='gz-content-recipe-step'):
        img_url = "https://ricette.giallozafferano.it" + step_tag.find('img').get('src', "")
        description = step_tag.find('p').text.strip()
        steps.append({'img_url': img_url, 'description': description})
    return steps

def handler(event, context):
    backend_db_engine = BackendDBClient().get_client()
    Session = sessionmaker(bind=backend_db_engine)
    session = Session()
    metadata = MetaData()
    metadata.reflect(bind=backend_db_engine)
    try:
        # Check number of pages
        numberOfPages = 0
        linkList = 'https://www.giallozafferano.it/ricette-cat'
        response = requests.get(linkList)
        soup = BeautifulSoup(response.text, 'html.parser')
        for tag in soup.find_all(attrs={'class': 'disabled total-pages'}):
            numberOfPages = int(tag.text)

        # Backend
        for pageNumber in range(1, numberOfPages + 1):  # numberOfPages
            linkList = 'https://www.giallozafferano.it/ricette-cat/page' + \
                str(pageNumber)
            response = requests.get(linkList)
            soup = BeautifulSoup(response.text, 'html.parser')
            for tag in soup.find_all(attrs={'class': 'gz-title'}):
                link = tag.a.get('href')
                try:
                    response = requests.get(link)
                    soup = BeautifulSoup(response.text, 'html.parser')

                    #Create the recipe object
                    new_recipe = Recipe(
                        title=findTitle(soup),
                        category=findCategory(soup),
                        image_url=findImage(soup),
                    )

                    new_recipe.ingredients = []
                    for ingredientName, quantityAndUnit in findIngredients(soup):
                        match = re.search(r"^(\d+)\s*(g|gr|ml)", quantityAndUnit)
                        if match:
                            quant = int(match.group(1))
                            unit = match.group(2)
                        else:
                            quant = -1
                            unit = ""
                        
                        # Check if ingredient already exists
                        ingredient = session.query(Ingredient).filter_by(name=ingredientName).first()

                        # If ingredient doesn't exist, create new ingredient object and add to session
                        if not ingredient:
                            ingredient = Ingredient(name=ingredientName, unit=unit)
                            session.add(ingredient)
                            session.commit()
                        
                        new_recipe.ingredients.append(RecipeIngredient(recipe_id=new_recipe.id,ingredient_id=ingredient.id, amount=quant, amount_text=quantityAndUnit))

                    new_recipe.steps = []
                    for i, (url, exp) in enumerate(findSteps(soup)):
                        new_step = Step(recipe=new_recipe, n_step=i,image_url=url, explaining=exp)
                        session.add(new_step)
                        new_recipe.steps.append(new_step)
                    
                    session.add(new_recipe)
                    session.commit()
                    logger.info(f"Recipe added: {recipe_schema.dump(new_recipe)}")
                
                except Exception as e:
                    session.rollback()
                    import traceback
                    traceback.print_exc()  # This will print the stack trace
                    logger.error(f"A recipe link failed, jump to the next: {e}")
                    continue
        
        return LambdaResponse(
            status_code=LambdaResponseCode.OK,
            result={"message": "Database created"}
        ).to_body_status()
    
    # HERE I CAN PUT HEALTHCHECK, BACKUP ETC
    
    except Exception as e:
        return LambdaResponse(
            status_code=LambdaResponseCode.INTERNAL_SERVER_ERROR,
            result={"error": str(e)}
        ).to_body_status()
