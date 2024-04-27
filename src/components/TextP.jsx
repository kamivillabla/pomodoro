import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

export default function TextP({ type, style, ...props }) {
  const fontStyles = styles[type] || styles.default;
  return <RNText style={[fontStyles, style]} {...props} />;
}

const styles = StyleSheet.create({
  default: {
    fontFamily: 'RobotoRegular',
  },
  bold: {
    fontFamily: 'RobotoBold',
  },
  light: {
    fontFamily: 'RobotoLight',
  },
});
