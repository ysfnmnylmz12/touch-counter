import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
const CountButton = ({ type }) => {
  const buttonText = type === 'plus' ? '+' : '-';
  return (
    <View style={styles.buttonWrapper}>
      <Button style={styles.button} title={buttonText} />
    </View>
  );
};

export default CountButton;

const styles = StyleSheet.create({
  buttonWrapper: {},
  button: {
    borderRadius: 5,
  },
});
