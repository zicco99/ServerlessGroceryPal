-- Create the database
CREATE DATABASE backend_db;

-- Connect to the database
\c backend_db;

-- Create tables
CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    email VARCHAR,
    profile_pic VARCHAR
);

CREATE TABLE feedback (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES "user" (id),
    recipe_id INTEGER REFERENCES recipe (id),
    is_chosen BOOLEAN,
    rating INTEGER,
    notes VARCHAR
);

CREATE TABLE recipe (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    category VARCHAR,
    image_url VARCHAR
);

CREATE TABLE step (
    id SERIAL PRIMARY KEY,
    recipe_id INTEGER REFERENCES recipe (id),
    n_step INTEGER,
    image_url VARCHAR,
    explaining VARCHAR
);

CREATE TABLE recipe_ingredient (
    id SERIAL PRIMARY KEY,
    recipe_id INTEGER REFERENCES recipe (id),
    ingredient_id INTEGER REFERENCES ingredient (id),
    product_barcode INTEGER REFERENCES product (barcode),
    amount_text VARCHAR,
    amount FLOAT
);

CREATE TABLE ingredient (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    unit VARCHAR
);

CREATE TABLE product (
    barcode INTEGER PRIMARY KEY,
    fridge_id INTEGER REFERENCES fridge (id),
    ingredient_id INTEGER REFERENCES ingredient (id),
    name VARCHAR,
    brand VARCHAR,
    labels BOOLEAN[],
    eco_score INTEGER,
    nova_score INTEGER,
    big_image_url VARCHAR,
    mini_image_url VARCHAR,
    meal BOOLEAN[],
    allergens VARCHAR[],
    quantity INTEGER
);

CREATE TABLE fridge (
    id SERIAL PRIMARY KEY,
    name VARCHAR
);

CREATE TABLE user_fridge (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES "user" (id),
    fridge_id INTEGER REFERENCES fridge (id),
    is_admin BOOLEAN,
    is_owner BOOLEAN
);

CREATE TABLE fridge_product (
    id SERIAL PRIMARY KEY,
    fridge_id INTEGER REFERENCES fridge (id),
    product_barcode INTEGER REFERENCES product (barcode),
    quantity INTEGER
);

CREATE TABLE ingredient_product (
    ingredient_id INTEGER REFERENCES ingredient (id),
    product_barcode INTEGER REFERENCES product (barcode),
    quantity INTEGER,
    PRIMARY KEY (ingredient_id, product_barcode)
);

-- Check if tables exist
SELECT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'user');
SELECT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'feedback');
SELECT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'recipe');
SELECT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'step');
SELECT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'recipe_ingredient');
SELECT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'ingredient');
SELECT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'product');
SELECT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'fridge');
SELECT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'user_fridge');
SELECT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'fridge_product');
SELECT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'ingredient_product');
