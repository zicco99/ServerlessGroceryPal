import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bulma-components';

interface RecipeSwiperProps {
  recipes: string[];
}

const RecipeSwiper: React.FC<RecipeSwiperProps> = ({ recipes }) => {
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState<number>(0);

  // Function to handle swiping right (like)
  const handleSwipeRight = () => {
    // Handle liking the current recipe (e.g., save it to favorites, send data to server, etc.)
    setCurrentRecipeIndex(currentIndex => currentIndex + 1);
  };

  // Function to handle swiping left (dislike)
  const handleSwipeLeft = () => {
    // Handle disliking the current recipe (e.g., skip it, hide it, etc.)
    setCurrentRecipeIndex(currentIndex => currentIndex + 1);
  };

  useEffect(() => {
    setCurrentRecipeIndex(0);
  }, [recipes]);

  return (
    <div className="container">
      {recipes.length > 0 ? (
        <Card>
          <Card.Content>
            <p className="title">{recipes[currentRecipeIndex]}</p>
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

