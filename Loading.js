import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';


export default function Loading() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.text}>hello!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent : 'flex-end',
        paddingHorizontal : 30,
        paddingVertical : 100,
        backgroundColor : '#FDF6AA',
    },
    text : {
        color : '#2c2c2c',
        fontSize : 30
    }
});