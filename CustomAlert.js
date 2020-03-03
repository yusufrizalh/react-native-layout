/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable keyword-spacing */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, 
    StyleSheet, Alert, 
    FlatList, Modal, 
    TouchableOpacity, Button } from 'react-native';

export default class CustomAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Alert_Visibility: false
        };
    }

    //state = { Alert_Visibility: false };

    cancelAlertBox(visible) {
        this.setState({ Alert_Visibility: visible });
    }

    okButton = () => {
        Alert.alert("OK Button Clicked.");
    }

    render() {
        return(
            <View style={styles.container} >
            
            <Modal
                visible={this.state.Alert_Visibility}
                transparent={false}
                animationType={"fade"}
                onRequestClose={() => { this.cancelAlertBox(!this.state.Alert_Visibility) }} >

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    <View style={styles.MainAlertView}>

                        <Text style={styles.AlertTitle}>Title</Text>
                        <View style={{ width: '100%', height: 0.5, backgroundColor: '#fff' }} />

                        <Text style={styles.AlertMessage}> Message </Text>

                        <View style={{ width: '100%', height: 0.5, backgroundColor: '#fff' }} />

                        <View style={{ flexDirection: 'row', height: '30%' }}>
                            <TouchableOpacity style={styles.buttonStyle} onPress={this.okButton} activeOpacity={0.7} >
                                <Text style={styles.TextStyle}> OK </Text>
                            </TouchableOpacity>

                            <View style={{ width: 0.5, height: '100%', backgroundColor: '#fff' }} />

                            <TouchableOpacity style={styles.buttonStyle} onPress={() => { this.cancelAlertBox(!this.state.Alert_Visibility) }} activeOpacity={0.7} >
                                <Text style={styles.TextStyle}> CANCEL </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>

            <Button onPress={() => { this.cancelAlertBox(true) }} color="#f73378" title="Custom Alert" />
            </View>
        );
    }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20
    },
     MainAlertView: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#1769aa", 
      height: 200,
      width: '90%',      
      borderColor: '#fff',
    },
    AlertTitle: {
      fontSize: 25,
      color: "#fff",
      textAlign: 'center',
      padding: 10,
      height: '28%'
    },
    AlertMessage: {
      fontSize: 22,
      color: "#fff",
      textAlign: 'center',
      textAlignVertical: 'center',
      padding: 10,
      height: '40%'
    },
    buttonStyle: {
      width: '50%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    TextStyle: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 22,
      marginTop: -5
    }
  });