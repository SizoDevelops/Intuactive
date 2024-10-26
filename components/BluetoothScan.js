import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from './Background'
import { Colors } from '../shared/Colors'
import { normalize } from '../shared/functions'
import { Button } from 'react-native-web'

export default function BluetoothScan() {
  return (
    <Background>
      <View style={styles.Cont}>
        <Image source={require('../assets/images/SearchIcon.png')}/>

      </View>
      <View style={styles.Contain}>
        <Text style={styles.heading}>No device found</Text>
      </View>
      <View style={styles.Paragraph}>
        <Text style={styles.text}>Make sure the health accesory you want to add is not already connected to another device.

        </Text>
      </View>
      <View style={styles.buttonRow}>  
        <Pressable style={styles.Button}>
            <Text style={styles.text}>Cancel</Text>
        </Pressable>
        <Pressable style={styles.Button}>
            <Text style={styles.text}>Scan</Text>
        </Pressable>

    </View>  
    </Background>
  )
}

const styles = StyleSheet.create({
    Cont:{
        marginHorizontal: 'auto',
        marginTop: 100
    },
    Contain:{
       marginHorizontal: 'auto',
       marginTop: 30
    },
    heading:{
        color: Colors.TXT,
        fontSize: normalize(30),
        fontWeight: '600'
    },
    Paragraph:{
        marginHorizontal: 'auto',
        marginTop: 30,
        paddingHorizontal: 50
    },
    text:{
        color: Colors.TXT,
        fontSize: normalize(16)
    },
    buttonRow:{
        flexDirection: 'row',
        marginHorizontal: 'auto',
        marginTop: 360,
        gap: 40
        
    },
    Button:{
        height: 53,
        width: 140,
        borderRadius: 25,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.TXT
    }

})







