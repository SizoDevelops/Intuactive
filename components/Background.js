
import { View, Text, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../shared/Colors';



export default function Background({children, color=Colors.BG}) {
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: color}]}>
     
      <View style={styles.container}>{children}</View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
});
