import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';

var {height, width} = Dimensions.get('window');

const ButtonView = ({ onButtonPressed, text, buttonStyle, buttonTextStyle, disableButton }) => {
  let showDisableButtonStyle = disableButton ? styles.buttonDisabledStyle : {}
  return (
    <TouchableOpacity onPress={onButtonPressed} activeOpacity={0.7}>
      <View style={[styles.bottomButtonStyle, buttonStyle, showDisableButtonStyle]}>
        <Text style={[styles.bottomButtonTextStyle, buttonTextStyle]}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

ButtonView.propTypes = {
  text: PropTypes.string
}

ButtonView.defaultProps = {
  text: 'Continue'
}


const styles = StyleSheet.create({
  bottomButtonStyle: {
    backgroundColor: "#59d071",
    height: 60,
    width: width-40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    marginBottom: 20,
  },
  bottomButtonTextStyle: {
    fontSize: 22,
    fontWeight: "700",
    color: "white"
  },
  buttonDisabledStyle: {
    opacity: 0.40
  }
});

export default ButtonView;
