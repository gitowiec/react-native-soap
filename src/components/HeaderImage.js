import React, { Component } from 'react';
import { Dimensions, StyleSheet, Image, View } from 'react-native';

const { width, height } = Dimensions.get("window");

const HeaderImage = ({ header, style }) => {
    renderImage = () => {
        if (typeof header === 'string') {
            return <Image source={{uri: header}} style={[styles.style, style]} />
        } else {
            return <Image source={header} style={[styles.style, style]} />
        }
    }
    return (
        <View>
            {renderImage()}
        </View>
  );
};

const styles = StyleSheet.create({
  style: {
    backgroundColor: 'transparent',
    resizeMode: 'contain',
    flex: 1,
    width: width-150
  }
});

export default HeaderImage;
