import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
  isFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (id) => {
    setFavorites((currentFavorites) => [...currentFavorites, id]);
  };

  const removeFavorite = (id) => {
    setFavorites((currentFavorites) => {
      return currentFavorites.filter((mealId) => mealId !== id);
    });
  };

  const isFavorite = (id) => {
    return favorites.includes(id);
  };

  const contextValue = {
    ids: favorites,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
    isFavorite: isFavorite,
  };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
