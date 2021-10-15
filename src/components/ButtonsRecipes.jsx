import React from 'react';

const ButtonsRecipes = () => (
  <div className="fav-recipes-btn">
    <button type="button" data-testid="filter-by-all-btn">All</button>
    <button type="button" data-testid="filter-by-food-btn">Food</button>
    <button type="button" data-testid="filter-by-drink-btn">Drink</button>
  </div>
);

export default ButtonsRecipes;
