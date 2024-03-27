from sqlalchemy import ARRAY, Boolean, Column, Integer, ForeignKey, Float, String
from sqlalchemy.orm import relationship

from . import custom_base

class User(custom_base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    email = Column(String)
    profile_pic = Column(String)
    feedbacks = relationship('Feedback', back_populates='user')
    fridges = relationship('Fridge', secondary='user_fridge', back_populates='users')

class Feedback(custom_base):
    __tablename__ = 'feedback'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    recipe_id = Column(Integer, ForeignKey('recipe.id'))
    is_chosen = Column(Boolean)
    rating = Column(Integer)
    notes = Column(String)
    user = relationship("User", back_populates='feedbacks')
    recipe = relationship('Recipe', back_populates='feedbacks')

class Recipe(custom_base):
    __tablename__ = 'recipe'
    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String)
    category = Column(String)
    image_url = Column(String)
    feedbacks = relationship("Feedback", back_populates='recipe')
    steps = relationship('Step', back_populates='recipe')
    ingredients = relationship('RecipeIngredient', back_populates='recipe')

class Step(custom_base):
    __tablename__ = 'step'
    id = Column(Integer, primary_key=True, autoincrement=True)
    recipe_id = Column(Integer, ForeignKey('recipe.id'))
    n_step = Column(Integer)
    image_url = Column(String)
    explaining = Column(String)
    recipe = relationship('Recipe', back_populates='steps')

class RecipeIngredient(custom_base):
    __tablename__ = 'recipe_ingredient'
    id = Column(Integer, primary_key=True, autoincrement=True)
    recipe_id = Column(Integer, ForeignKey('recipe.id'))
    ingredient_id = Column(Integer, ForeignKey('ingredient.id'))
    product_barcode = Column(Integer, ForeignKey('product.barcode'))
    amount_text = Column(String)
    amount = Column(Float)
    recipe = relationship('Recipe', back_populates='ingredients')

class Ingredient(custom_base):
    __tablename__ = 'ingredient'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    unit = Column(String)
    products = relationship('Product', secondary='ingredient_product', back_populates='ingredients')

class Product(custom_base):
    __tablename__ = 'product'
    barcode = Column(Integer, primary_key=True)
    fridge_id = Column(Integer, ForeignKey('fridge.id'))
    ingredient_id = Column(Integer, ForeignKey('ingredient.id'))
    name = Column(String)
    brand = Column(String)
    labels = Column(ARRAY(Boolean))
    eco_score = Column(Integer)
    nova_score = Column(Integer)
    big_image_url = Column(String)
    mini_image_url = Column(String)
    meal = Column(ARRAY(Boolean))
    allergens = Column(ARRAY(String))
    quantity = Column(Integer)
    fridges = relationship('Fridge', secondary='fridge_product', back_populates='products')
    ingredients = relationship('Ingredient', secondary='ingredient_product', back_populates='products')
    
class Fridge(custom_base):
    __tablename__ = 'fridge'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String)
    users = relationship('User', secondary='user_fridge', back_populates='fridges')
    products = relationship('Product', secondary='fridge_product', back_populates='fridges')

class UserFridge(custom_base):
    __tablename__ = 'user_fridge'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    fridge_id = Column(Integer, ForeignKey('fridge.id'))
    is_admin = Column(Boolean)
    is_owner = Column(Boolean)

class FridgeProduct(custom_base):
    __tablename__ = 'fridge_product'
    id = Column(Integer, primary_key=True, autoincrement=True)
    fridge_id = Column(Integer, ForeignKey('fridge.id'))
    product_barcode = Column(Integer, ForeignKey('product.barcode'))
    quantity = Column(Integer)

class IngredientProduct(custom_base):
    __tablename__ = 'ingredient_product'
    ingredient_id = Column(Integer, ForeignKey('ingredient.id'), primary_key=True)
    product_barcode = Column(Integer, ForeignKey('product.barcode'), primary_key=True)
    quantity = Column(Integer)

