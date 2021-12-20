
import { StatusBar, Text, View, AppRegistry } from 'react-native';
import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { expo } from './app.json';
import { Routes } from './src/routes';

export default function App() {
  return (
    <PaperProvider>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => App);