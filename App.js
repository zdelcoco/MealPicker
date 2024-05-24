import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Categories from './screens/Categories';

import { CATEGORIES } from './data/dummy-data';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Food Categories</Text>
    <Categories categoryList={CATEGORIES}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',  
    marginTop: 100,  
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
});
