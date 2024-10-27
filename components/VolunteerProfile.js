import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { setTabColor } from '../shared/TabColor';
import { StatusBar } from 'react-native';
import { Colors } from '../shared/Colors';
import Background from './Background';
import { FlatList } from 'react-native';
import { SLIDER_HEIGHT, SLIDER_WIDTH } from '../shared/functions';
import { Platform } from 'react-native';


export default function VolunteerProfile() {

    const dispatch = useDispatch()
    useFocusEffect(
      useCallback(() => {
          StatusBar.setBarStyle('light-content'); 
           StatusBar.setBackgroundColor(Colors.BG);
          StatusBar.setTranslucent(true);
  
          dispatch(setTabColor({
            background: Colors.BG,
            icons: Colors.TXT
          }))
      }, []),
    )
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];
    const Item = ({image=""}) => (
      <View style={styles.cont}>
        <View style={styles.item}>
          <Image source={image} style={styles.volunteerImage}/>
          
        </View>
        <View>
           <Text style={styles.text}>
            Providing assistance to those who may face challenges with digital literacy or accessing medical information.
          </Text>

        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Request Assistance</Text>
        </Pressable>
        </View>
       
      </View>
        
      );
  return (
    <Background color={Colors.BGALT}>
        <View style={styles.container}>
            <Text style={styles.header}>Volunteer Profile</Text>
            <Text style={[styles.header, {fontSize: 16, marginTop: 0}]}>Welcome, view our dedicated volunteer profile</Text>
            <View style={styles.active}>
                <View style={{gap: 10}}>
                <Text style={[styles.header, {fontSize: 26, marginTop: 0, color: Colors.TXTALT, textAlign: "left"}]}>Sizo Mhlongo</Text>
                <Text style={{fontSize: 16}}>Volunteer Status : Active</Text>
                </View>
                
                <Image style={styles.profile} source={require("../assets/images/volunteer.png")}/>
            </View>

            <FlatList style={styles.scroller}  data={DATA} 
            renderItem={({item}) => <Item image={require("../assets/images/volunteer.png")} />}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
           showsHorizontalScrollIndicator={false}
            />
        </View>
        
    </Background>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.BG,
        height: 426,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 20,
    
        position: "relative"
  
      },
      header: {
        color: Colors.TXT,
        textAlign: "center",
        marginTop: 20,
        fontSize: 30,
        fontWeight: "900"
      },
      active: {
        height: 77,
        backgroundColor: Colors.BGALT,
        width: "85%",
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingLeft: 40,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
      },
      profile: {
        width: 66,
        height: 66,
        borderRadius: 100,
        
      },
      item: {
      
        backgroundColor: Colors.BGALT,
        alignItems: "center",
        width: SLIDER_WIDTH - 40,
        borderRadius: 25,
        height: 350,
        shadowColor: "#000",
        elevation: 7,
        margin:20
      },
      volunteerImage: {
       marginTop: 30
      },
      scroller:{
        position: "absolute",
        bottom: -380,
        height: 600
      },
      text: {
        marginTop: 30,
        marginHorizontal: 20,
        fontSize: 14
      },
      btn:{
        marginTop: 20,
        margin: "auto",
        height: 56,
        width: 190,
        borderRadius: 50,
        backgroundColor: Colors.BG,
        justifyContent: "center",
        alignItems: "center"
      },
      btnText: {
        color: Colors.TXT,
        fontSize: 16
      },
      cont:{
        width: SLIDER_WIDTH,
      
      }
})