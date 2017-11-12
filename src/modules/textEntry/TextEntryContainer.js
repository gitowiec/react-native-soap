import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { StyleSheet, Text, TouchableOpacity, View, Keyboard, TextInput } from 'react-native';

import SimpleButtonView from '../simpleButton/SimpleButtonView'

export default TextEntryScreen = (props) => {
    let {
        stateKey,
        placeholder
    } = props

    class TextEntryScreenContainer extends Component {
        constructor(props) {
            super(props)

            this.state = {
                input: ''
            }
        }

        _renderForm = () => {
            return <TextInput 
                        clearButtonMode={"while-editing"}
                        keyboardType={"ascii-capable"}
                        returnKeyType={"next"}
                        value={this.state.input}
                        onChangeText={this.onChange}
                        placeholder={placeholder}
                        placeholderTextColor={'black'}
                        style={styles.inputTextStyle} />
        }

        onChange = (data) => {
            this.setState({
                input: data
            })
        }

        _onPress = (values) => {
            Keyboard.dismiss();
            this.props.screenProps.saveSetting(stateKey, this.state.input, () => this.props.screenProps.next())
        }

        render() {
            return (
                <SimpleButtonView {...props} {...this.props} onPress={this._onPress} middle={this._renderForm()} />
            )
        }
    }

    return TextEntryScreenContainer
}

const styles = StyleSheet.create({
    widgetContainerStyle:{
        backgroundColor: 'transparent'
    },
    inputTextStyle: {
        fontSize: 34,
        fontWeight: "500",
        textAlign: 'center',
        width: 300,
        borderBottomWidth: 0.4,
        borderBottomColor: 'gray'
    }
  });

// SimpleButtonScreen.propTypes = {
//     header: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
//     buttonText: PropTypes.string
// }

// SimpleButtonScreen.defaultProps = {
//     header: 'Welcome to this APP!',
//     buttonText: 'Continue'
// }
