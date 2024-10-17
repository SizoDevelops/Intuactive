import { View, Text, SafeAreaView, StyleSheet} from 'react-native'


export default function Background({children}) {
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
