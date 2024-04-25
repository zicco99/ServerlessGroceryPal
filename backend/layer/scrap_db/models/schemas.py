from marshmallow import fields
from marshmallow_sqlalchemy import SQLAlchemySchema, auto_field

from . import custom_base
from .mappers import *

class UserSchema(SQLAlchemySchema):
    class Meta:
        model = User
        load_instance = True

    id = auto_field()
    name = auto_field()
    email = auto_field()
    profile_pic = auto_field()

    feedbacks = fields.Nested('FeedbackSchema', many=True, exclude=('user','recipe'))
    fridges = fields.Nested('FridgeSchema', many=True, exclude=('users','products'))

class FeedbackSchema(SQLAlchemySchema):
    class Meta:
        model = Feedback
        load_instance = True

    id = auto_field()
    user_id = auto_field()
    recipe_id = auto_field()
    rating = auto_field()
    notes = auto_field()
    user = fields.Nested('UserSchema', exclude=('fridges', 'feedbacks'))
    recipe = fields.Nested('RecipeSchema', exclude=('feedbacks', 'steps', 'ingredients'))

class RecipeSchema(SQLAlchemySchema):
    class Meta:
        model = Recipe
        load_instance = True

    id = auto_field()
    title = auto_field()
    category = auto_field()
    image_url = auto_field()

    feedbacks = fields.Nested('FeedbackSchema', many=True, exclude=('user','recipe',))
    steps = fields.Nested('StepSchema', many=True, exclude=('recipe',))
    ingredients = fields.Nested('RecipeIngredientSchema', many=True, exclude=('recipe',))

class StepSchema(SQLAlchemySchema):
    class Meta:
        model = Step
        load_instance = True

    id = auto_field()
    recipe_id = auto_field()
    n_step = auto_field()
    image_url = auto_field()
    explaining = auto_field()

    recipe = fields.Nested('RecipeSchema', exclude=('feedbacks', 'steps', 'ingredients'))

class RecipeIngredientSchema(SQLAlchemySchema):
    class Meta:
        model = RecipeIngredient
        load_instance = True

    id = auto_field()
    recipe_id = auto_field()
    ingredient_id = auto_field()
    product_barcode = auto_field()
    amount_text = auto_field()
    amount = auto_field()

    recipe = fields.Nested('RecipeSchema', exclude=('feedbacks', 'steps', 'ingredients'))

class IngredientSchema(SQLAlchemySchema):
    class Meta:
        model = Ingredient
        load_instance = True

    id = auto_field()
    name = auto_field()
    unit = auto_field()
    products = fields.Nested('ProductSchema', many=True, exclude=('ingredients', 'fridges'))

class ProductSchema(SQLAlchemySchema):
    class Meta:
        model = Product
        load_instance = True

    barcode = auto_field()
    fridge_id = auto_field()
    ingredient_id = auto_field()
    name = auto_field()
    brand = auto_field()
    labels = auto_field()
    eco_score = auto_field()
    nova_score = auto_field()
    big_image_url = auto_field()
    mini_image_url = auto_field()
    meal = auto_field()
    allergens = auto_field()
    quantity = auto_field()

    fridges = fields.Nested('FridgeSchema', many=True, exclude=('users', 'products'))
    ingredients = fields.Nested('IngredientSchema', many=True, exclude=('products', 'fridges'))

class FridgeSchema(SQLAlchemySchema):
    class Meta:
        model = Fridge
        load_instance = True

    id = auto_field()
    name = auto_field()
    users = fields.Nested('UserSchema', many=True, exclude=('fridges', 'feedbacks'))
    products = fields.Nested('ProductSchema', many=True, exclude=('fridges', 'ingredients'))

class UserFridgeSchema(SQLAlchemySchema):
    class Meta:
        model = UserFridge
        load_instance = True

    id = auto_field()
    user_id = auto_field()
    fridge_id = auto_field()
    is_admin = auto_field()
    is_owner = auto_field()

class FridgeProductSchema(SQLAlchemySchema):
    class Meta:
        model = FridgeProduct
        load_instance = True

    id = auto_field()
    fridge_id = auto_field()
    product_barcode = auto_field()
    quantity = auto_field()

class IngredientProductSchema(SQLAlchemySchema):
    class Meta:
        model = IngredientProduct
        load_instance = True

    ingredient_id = auto_field()
    product_barcode = auto_field()
    quantity = auto_field()
