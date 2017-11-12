import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { BackgroundView, ButtonView, FixedHeightView, HeaderText, FlexHeightView, NavBar } from '../../components'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default SimpleButtonScreenView = ({
    backgroundStyle,
    backgroundImage,
    header,
    headerContainerStyle,
    headerStyle,
    middle,
    footer,
    footerContainerStyle,
    footerStyle,
    disableButton,
    onPress,
    buttonText,
    screenProps,

    left,
    right,
    onLeftPressed,
    onRightPressed,
    navigation
}) => {

    _press = () => {
        if (disableButton) return

        if (onPress) return onPress()
        if (screenProps.next) return screenProps.next()
    }

    _lefPressed = () => {
        if (onLeftPressed) return onLeftPressed()
        screenProps.back()
    }

    _rightPressed = () => {
        if (onRightPressed) return onRightPressed()
        screenProps.next()
    }

    return (
        <BackgroundView style={backgroundStyle} backgroundImage={backgroundImage}>
            <NavBar 
                onLeftPressed={_lefPressed}
                onRightPressed={_rightPressed}
                left={left}
                right={right}/>
            <FixedHeightView data={header} containerStyle={headerContainerStyle} style={headerStyle} />

            <FlexHeightView>
                {middle}
            </FlexHeightView>

            <FixedHeightView data={footer} containerStyle={footerContainerStyle} style={footerStyle} />

            <ButtonView
                disableButton={disableButton}
                onButtonPressed={_press}
                text={buttonText} />
        </BackgroundView>
    )
}