import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { StyleSheet, Text, TouchableOpacity, View, Keyboard, TextInput } from 'react-native';

import {MaskService} from 'react-native-masked-text'

import SimpleButtonView from '../../../simpleButton/SimpleButtonView'

import CodeInput from 'react-native-confirmation-code-input'

export default PinEntryScreen = (props) => {
    let {
        stateKey,
        placeholder
    } = props


    class PinEntryScreenView extends Component {
        constructor(props) {
            super(props)

            this.state = {
                input: '',
            }
        }

        _onFulfill = (code) => {
            this.setState({
                input: code
            })
        }


        _renderForm = () => {
            return (
                <View style={styles.inputContainerStyle}>
                        <CodeInput
                            ref="codeInputRef1"
                            className={'border-box'}
                            keyboardType="numeric"                            
                            codeLength={6}
                            autoFocus={false}
                            space={5}
                            size={45}
                            inputPosition='left'
                            onFulfill={this._onFulfill}
                            activeColor='black'
                            inactiveColor='gray'
                            codeInputStyle={styles.codeInputStyle}
                            containerStyle={styles.codeContainerStyle}
                        />
    
                </View>
            )
        }

        onChange = (data) => {
            let maskedInput = MaskService.toMask('custom', data, {mask: '(999) 999-9999'})
            console.log("masked", maskedInput)
            this.setState({
                input: maskedInput
            })
        }

        _onPress = (values) => {
            Keyboard.dismiss();
            this.props.screenProps.saveSetting(stateKey, this.state.input, () => this.props.screenProps.next() )
        }

        render() {
            console.log("NUMBER", props, this.props)
            return (
                <SimpleButtonView {...props} {...this.props} 
                    onPress={this._onPress} 
                    onLeftPressed={this.props.navigation.goBack}
                    middle={this._renderForm()} 
                    disableButton={this.state.input === ''}/>                
            )
        }
    }

    return PinEntryScreenView
}

const styles = StyleSheet.create({
    widgetContainerStyle:{
        backgroundColor: 'transparent'
    },
    inputContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },
    inputTextStyle: {
        fontSize: 25,
        fontWeight: "700",
        textAlign: 'center',
        width: 250,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',

        marginLeft: 20,
    },

    codeContainerStyle: {
        borderColor: 'green'
    },
    codeInputStyle: {
        fontSize: 25,
        fontWeight: "400",
        // borderColor: 'white',
        width: 44,
        height: 55,
        borderRadius: 6
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
