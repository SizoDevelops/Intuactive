import { StyleSheet, Text, View, Image, Pressable} from 'react-native'
import React from 'react'
import Background from './Background'
import { Colors } from '../shared/Colors'
import { AntDesign, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'


export default function Learning() {
  return (
    <Background>
        <Text style={styles.text}>
            Edu Care
        </Text>
        <View style={styles.menu}>
        <Text style={[styles.text, {color: Colors.TXTALT, marginTop: 20}]}>
            Select Lesson
        </Text>
        <View style={styles.images}>
            <Pressable style={styles.buttons}>
                <Image source={require("../assets/images/health.png")}/>
                <Text style={{fontSize: 18}}>Routine learning</Text>
                <AntDesign name="checkcircle" size={40} color={Colors.BG} />
            </Pressable>
            
            <Pressable style={styles.buttons}>
               <Image source={require("../assets/images/learnH.png")}/> 
               <Text style={{fontSize: 18}}>Standard learning</Text>
               <AntDesign name="checkcircleo" size={40} color="#ddd" />
            </Pressable>
            
        </View>

        <Text style={[styles.text, {color: Colors.TXTALT, marginTop: 20, textAlign: "left", marginLeft: 40}]}>
            Select Frequency
        </Text>
        <View style={styles.btnCont}>
        <Pressable style={[styles.btn, {backgroundColor: Colors.BGALT, borderWidth: 2, borderColor: Colors.BG}]}>
              <Text style={[{marginTop: 0, fontWeight: "100", color: Colors.BG, fontSize: 18}]}>Weekly</Text>
          </Pressable>
        <Pressable style={[styles.btn, {backgroundColor: Colors.BGALT, borderWidth: 2, borderColor: Colors.BG}]}>
              <Text style={[{marginTop: 0, fontWeight: "100", color: Colors.BG, fontSize: 18}]}>Bi-Weekly</Text>
          </Pressable>
        <Pressable style={[styles.btn, {backgroundColor: Colors.BG}]}>
              <Text style={[{marginTop: 0, fontWeight: "100", color: "#fff", fontSize: 18}]}>Monthly</Text>
          </Pressable>
        </View>

        <View style={styles.lessons}>

            <View style={styles.butt}>
                <Pressable style={styles.lesson}>
                <FontAwesome5 name="lungs" size={35} color={Colors.TXT} />
                </Pressable>
                <Text style={{fontSize: 18}}>
                Caring for Your Lungs
                </Text>
            </View>
            <View style={styles.butt}>
                <Pressable style={styles.lesson}>
                <FontAwesome5 name="allergies" size={35} color={Colors.TXT} />
                </Pressable>
                <Text style={{fontSize: 18}}>
                Allergies
                </Text>
            </View>
            <View style={styles.butt}>
                <Pressable style={styles.lesson}>
                <MaterialCommunityIcons name="diabetes" size={40} color={Colors.TXT} />
                </Pressable>
                <Text style={{fontSize: 18}}>
                Diabetes
                </Text>
            </View>
            <View style={styles.butt}>
                <Pressable style={styles.lesson}>
                <FontAwesome5 name="user-injured" size={40} color={Colors.TXT} />
                </Pressable>
                <Text style={{fontSize: 18}}>
                    Managing Pain
                </Text>
            </View>
            <View style={styles.butt}>
                <Pressable style={styles.lesson}>
                <FontAwesome5 name="pills" size={40} color={Colors.TXT} />
                </Pressable>
                <Text style={{fontSize: 18}}>
                Chronic Illnesses
                </Text>
            </View>
            <View style={styles.butt}>
                <Pressable style={styles.lesson}>
                <MaterialIcons name="health-and-safety" size={40} color={Colors.TXT} />
                </Pressable>
                <Text style={{fontSize: 18}}>
                Kidney Health
                </Text>
            </View>
     

        </View>

        </View>
    </Background>
  )
}

const styles = StyleSheet.create({
    text:{
        color: "#fff",
        fontSize: 25,
        fontFamily: "Roboto-Black",
        textAlign: "center",
        marginTop: 30
    },
    menu:{
        height: 972,
        backgroundColor: Colors.BGALT,
        bottom: -30,
        borderTopLeftRadius: 25,
        borderTopEndRadius: 25
    },
    images:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30
    },
    buttons: {
        alignItems: "center",
        gap: 10
    },
    btn: {
        borderWidth: 2,
        width: 118,
        height: 50,
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
        width: 100,
        height: 100,
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
        gap: 10
      }
})