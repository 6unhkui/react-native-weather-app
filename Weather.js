import React from 'react';
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from 'prop-types';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from "expo-linear-gradient";

const weatherOptions = {
    Haze : {
        iconName : "weather-hazy",
        gradient : ['#E8CBC0', '#636FA4'],
        title : 'Haze'
    },
    Thunderstorm : {
        iconName : "weather-lightning",
        gradient : ['#1D4350', '#A43931'],
        title : 'Thunderstorm'
    },
    Drizzle : {
        iconName : "weather-hail",
        gradient : ['#1a2a6c', '#b21f1f', '#fdbb2d'],
        title : 'Drizzle'
    },
    Rain : {
        iconName : "weather-rainy",
        gradient : ['#1a2a6c', '#b21f1f', '#fdbb2d'],
        title : 'Rain'
    },
    Snow : {
        iconName : "weather-snowy",
        gradient : ['#1a2a6c', '#b21f1f', '#fdbb2d'],
        title : 'Snow'
    },
    Atmosphere : {
        iconName : "weather-hail",
        gradient : ['#1a2a6c', '#b21f1f', '#fdbb2d'],
        title : 'Atmosphere',
    },
    Clear : {
        iconName : "weather-sunny",
        gradient : ['#fceabb', '#f8b500'],
        title : 'Clear',
    },
    Clouds : {
        iconName : "weather-cloudy",
        gradient : ['#556270', '#FF6B6B'],
        title : 'Clouds',
    },
    Mist : {
        iconName : "weather-hail",
        gradient : ['#1a2a6c', '#b21f1f', '#fdbb2d'],
        title : 'Mist',
    },
    Dust : {
        iconName : "weather-hail",
        gradient : ['#1a2a6c', '#b21f1f', '#fdbb2d'],
        title : 'Dust',
    },
}

export default function Weather({temp, condition}) {
    return (
        <LinearGradient colors={weatherOptions[condition].gradient}
                        style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={100} color="white" />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <View>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                </View>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp : PropTypes.number.isRequired,
    condition : PropTypes.oneOf([
        'Thunderstorm',
        'Drizzle',
        'Rain',
        'Snow',
        'Atmosphere',
        'Clear',
        'Clouds',
        'Haze',
        'Mist',
        'Dust'
    ]).isRequired
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    temp : {
       fontSize : 36,
       color : 'white'
    },
    halfContainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    title : {
        color : 'white',
        fontSize : 50,
        fontWeight : '300',
        marginBottom : 10
    },
    textContainer : {
        paddingHorizontal : 20,
        alignItems : 'flex-start'
    }
})