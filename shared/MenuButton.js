import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from './Colors'
import { useNavigation } from '@react-navigation/native'
import MenuIcon from './icons/MenuIcon'

export default function MenuButton({bg="#D9D9D939", iconColor=Colors.TXT}) {

   
  return (
    <Pressable style={[styles.menuholder, {backgroundColor: bg}]} >
          <MenuIcon style={styles.icon} Color={iconColor}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    menuholder: {
        position: "absolute",
        top: -40,
        left: -44,
     
        width: 128,
        height: 128,
        borderRadius: 100
      },
    
      icon: {
        position: "absolute",
        right: 40,
        bottom: 40,
      },
})