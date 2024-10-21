import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from './Background'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Colors } from '../shared/Colors'
import { normalize } from '../shared/functions'

export default function Documents() {
  return (
      <Background>
        <View style = {styles.TopLayer}>
          <Text style ={styles.Text}>Supporting Documents</Text>
          <Ionicons name="notifications-outline" size={24} color={Colors.TXT} />
        </View>
        <View style={styles.Upload}>
          <Text style={styles.Tex}>Upload</Text>
        </View>
        <View style = {styles.MiddleLayer}>

        </View>
        <View>
          <Text style = {styles.TextBottom}>More services</Text>
        </View>
        <View style={styles.Container}>
          <View>

          </View>
          <View>

          </View>
        </View>
      </Background>
  )
}

const styles = StyleSheet.create({
      TopLayer:{
          flexDirection: 'row',
          marginTop: 50,
          justifyContent: 'space-between',
          paddingHorizontal: 20

      },
      Text:{
        color: Colors.TXT,
        fontSize: normalize(22),
        fontWeight: '500'
      },
      Upload:{
        backgroundColor: Colors.BG,
        height: 188,
        width: 348,
        borderRadius: 25,
        borderColor: Colors.TXT,
        borderWidth: 1.5,
        borderStyle: 'dashed',
        marginHorizontal: 'auto',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
      },
      Tex:{
        color: Colors.TXTLT
      },
      MiddleLayer:{
        borderWidth:1.5,
        height: 200,
        width: 348,
        marginHorizontal: 'auto',
        marginTop: 20,
        borderRadius: 25,
        borderColor: Colors.TXT
      },
      TextBottom:{
        color :Colors.TXT,
        fontSize: normalize(22),
        marginTop: 10,
        marginHorizontal: 'auto'
      },
      Container:{
        borderWidth: 1.5,
        height: 150,
        width:348,
        marginHorizontal: 'auto',
        

      }
})
