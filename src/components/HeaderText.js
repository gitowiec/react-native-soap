import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

const { width, height } = Dimensions.get("window");

const HeaderText = ({ header, style }) => {
  return (
    <Text style={[styles.textStyle, style]}>{header}</Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    fontWeight: "300"
  }
});

export default HeaderText;
