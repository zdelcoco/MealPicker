import { Text } from 'react-native';

function DetailsScreen({ route }) {
  const mealId = route.params.mealId;

  return (
    <>
      <Text>Detail screen</Text>
      <Text>{mealId}</Text>
    </>
  );
}

export default DetailsScreen;
