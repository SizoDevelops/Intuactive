import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from './Colors'
import { useNavigation } from '@react-navigation/native'

export default function MenuButton({bg="#D9D9D939", iconColor=Colors.TXT}) {

   
  return (
    <Pressable style={[styles.menuholder, {backgroundColor: bg}]} >
          <Ionicons style={styles.icon} name="menu" size={40} color={iconColor} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
    menuholder: {
        position: "absolute",
        top: -40,
        left: -44,
     
        width: 138,
        height: 138,
        borderRadius: 100
      },
    
      icon: {
        position: "absolute",
        right: 40,
        bottom: 40,
      },
})