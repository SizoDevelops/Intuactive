import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import Background from './Background'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setTabColor } from '../shared/TabColor'
import { Colors } from '../shared/Colors'

export default function ViewMap() {
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
      <View style={styles.Cont}>
        <Text>
          Sizo Mhlongo
        </Text>
        <Text>
          07:00
        </Text>
      </View>
      <View style ={styles.Container}>
        <View style={styles.Row}>
          

        </View>
        
      </View>
      </Background>
  )
}

const styles = StyleSheet.create({
  Cont:{
    backgroundColor: Colors.TXT,
    height:63,
    width:271,
    borderRadius: 25,
    marginHorizontal: 'auto',
    justifyContent: 'center',
    paddingLeft: 20,
    marginTop: 20
  },    
  Container:{
        backgroundColor: Colors.TXT,
        width: 393,
        height:216,
        marginTop: 550,
        borderWidth: 1,
        borderRadius: 25,
      

      }
    
})