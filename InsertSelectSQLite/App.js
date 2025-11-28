import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import InsertUsuarioScreen from './screens/InsertUsuarioScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <InsertUsuarioScreen />
    </SafeAreaView>
  );
}
