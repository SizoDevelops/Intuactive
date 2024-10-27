import { View, Text, StyleSheet, Pressable, StatusBar } from 'react-native'
import React, { useCallback, useState } from 'react'
import Background from './Background'
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors } from '../shared/Colors'
import MenuButton from '../shared/MenuButton'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setTabColor } from '../shared/TabColor'
import { normalize } from '../shared/functions'
import { TextInput } from 'react-native'


export default function Stats() {
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
      <Text style={styles.Text}>Personal Companion</Text>
        <View style={styles.bot}>
          <Text style={styles.botText}>Chronic Condition Management Quiz</Text>
        </View>
        <View style={styles.ContUser}>
          <View style={styles.User}>
            <TextInput style = {[styles.textInput,{marginLeft: 0},{color: Colors.TXT}]} placeholder={'Chronic Condition Management Quiz'}/>
          </View>
        </View>
      
    </Background>
  )
}

const styles = StyleSheet.create({
    Text:{
      color: Colors.TXT,
      fontSize: normalize(25),
      marginHorizontal: 'auto',
      marginTop: 30
    },
    bot:{
      backgroundColor: Colors.TXT+ 30,
      marginTop: 20,
      borderWidth:1,
      borderBottomLeftRadius: 25,
      borderTopEndRadius: 25,
      minHeight: 85,
      height: 'fit-content',
      width:310,
      marginLeft: 20,
      paddingHorizontal: 10
    },
    User:{
      backgroundColor: Colors.BG +10,
      marginTop: 10,
      borderWidth:1,
      borderBottomRightRadius: 25,
      borderTopLeftRadius: 25,
      minHeight: 85,
      height: 'fit-content',
      width:310,
      marginLeft: 60,
      paddingHorizontal: 10
    },
    botText:{
      color: Colors.TXT
    }
  
    

  })