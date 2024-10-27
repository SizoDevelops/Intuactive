import { StyleSheet, Text, View, Image, Pressable, ScrollView} from 'react-native'
import React from 'react'
import Background from './Background'
import { Colors } from '../shared/Colors'
import { AntDesign, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { normalize } from '../shared/functions'


export default function Learning() {
  return (
    <Background>
        <Text style={styles.text}>
            Edu Care
        </Text>
        
        <ScrollView style={styles.menu}>
        <Text style={[styles.text, {color: Colors.TXTALT, marginTop: 20}]}>
            Select Lesson
        </Text>
        <View style={styles.images}>
            <Pressable style={styles.buttons}>
                <Image source={require("../assets/images/health.png")}/>
                <Text style={{fontSize: normalize(16)}}>Routine learning</Text>
                <AntDesign name="checkcircle" size={24} color={Colors.BG} />
            </Pressable>
            
            <Pressable style={styles.buttons}>
               <Image source={require("../assets/images/learnH.png")}/> 
               <Text style={{fontSize: 16}}>Standard learning</Text>
               <AntDesign name="checkcircleo" size={24} color="#ddd" />
            </Pressable>
            
        </View>

        <Text style={[styles.text, {color: Colors.TXTALT, marginTop: 20, textAlign: "left", marginLeft: 40}]}>
            Select Frequency
        </Text>
        <View style={styles.btnCont}>
        <Pressable style={[styles.btn, {backgroundColor: Colors.BGALT, borderWidth: 2, borderColor: Colors.BG}]}>
              <Text style={[{marginTop: 0, fontWeight: "100", color: Colors.BG, fontSize: 14}]}>Weekly</Text>
          </Pressable>
        <Pressable style={[styles.btn, {backgroundColor: Colors.BGALT, borderWidth: 2, borderColor: Colors.BG}]}>
              <Text style={[{marginTop: 0, fontWeight: "100", color: Colors.BG, fontSize: 14}]}>Bi-Weekly</Text>
          </Pressable>
        <Pressable style={[styles.btn, {backgroundColor: Colors.BG}]}>

              <Text style={[{marginTop: 0, fontWeight: "100", color: "#fff", fontSize: 14}]}>Monthly</Text>
          </Pressable>
        </View>

        <View style={styles.lessons}>

            <View style={styles.butt}>
                <Pressable style={styles.lesson}>
                <FontAwesome5 name="lungs" size={40} color={Colors.TXT} />
                </Pressable>
                <Text style={{fontSize: 14,}}>
                Lungs Care
                </Text>
            </View>
            <View style={styles.butt}>
                <Pressable style={styles.lesson}>
                    <FontAwesome5 name="user-injured" size={40} color={Colors.TXT} />
                </Pressable>
                <Text style={{fontSize: 14,}}>
                    Managing Pain
                </Text>
            </View>
            <View style={styles.butt}>
                <Pressable style={styles.lesson}>
                <MaterialCommunityIcons name="diabetes" size={40} color={Colors.TXT} />
                </Pressable>
                <Text style={{fontSize: 14,}}>
                Diabetes
                </Text>
            </View>
            <View style={styles.butt}>
            <Pressable style={styles.lesson}>
                <FontAwesome5 name="allergies" size={40} color={Colors.TXT} />
                </Pressable>
                <Text style={{fontSize: 14,}}>
                Allergies
                </Text>
            </View>
            <View style={styles.butt}>
                <Pressable style={styles.lesson}>
                <FontAwesome5 name="pills" size={40} color={Colors.TXT} />
                </Pressable>
                <Text style={{fontSize: 14,}}>
                Chronic Illness
                </Text>
            </View>
            <View style={styles.butt}>
                <Pressable style={styles.lesson}>
                <MaterialIcons name="health-and-safety" size={40} color={Colors.TXT} />
                </Pressable>
                <Text style={{fontSize: 14,}}>
                Kidney Health
                </Text>
            </View>
     

        </View>

        </ScrollView>
        
    </Background>
  )
}

const styles = StyleSheet.create({
    text:{
        color: "#fff",
        fontSize: 22,
        fontFamily: "Roboto-Black",
        textAlign: "center",
        marginTop: 20
    },
    menu:{
        height: 972,
        backgroundColor: Colors.BGALT,
        bottom: -30,
        borderTopLeftRadius: 25,
        borderTopEndRadius: 25,
        
    },
    images:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20
    },
    buttons: {
        alignItems: "center",
        gap: 10
    },
    btn: {
        borderWidth: 2,
        width: 90,
        height: 43,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        borderColor: "#fff"
      },
      btnCont:{
    
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-evenly"
      },
      lesson:{
        backgroundColor: Colors.BG,
        width: 83,
        height: 82,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
      },
      lessons:{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 30,
        justifyContent: "center",
        marginTop: 50
      },
      butt:{
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        marginTop: -15
      }
})