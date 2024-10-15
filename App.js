import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Brackgorund from './components/Brackgorund';
import Index from './app';

export default function App() {
  return (
    <Brackgorund >
      <Index/>
      <StatusBar style="auto" />
    </Brackgorund>
  );
}

