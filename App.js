import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App01 from './Apps/App01';

export default function App() {
  return (
    <App01/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
