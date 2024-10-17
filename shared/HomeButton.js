import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'

export default function HomeButton({image_path, buttonText, buttonIcon}) {
  return (
    <Pressable style={styles.buttons}>
    <Image style={styles.image} source={image_path}/>
    <View style={styles.btnIcon}>
        {buttonIcon}
    </View>

    <Text style={styles.btnText}>{buttonText}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    buttons:{
        backgroundColor: "#fff",
        width: 130,
        height: 117,
        borderRadius: 15,
        marginTop: 60,
        alignItems: "center",
        justifyContent: "center"
       
      },
      image: {
        position: "absolute",
        top: -48
      },
    
      btnText:{
        top: 10,
        fontSize: 20,
        fontWeight: "900"
      }
})