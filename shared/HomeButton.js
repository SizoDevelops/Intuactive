import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function HomeButton({image_path, buttonText, buttonIcon}) {

  const navigation = useNavigation()

  return (
    <Pressable style={styles.buttons} onPress={() => {
      navigation.navigate("Login")
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
        width: 120,
        height: 107,
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
        fontSize: 16,
        fontWeight: "900"
      }
})