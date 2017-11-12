import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {BackgroundView, ButtonView, FixedHeightView, HeaderText, FlexHeightView} from '../../components'

import SimpleButtonView from './SimpleButtonView'


export default SimpleButtonScreen = (aprops) => {
    return (bprops) => {
        return (
            <SimpleButtonScreenView {...aprops} {...bprops} />
        )
    }
}

SimpleButtonScreen.propTypes = {
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
    buttonText: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

SimpleButtonScreen.defaultProps = {
    header: 'Welcome to this APP!',
    buttonText: 'Continue'
}
