/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react/self-closing-comp */
/* eslint-disable keyword-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, ListView, FlatList } from 'react-native';

export default class FlatLists extends Component {
    
    ambilNama = (item) => {
        Alert.alert(item.key);
    }

    render() {
        return(
            <View style={tampil.container}>
                <FlatList data={[
                    { key: 'Anderson' }, 
                    { key: 'Melanie' }, 
                    { key: 'Roberto' }, 
                    { key: 'Jennifer' }, 
                    { key: 'Fanny' }, 
                ]} 
                renderItem={({ item }) => 
                    <Text style={tampil.item} 
                        onPress={this.ambilNama.bind(this, item)}>
                        {item.key}
                    </Text>} />
            </View>
        );
    }
}

function Item({ nama }) {
    return(
        <View>
            <Text>{nama}</Text>
        </View>
    );
}

const tampil = StyleSheet.create({
    container: {
        flex: 1, 
    }, 
    item: {
        padding: 10, 
        fontSize: 18, 
        height: 45, 
    }, 
});