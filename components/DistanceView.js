import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import Background from './Background'
import { Colors } from '../shared/Colors'
import { useDispatch } from 'react-redux'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { setTabColor } from '../shared/TabColor'
import { normalize, SLIDER_HEIGHT, SLIDER_WIDTH } from '../shared/functions'
import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons'
import { Image } from 'react-native'

export default function DistanceView() {
    const navigation = useNavigation()
    const dispatch = useDispatch()
  useFocusEffect(
    useCallback(() => {
        StatusBar.setBarStyle('dark-content'); // 'light-content' is also available
         StatusBar.setBackgroundColor(Colors.BGALT); //add color code
        StatusBar.setTranslucent(true);

        dispatch(setTabColor({
          background: Colors.BGALT,
          icons: Colors.TXTALT
        }))
    }, []),
  );
  return (
    <Background color={Colors.BGALT}>
        <View style={styles.main}>
          <View style={styles.wContainer}>
            <View style={styles.container}>
                <Pressable style={{position: "absolute", width: 50, height: 50, left: 15, top: 15}} onPress={() => {
                    navigation.goBack()
                }}>
                <AntDesign name="arrowleft" size={25} color={Colors.TXT} />
                </Pressable>
                <View style={styles.header}>
                   <Text style={{color: Colors.TXT, fontSize: normalize(20), fontWeight: "600"}}>November</Text>
                   <Text style={{color: Colors.TXT, fontSize: normalize(18), fontWeight: "600"}}>2024</Text>
                </View>
                <Text style={{fontSize: normalize(50), color: Colors.TXT, fontWeight: "600", marginHorizontal: "auto", marginTop: 30}}>09:30</Text>
            </View>
            <Text style={styles.text}>Braamfontein</Text>
        </View> 
        
            <View style={styles.location}>
                <View style={styles.containerRoute}>
                  
                <Ionicons name="location-outline" size={30} color={Colors.BG} />
                    <Image style={styles.image} source={require("../assets/images/ambulance.png")}/> 
                  
                   
                    <View style={styles.textCont}>
                        <Text style={[styles.text, {margin: 0}]}>Braamfontein</Text>
                        <Text>ventricular</Text>
                    </View>
                </View>

                <View style={styles.doted}/>

                <View style={styles.containerRoute}>
                  
                <Ionicons name="location-outline" size={30} color={Colors.BG} />
                    <Image style={styles.image} source={require("../assets/images/ambulance.png")}/> 
                  
                   
                    <View style={styles.textCont}>
                        <Text style={[styles.text, {margin: 0}]}>Braamfontein</Text>
                        <Text>ventricular</Text>
                    </View>
                </View>
            </View>

            <Pressable style={styles.btn}>
                <Text style={styles.btnText}>Map View</Text>
            </Pressable>
        </View>
        
    </Background>
  )
}

const styles = StyleSheet.create({
    container: {
        width: SLIDER_WIDTH - 20,
        height: 371,
        backgroundColor: Colors.BG,
        marginHorizontal: "auto",
      
        borderRadius: 25
    },
    wContainer: {
        width: SLIDER_WIDTH - 20,
        height: 454,
        backgroundColor: Colors.BGALT,
        marginHorizontal: "auto",
        
        borderRadius: 25
    },
    main: {
        height: SLIDER_HEIGHT - 30,
        width: SLIDER_WIDTH - 20,
        backgroundColor: "#EEF1F5",
        marginHorizontal: "auto",
        marginTop: 20,
        borderRadius: 25
    },
    text: {
        fontSize: normalize(18),
        fontWeight: "800",
        margin: 30,
    },
    location: {
       gap: 40,
       paddingLeft: 30,
       marginTop: 40
    },
    image: {
        width: 76,
        height: 48,
        marginLeft: 20
      
    },

    containerRoute:{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 30,
        width: "80%",
        marginLeft: 30,
    },
    imageCont:{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    doted: {
       position: "absolute",
       borderLeftWidth: 2,
       borderLeftColor: Colors.BG,
       height: 80,
       left: 75,
       top: 75,
       borderStyle: "dashed"
    },
    btn:{
        width: SLIDER_WIDTH - 100,
        height: 50,
        backgroundColor: Colors.BG,
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        borderRadius: 50
    },
    btnText: {
        fontSize: normalize(22),
        color: Colors.TXT,
        
    },
    header: {

        marginHorizontal: "auto",
        marginTop: 30,
        alignItems: "center"
    }
})