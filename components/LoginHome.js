import { StatusBar, StyleSheet, Text, View } from "react-native";
import Background from "./Background";
import { Colors } from "../shared/Colors";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setTabColor } from "../shared/TabColor";
import { FontAwesome6 } from "@expo/vector-icons";
import { normalize } from "../shared/functions";
export default function LoginHome(){
    const dispatch = useDispatch()
    useFocusEffect(
        useCallback(() => {
          StatusBar.setBarStyle("dark-content");
          StatusBar.setBackgroundColor(Colors.BGALT);
          StatusBar.setTranslucent(true);
    
          dispatch(
            setTabColor({
              background: Colors.BG,
              icons: Colors.TXT,
            })
          );
        }, [])
      )
    return (
        <Background color= {Colors.BGALT}>
            <View style= {styles.container}>
            <View style={styles.smallblue}>
            <FontAwesome6 name="computer" size={70} color={Colors.TXT} />

            </View>
            <View style={styles.bigblue}>
            <FontAwesome6 name="computer" size={70} color={Colors.TXT} />

            </View>

            </View>
            <Text style={styles.Text}>
              Sizo Mhlongo  
            </Text>
            <View style={styles.button}>
                <Text style={styles.Textbutton}>
                    Log in
                </Text>
            </View>
            <Text styles={styles.Text}>
                Log into another account
            </Text>
            <View style={styles.button}>
                <Text styles= {styles.Textbutton}>
                   Create new account
                </Text>

            </View>

        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 60,
        gap: 35, 
    },
    smallblue: {
        width: 140,
        height: 130,
        backgroundColor: Colors.BG,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"

    },
    bigblue: {
        width: 288,
        height: 205,
        backgroundColor: Colors.BG,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center"

    },
    Text: {
        textAlign:  "center",
        fontWeight: "600",
        fontSize: normalize(40),
        marginVertical: 20,
        marginVertical: 40,
    },

    button: {
        width: 280,
        height: 50,
        backgroundColor: Colors.BG,
        borderRadius: 25,
        marginHorizontal: "auto",
    },
    Textbutton: {
        textAlign: "center",
        textWeight: "200",
        color: Colors.TXT,
        fontSize: normalize(20),
        marginVertical: 10,
        
    },
    
    


})