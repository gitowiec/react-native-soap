import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { StyleSheet, Text, TouchableOpacity, View, Keyboard, TextInput } from 'react-native';

import {MaskService} from 'react-native-masked-text'

import SimpleButtonView from '../../../simpleButton/SimpleButtonView'

import CountryPicker from 'react-native-country-picker-modal'

export default PhoneNumberEntryScreen = (props) => {
    let {
        stateKey,
        placeholder
    } = props


    class PhoneNumberEntryScreenView extends Component {
        constructor(props) {
            super(props)

            this.state = {
                input: '',
                cca2: 'US',
                country: {
                    cca2: 'US',
                    callingCode: '1'
                }
            }
        }

        _changeCountry = (country) => {
            console.log("COUNTRY", country)

            this.setState({country})
        }

        _renderForm = () => {
            return (
                <View style={styles.inputContainerStyle}>
                    <CountryPicker
                        ref={'countryPicker'}
                        closeable
                        onChange={this._changeCountry}
                        cca2={this.state.country.cca2}
                        filterable={true}
                     />
                <View style={styles.callingCodeView}>
                    <Text style={styles.callingCodeText}>+{this.state.country.callingCode}</Text>
                </View>

                    <TextInput 
                                clearButtonMode={"while-editing"}
                                keyboardType={"phone-pad"}
                                returnKeyType={"next"}
                                value={this.state.input}
                                placeholder={placeholder}
                                onChangeText={this.onChange}
                                style={styles.inputTextStyle} />
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
            this.props.screenProps.saveSetting(stateKey, this.state.input, () => this.props.navigation.navigate('Verify') )
        }

        render() {
            console.log("NUMBER", this.state.input)
            return (
                <SimpleButtonView {...props} {...this.props} 
                    onPress={this._onPress} 
                    middle={this._renderForm()} 
                    disableButton={this.state.input === ''}/>                
            )
        }
    }

    return PhoneNumberEntryScreenView
}

const styles = StyleSheet.create({
    widgetContainerStyle:{
        backgroundColor: 'transparent'
    },
    inputContainerStyle: {
        flexDirection: 'row',
        // height: 100,
    },
    inputTextStyle: {
        fontSize: 25,
        fontWeight: "400",
        textAlign: 'center',
        width: 250,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',

        marginLeft: 20
    },
    callingCodeView: {
        alignItems: 'center',
        justifyContent: 'center'
      },
      callingCodeText: {
        fontSize: 20,
        paddingLeft: 10
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
