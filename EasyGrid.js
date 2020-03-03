/* eslint-disable keyword-spacing */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'; 
import { Col, Row, Grid } from 'react-native-easy-grid'; 

export default class EasyGrid extends Component {
    render() {
        return(
            <Grid>
                <Col style={styles.box1}>
                    <Row size={25} style={styles.box2}></Row>
                    <Row size={75} style={styles.box4}></Row>
                </Col>
                <Col style={styles.box4}>
                    <Row size={2} style={styles.box3}></Row>
                    <Row size={1} style={styles.box6}></Row>
                    <Row size={1} style={styles.box1}></Row>
                </Col>
                <Col style={styles.box5}>
                    <Row style={styles.box5}></Row>
                    <Row style={styles.box4}></Row>
                </Col>
            </Grid>
        );
    }
}

const styles = StyleSheet.create({
    box1: {
        backgroundColor: 'orange', 
    }, 
    box2: {
        backgroundColor: 'green', 
    }, 
    box3: {
        backgroundColor: 'blue', 
    }, 
    box4: {
        backgroundColor: 'red', 
    }, 
    box5: {
        backgroundColor: 'yellow', 
    }, 
    box6: {
        backgroundColor: 'magenta', 
    }, 
});