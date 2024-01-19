import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface ButtonProps {
  style?: Object;
  text: string;
  color?: '#2D2D2D' | '#9B9B9B' | '#FF9427';
  onPress: (text: string) => void;
  variant?: 'large';
}
export const Button = ({
  text,
  color = '#2D2D2D',
  variant,
  style,
  onPress,
}: ButtonProps) => {
  return (
    <View style={[stylesButton.button, {backgroundColor: `${color}`}, style]}>
      <TouchableOpacity style={stylesButton.buttonPress}>
        <Text
          onPress={() => onPress(text)}
          style={[
            variant === 'large' ? stylesButton.textLarge : stylesButton.text,
            {color: color === '#9B9B9B' ? 'black' : 'white'},
          ]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const stylesButton = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    height: 80,
    width: 80,
    // backgroundColor: '#333',
  },
  buttonPress: {
    width: '100%',
  },
  textLarge: {
    textAlign: 'left',
    color: 'white',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
