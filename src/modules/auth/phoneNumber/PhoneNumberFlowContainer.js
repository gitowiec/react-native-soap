import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Dimensions, Text, TouchableOpacity, StyleSheet } from 'react-native';

import {
    TabNavigator,
} from 'react-navigation';

import PhoneNumberEntryScreen from './components/PhoneNumberEntryScreen'
import PinEntryScreen from './components/PinEntryScreen'

let PhoneEntry = PhoneNumberEntryScreen({
    stateKey: 'phoneNumber',
    backgroundStyle: {
        backgroundColor: 'white'
    },
    header: 'Please enter your number',
    footer: null,
    buttonText: 'Send SMS'
})

let PinEntry = PinEntryScreen({
    stateKey: 'pin',
    backgroundStyle: {
        backgroundColor: 'white'
    },
    header: 'Enter the code we sent to',
    footer: 'Send again',
    buttonText: 'Continue',
    left: 'Back'
})
  
const BasicApp = TabNavigator({
    Entry: {screen: PhoneEntry},
    Verify: {screen: PinEntry},
}, {
    animationEnabled: true,
    navigationOptions: {
        tabBarVisible: false
    },
    headerMode: 'none',
});



export default PhoneNumberAuthFlow = (aprops) => {
    return (bprops) => {
        console.log('WUZZZA', aprops, bprops)
        let screenProps = {
            ...bprops.screenProps
        }
        return (
            <BasicApp screenProps={screenProps}  />
        )
    }
}