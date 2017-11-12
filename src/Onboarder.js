import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Dimensions, Text, TouchableOpacity, StyleSheet } from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation'
import {NavigationActions, addNavigationHelpers} from 'react-navigation'

export const Onboarder = (screensConfigMap, onboardingConfig) => {
    const screenNames = Object.keys(screensConfigMap)

    let {order, animation} = onboardingConfig

    let NavigatorType = animation === 'push' ? StackNavigator : TabNavigator

    let tabs = {}

    screenNames.forEach((screenName) => {
        let props = screensConfigMap[screenName]
        tabs[screenName] = {screen: props.screen}
    })

    const AppNavigator = NavigatorType(tabs, {
        animationEnabled: true,
        navigationOptions: {
            tabBarVisible: false
        },
        headerMode: 'none',
        order: order
    })

    // const AppNavigator = TabNavigator({
    //     One: {screen: screenCreator2()}
    // })


    class GeneratedComponent extends Component {
        constructor() {
            super()

            this.navigatorRef = null

            this.state = {
                currentPage: 0,
                order: order ? order : screenNames,

                onboardingSettings: {

                }
            }
        }
        next = () => {
            let {currentPage, order} = this.state
            let prevPageName = order[currentPage]

            let nextPage = currentPage + 1

            if (nextPage >= order.length) {
                this.props.onEnd && this.props.onEnd(this.state.onboardingSettings)
                return
            }

            this.setState({currentPage: nextPage})

            let pageName = order[nextPage]

            this.props.onTransition && 
                this.props.onTransition(prevPageName, pageName, this.state.onboardingSettings)

            this.navigatorRef.dispatch(
                NavigationActions.navigate({type: 'Navigation/NAVIGATE', routeName: pageName})
            )
        }

        back = () => {
            let {currentPage, order} = this.state
            let prevPageName = order[currentPage]

            if (currentPage <= 0) return

            let nextPage = currentPage - 1
            let pageName = order[nextPage]

            this.setState({currentPage: nextPage})

            this.props.onTransition &&
                this.props.onTransition(prevPageName, pageName, this.state.onboardingSettings)

            this.navigatorRef.dispatch(
                NavigationActions.back()
            )

        }

        componentDidMount() {
            this.navigatorRef = this.navigator
        }

        saveSetting = (key, value, cb) => {
            this.setState({
                onboardingSettings: {
                    ...this.state.onboardingSettings,
                    [key]: value
                }
            }, cb)
        }

        render() {

            let propsForScreen = {
                next: this.next,
                back: this.back,
                saveSetting: this.saveSetting
            }

            return (
                <AppNavigator screenProps={propsForScreen} ref={nav => { this.navigator = nav }} />
            )
        }
    }

    return GeneratedComponent
}

// export const onboardingCreator = (props) => <View style={{backgroundColor: 'blue', flex: 1}} />