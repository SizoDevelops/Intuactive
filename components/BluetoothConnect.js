import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from './Background'
import { Colors } from '../shared/Colors'
import { normalize } from '../shared/functions'

export default function BluetoothConnect() {

   


  return (
    <Background>
        <View style={styles.Container}>
            <Text style={styles.heading}>Devices found</Text>
        </View>
        <View style={styles.SubHeading}>
            <Text style={styles.Sub}>Select device</Text>
        </View>
        <View style={styles.DevCont}>
            <Pressable style={styles.selectDevice}>
                <Text style={styles.device}>Apple watch series 9</Text></Pressable>
            <Pressable style={styles.selectDevice}><Text style={styles.device}>Smart Ring</Text></Pressable>
            <Pressable style={styles.selectDevice}><Text style={styles.device}>Galaxy watch 7</Text></Pressable>
            <Pressable style={styles.selectDevice}><Text style={styles.device}>Huawei watch 3</Text></Pressable>
        </View>
        <View style={styles.ConnectButton}>
         <Text style={styles.ConnectText}>Connect</Text>   
        </View>
    </Background>
  )
}

const styles = StyleSheet.create({
    Container:{
        marginHorizontal: 'auto',
        marginTop: 60
    },
    heading:{
        color: Colors.TXT,
        fontSize: normalize(30),
        fontWeight: '600'
    },
    SubHeading:{
        marginHorizontal: 'auto',
        marginTop: 10
    },
    Sub:{
        color: Colors.TXT,
        fontSize: 20,
        fontWeight: '500'

    },
    DevCont:{
        paddingHorizontal: 20,
        gap: 10,
        marginTop: 20
    },
    device:{
        color: Colors.TXT,

    },
    ConnectButton:{
        marginHorizontal: 'auto',
        marginTop: 370,
        borderColor: Colors.TXT,
        borderWidth: 1,
        height: 80,
        width: 308,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    },
    ConnectText:{
        color: Colors.TXT,
        fontSize: normalize(18),
        fontWeight: '500'
    }

})
