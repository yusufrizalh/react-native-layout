/* eslint-disable keyword-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions, 
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// mendeteksi ukuran layar smartphone
var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={[styles.box, styles.box1]}><Text>Header</Text></View>
        <View style={[styles.box, styles.box2]}><Text>Content</Text></View>
        <View style={[styles.box, styles.box3]}><Text>Footer</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column', // row  
  }, 
  box: {
    height: box_height, 
    borderBottomWidth: 5, 
    borderBottomColor: '#fff',
  }, 
  box1: {
    flex: 1, 
    backgroundColor: '#2196f3', 
  }, 
  box2: {
    flex: 5, 
    backgroundColor: '#8bc34a', 
  },
  box3: {
    flex: 1, 
    backgroundColor: '#e3aa1a', 
  },
});
