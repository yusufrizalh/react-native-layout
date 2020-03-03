/* eslint-disable eol-last */
/* eslint-disable keyword-spacing */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
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

export default class StackHeaderFooter extends Component {
    render() {
        return(
            <View style={styles.container}>
            <View style={[styles.header]}></View>
            <ScrollView>
                <View style={[styles.content]}>
                    <View style={[styles.box]}></View>
                    <View style={[styles.box]}></View>
                    <View style={[styles.box]}></View>
                    <View style={[styles.box]}></View>
                    <View style={[styles.box]}></View>
                    <View style={[styles.box]}></View>
                    <View style={[styles.box]}></View>
                    <View style={[styles.box]}></View>
                    <View style={[styles.box]}></View>
                    <View style={[styles.box]}></View>
                </View>
            </ScrollView>
            <View style={[styles.footer]}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    height: 40,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#03A9F4',
    zIndex: 10,
  },
  content: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40,
  },
  footer: {
    height: 40,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#8BC34A',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#333',
    marginBottom: 10,
  },
});