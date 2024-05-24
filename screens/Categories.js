import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Card from '../components/ui/Card';
import Colors from '../constants/colors';

function Categories(categoryList) {
  return (
    <View style={styles.container}>
      <FlatList
        data={categoryList.categoryList}
        renderItem={({ item }) => (
          <Card>
            <Text style={styles.text}>{item.title}</Text>
          </Card>
        )}
        style={styles.listContainer}
      />
    </View>
  );
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  listContainer: {
    width: '85%',
  },
  text: {
    color: Colors.primary800,
    alignItems: 'center',
  },
});
