import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';

import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) => {
    return favoriteMealsCtx.isFavorite(meal.id);
  });

  if (favoriteMeals.length > 0) {
    screen = (<MealsList items={favoriteMeals} />);
  } else {
    screen = (
      <View style={styles.container}>
        <Text style={styles.text}>No favorites yet!</Text>
      </View>
    );
  }

  return screen;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
