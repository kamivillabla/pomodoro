import React, { useContext } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { TimerContext } from '../context/TimerContext';
import TextP from './TextP';

const Controls = () => {
  const { isActive, setIsActive } = useContext(TimerContext);

  const handleStartStop = () => {
    if (!isActive) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <TouchableOpacity onPress={handleStartStop} style={styles.button}>
      <TextP type='bold' style={styles.text}>
        {isActive ? 'PARAR' : 'COMENZAR'}
      </TextP>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F9379080',
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default Controls;
