import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Dimensions, StyleSheet, View, ViewPropTypes, Text } from 'react-native';
import { HeaderText, HeaderImage } from '.'
import isUrl from 'is-url'

const FixedHeightView = ({ data, style, containerStyle }) => {
  renderHeader = () => {
    if (typeof data === 'object') {
      return data
    }
    else if (typeof data === 'number' || (typeof data === 'string' && isUrl(data))) {
      return <HeaderImage header={data} style={style} />
    }
    else {
      return <HeaderText header={data} style={style} />
    }
  }
  return (
    <View style={[styles.headerStyle, containerStyle]}>
      {renderHeader()}
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    marginTop: 5,
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    height: '10%',
  }
});

FixedHeightView.propTypes = {
  style: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number])
}

FixedHeightView.defaultProps = {
  data: 'Welcome to this APP!'
}

export default FixedHeightView;
