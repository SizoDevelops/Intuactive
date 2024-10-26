import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { normalize } from './functions'

export default function HomeButton({image_path, buttonText, buttonIcon, screen}) {

  const navigation = useNavigation()

  return (
    <Pressable style={styles.buttons} onPress={() => {
      navigation.navigate(screen)
    }}>
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
        width: normalize(140) ,
        height: normalize(104) ,
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
        fontSize: normalize(14) ,
        fontWeight: "900"
      }
})