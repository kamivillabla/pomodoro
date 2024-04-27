import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { TimerContext } from '../context/TimerContext';
import TextP from './TextP';

const Header = () => {
  const { currentTime, setCurrentTime, setTime, timeDefaults } =
    useContext(TimerContext);
  const options = ['Pomodoro', 'Pausa Corto', 'Pausa Larga'];
  const timeModes = ['POMO', 'SHORT', 'BREAK'];

  return (
    <View style={styles.list}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setCurrentTime(timeModes[index]);
            setTime(timeDefaults[timeModes[index]]);
          }}
          style={[
            styles.itemStyle,
            currentTime === timeModes[index] ? styles.activeItemStyle : null,
          ]}
        >
          <TextP type={'bold'} style={styles.text}>
            {item}
          </TextP>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  itemStyle: {
    width: '33%',
    borderWidth: 1,
    padding: 5,
    borderColor: 'transparent',
    marginVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  activeItemStyle: {
    borderColor: 'white',
  },
  text: {
    color: 'white',
  },
});

export default Header;
