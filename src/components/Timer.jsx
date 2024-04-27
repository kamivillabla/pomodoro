import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { TimerContext } from '../context/TimerContext';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import TextP from './TextP';

const Timer = () => {
  const { time, timeDefaults, currentTime } = useContext(TimerContext);

  // Calcula el progreso máximo basado en el tiempo predeterminado para el modo actual
  const maxTime = timeDefaults[currentTime];
  const progress = (time / maxTime) * 100;

  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`;

  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={250}
        width={15}
        fill={progress}
        tintColor='#F9379080'
        backgroundColor='#272B31'
      >
        {() => (
          <TextP type={'regular'} style={styles.time}>
            {formattedTime}
          </TextP>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: 80,
    textAlign: 'center',
    color: 'white',
  },
});
export default Timer;
