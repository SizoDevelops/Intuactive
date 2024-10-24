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
    <Background color={Colors.BGALT}>
  
      <View style={styles.container}>
      <MenuButton/>
        <View style={styles.header}>
          <Text style={styles.Text}>Good Morning</Text>
          <Text style={[styles.Text, {fontSize: normalize(40) , fontFamily: "Roboto-Black", marginTop: 20, marginBottom: 30}]}>Sizo Mhlongo</Text>
        </View>
        <View style={styles.textHolder}>
          <Text style={[styles.Text, {fontSize: normalize(16), lineHeight: 35}]}>
            Empowering you to take control of your well-being by providing easy access to health education and personalized insights.
          </Text>
        </View>

        <View style={styles.buttons}>
          <Pressable style={[styles.btn, {backgroundColor: Colors.BGALT}]} onPress={() => {
            navigation.navigate("LoginHome")
          }}>
              <Text style={[styles.Text, {color: Colors.TXTALT}]}>Learn</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={() => {
            navigation.navigate("Documents")
          }}>
              <Text style={styles.Text}>Volunteer</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.main}>
        <Text style={{fontSize: normalize(18), fontWeight: "900", marginTop: 20 }}>Learn about your health</Text>

        <View>
          <View style={styles.learn}>
          <MaterialCommunityIcons name="brain" size={40} color={Colors.TXTALT} />
          <Text style={{fontSize: normalize(16) }}>Mental Health</Text>
          <Pressable style={[styles.btn, {backgroundColor: Colors.BG}]} onPress={() => {
            navigation.navigate("DistanceView")
          }}>
              <Text style={styles.Text}>Learn</Text>
          </Pressable>
          </View>

          <View style={styles.learn}>
          <FontAwesome5 name="heartbeat" size={40} color={Colors.TXTALT} />
          <Text style={{fontSize: normalize(16) }}>Cardivascular Health</Text>
          <Pressable style={[styles.btn, {backgroundColor: Colors.BG}]}>
              <Text style={styles.Text}>Learn</Text>
          </Pressable>
          </View>
        </View>

        <Text style={{fontSize: normalize(20), fontWeight: "900", marginTop: 30 }}>Unlock a new dimension of learning</Text>


      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
    Text: {
      color: "#fff",
      fontSize: normalize(14),
      
    },
    container: {
      
      backgroundColor: Colors.BG,
      height: 337,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
      justifyContent: "flex-start",
      gap: 20

    },
     
    header: {
      paddingHorizontal: 40,
      top: 30,
      left: 70,
      
    },
    textHolder:{
      paddingHorizontal: 20,
   
    },
    btn: {
      borderWidth: 2,
      width: 128,
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 50,
      borderColor: "#fff"
    },
    buttons: {
      paddingHorizontal: 20,
      marginTop: 10,
      flexDirection: "row",
      gap: 30
    },
    main:{
      paddingHorizontal: 20,
    },
    learn:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 30
    }
  })