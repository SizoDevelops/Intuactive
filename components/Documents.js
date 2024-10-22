import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from './Background'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Colors } from '../shared/Colors'
import { normalize } from '../shared/functions'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Fontisto from '@expo/vector-icons/Fontisto'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'



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
          <View style={styles.Mid}>
            <Fontisto name="pills" size={45} color={Colors.TXT} />
            <Text style={styles.Notification}>Bak-Set Forte</Text>
            <MaterialIcons name="menu" size={35} color={Colors.TXT} />
          </View>
          <View style ={styles.MidBottom}>
            <Text style={styles.NotificationText}>Refill reminder</Text>
            <MaterialIcons name="notifications-none" size={30} color={Colors.TXT} />
          </View>
          <View style={styles.pickuptextCont}>
            <Text style={styles.pickuptext}>Next pickup:</Text>
            <Text style={styles.pickuptext}> Fri, Nov 30, 4:00 PM</Text>
          </View>
          <Pressable style={styles.LongButton}>
            <Text>some text</Text>
          </Pressable>
        </View>
        <View>
          <Text style = {styles.TextBottom}>More services</Text>
        </View>
        <View style={styles.Container}>
          <Pressable style ={styles.LeftButton}>
            <MaterialCommunityIcons name="truck-delivery-outline" size={40} color={Colors.TXT}/>
            <Text style={styles.bottomtext}>Get your
                  Prescriptions
                  Delivered
            </Text>
          </Pressable>
          <Pressable style={styles.RightButton}>
            <MaterialCommunityIcons name="file-question-outline" size={40} color={Colors.TXT}/>
            <Text style={styles.bottomtext}>Connect with a
                  Provider Online
            </Text>
          </Pressable>
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
      Mid:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight:20,
        paddingLeft:20,
        marginTop: 20
      },
      Notification:{
        color: Colors.TXT,
        fontSize: normalize(16),
        fontWeight: '500'
      },
      NotificationText:{
        color: Colors.TXT,
        fontSize: normalize(14)
      },
      MidBottom:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 90,
        paddingLeft: 129,
        marginTop: -10,
        borderBottomWidth: 1.5,
        borderBottomColor: Colors.TXT,
        marginHorizontal: 'auto',
      },
      pickuptext:{
        color: Colors.TXT,
        paddingLeft: 7,
        marginTop: 10

      },
      pickuptextCont:{
        flexDirection: 'row',
      },
      LongButton:{
        backgroundColor: Colors.TXT,
        marginTop: 10,
        height: 54,
        width: 279,
        marginHorizontal: 'auto',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
      },
      TextBottom:{
        color :Colors.TXT,
        fontSize: normalize(22),
        marginTop: 10,
        marginLeft: 20
      },
      Container:{
        flexDirection: 'row',
        height: 150,
        width:348,
        marginHorizontal: 'auto',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20

      },
      LeftButton:{
        marginTop: 20,
        height: 116,
        width:134,
        borderRadius:25,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 9,
        backgroundColor: Colors.BG
        
      },
      RightButton:{
        height: 116,
        width: 134,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: Colors.BG,
        elevation: 9
        
      },
      bottomtext:{
        color: Colors.TXT,
        fontSize: normalize(14)
      }
})
