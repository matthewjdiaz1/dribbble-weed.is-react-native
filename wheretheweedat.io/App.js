import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text>
          We deliver the best
          {'\n'}Fucking weed
          {'\n'}To your couch
          {'\n'}
          {'\n'}Right fucking now
        </Text>
        <Button
          // onPress={}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textOnPress: {
    color: '#141823'
  }
});

export default App;
