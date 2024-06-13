import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';

function FavoritesScreen() {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) => {
    return favoriteMealIds.includes(meal.id);
  });

  if (favoriteMeals.length > 0) {
    screen = <MealsList items={favoriteMeals} />;
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
