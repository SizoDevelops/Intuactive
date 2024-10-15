import { View, Text, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'



export default function Brackgorund({children}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
