import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const App = () => (
  <View style={styles.container}>
    <Text style={styles.text}>HupPup!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  text: {
    fontSize: 40,
    color: '#FEFEFE',
  },
});

export default App;
