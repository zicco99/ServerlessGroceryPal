import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.min.css';
import { Card, Image } from 'react-bulma-components';
import { useAxios } from '../../providers/axios';


interface RecipeSwiperProps {
  recipes: Recipe[];
}

const RecipeSwiper: React.FC<RecipeSwiperProps> = ({ recipes }) => {
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState<number>(0);
  const [currentRecipe, setCurrentRecipe] = useState<RecipeShow | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const axios = useAxios();

  const fetchRecipeData = async (id: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`${axios.defaults.baseURL}/recipes/${id}/show`);
      const recipe_to_be_shown : RecipeShow = JSON.parse(response.data["body"]);
      setCurrentRecipe(recipe_to_be_shown);
    } catch (error) {
      console.error("Error fetching recipe data:", error);
      setCurrentRecipe(null);
    } finally {
      setLoading(false);
    }
  };

  // Update the current recipe when the index changes
  useEffect(() => {
    if (recipes.length > 0 && currentRecipeIndex < recipes.length) {
      fetchRecipeData(recipes[currentRecipeIndex].id);
      console.log(recipes[currentRecipeIndex]);
    }
  }, [currentRecipeIndex, recipes]);

  // Reset to the first recipe when the recipes prop changes
  useEffect(() => {
    setCurrentRecipeIndex(0);
  }, [recipes]);

  // Function to handle swiping right (like)
  const handleSwipeRight = () => {
    if (currentRecipeIndex < recipes.length - 1) {
      setCurrentRecipeIndex(currentIndex => currentIndex + 1);
    }
  };

  // Function to handle swiping left (dislike)
  const handleSwipeLeft = () => {
    if (currentRecipeIndex < recipes.length - 1) {
      setCurrentRecipeIndex(currentIndex => currentIndex + 1);
    }
  };

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : currentRecipe ? (
        <Card>
          <Card.Content>
            <Card.Header>{currentRecipe.title}</Card.Header>
            <Card.Image
              src={currentRecipe.imageUrl}
              alt={currentRecipe.title}
            />
            <Card.Content>
              <p>{currentRecipe.ingredients}</p>
            </Card.Content>



          </Card.Content>
          <Card.Footer>
            <Card.Footer.Item renderAs="a" onClick={handleSwipeLeft}>
              Dislike
            </Card.Footer.Item>
            <Card.Footer.Item renderAs="a" onClick={handleSwipeRight}>
              Like
            </Card.Footer.Item>
          </Card.Footer>
        </Card>
      ) : (
        <p>No recipes to display</p>
      )}
    </div>
  );
};

export default RecipeSwiper;
