import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface WhiteButtonProps {
  onPress: () => void;
  title: string;
}

const WhiteButton: React.FC<WhiteButtonProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

interface Styles {
  button: ViewStyle;
  buttonText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginVertical: 5,
    width: '20%',
  },
  buttonText: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default WhiteButton;
