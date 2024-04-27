// src/layouts/MainLayout.js
import React from 'react';
import { SafeAreaView, StyleSheet, Platform } from 'react-native';
import Header from '../components/Header';
import Timer from '../components/Timer';
import Controls from '../components/Controls';

const MainLayout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Timer />
      <Controls />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    paddingHorizontal: 15,
    backgroundColor: '#272B37',
  },
});

export default MainLayout;
