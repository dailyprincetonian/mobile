import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ListView from '../sample/ListView';

export default class CategoryScreen extends React.Component {
  static navigationOptions = {
    title: 'Opinion',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <ListView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
