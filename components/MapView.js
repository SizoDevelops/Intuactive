import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import Background from './Background'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setTabColor } from '../shared/TabColor'
import { Colors } from '../shared/Colors'

export default function MapView() {
  const navigation = useNavigation()
    const dispatch = useDispatch()
  useFocusEffect(
    useCallback(() => {
        StatusBar.setBarStyle('light-content'); // 'light-content' is also available
         StatusBar.setBackgroundColor(Colors.BG); //add color code
        StatusBar.setTranslucent(true);

        dispatch(setTabColor({
          background: Colors.BG,
          icons: Colors.TXT
        }))
    }, []),
  );
  return (
    <Background>
      <View style ={styles.Container}>
        <Text>Map</Text>
      </View>
      </Background>
  )
}

const styles = StyleSheet.create({
      Container:{
        backgroundColor: Colors.TXT,
        width: 393,
        height:216,
        marginTop: 570,
        borderWidth: 1,
        borderRadius: 25,
        marginRight:20

      }
    
})