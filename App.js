/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'; 

let bg = require('./src/assets/images/lobbyBg.jpg')
let logo = require('./src/assets/images/gameroom.png')
let screenshot = require('./src/assets/images/screenshot.png')
let lines = require('./src/assets/images/lines.png')

import {Onboarder} from './src/Onboarder'

import {SimpleButtonScreen, TextEntryScreen, PhoneNumberAuthFlow} from './src/modules'

let backgroundColor = 'white'

let PhoneAuth = PhoneNumberAuthFlow()

let BasicView2 = SimpleButtonScreen({
  backgroundStyle: {
    backgroundColor
  },
  buttonText: 'TEST',
  footer: 'Please continue',
  middle: <Image source={screenshot} style={{resizeMode: 'contain', flex: 1}} />
})

let BasicView3 = SimpleButtonScreen({
  backgroundStyle: {
    backgroundColor
  },
  buttonText: 'OK?'
})

let TextView = TextEntryScreen({
  backgroundStyle: {
    backgroundColor
  },
  stateKey: 'username'
})

let PhoneView = PhoneNumberAuthFlow({
  backgroundStyle: {
    backgroundColor
  },
  buttonText: 'Send SMS',
  stateKey: 'phone',
})


const OnboarderView = Onboarder({
  Initial: {
    screen: BasicView2
  },
  Copy: {
    screen: BasicView2
  },
  One: {
    screen: TextView
  },
  Two: {
    screen: BasicView3
  },
  Phone : {
    screen: PhoneView
  },
  Auth: {
    screen: PhoneAuth
  }
}, {
  order: ['Initial', 'Auth', 'One'],
  // animation: 'push' // "slide", "push"
})


export default class App extends Component {
  onEnd = (data) => {
    console.log("DATA", data)
  }

  onTransition = (from, to, data) => {
    console.log("INFO", from, to, data)
  }

  render() {
    console.disableYellowBox = true;
    return (
      <OnboarderView onEnd={this.onEnd} onTransition={this.onTransition} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
