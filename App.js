import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Brackgorund from './components/Background';
import Main from './shared/main';


export default function App() {
  return (
    <View>
      <Main/>
      <StatusBar style="auto" />
    </View>
  );
}

