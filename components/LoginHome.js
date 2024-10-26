import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import Background from "./Background";
import { Colors } from "../shared/Colors";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setTabColor } from "../shared/TabColor";
import { FontAwesome6 } from "@expo/vector-icons";
import { normalize } from "../shared/functions";
export default function LoginHome(){
    const navigation = useNavigation()
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
            <Text style={styles.text}>
              Sizo Mhlongo  
            </Text>
            <Pressable style={styles.button}>
                <Text style={styles.textButton}>
                    Log in
                </Text>
            </Pressable>
            <Text style={styles.textLogin}>
                Log into another account
            </Text>
            <Pressable onPress={() => {
              navigation.navigate("LoginTwo");
            }}  style={styles.button}>
                <Text style={styles.textButton}>
                    Create new account
                </Text>
            </Pressable>
            
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingTop: 60,
        gap: 15, 
    },
    smallblue: {
        width: 140,
        height: 130,
        backgroundColor: Colors.BG,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        

    },
    bigblue: {
        width: 288,
        height: 205,
        backgroundColor: Colors.BG,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,

    },
    text: {
        marginHorizontal:  "auto",
        fontWeight: "900",
        fontSize: normalize(20),
        marginVertical: 20,
        margin: "auto",
        marginTop: 10,
        

    },

    button: {
        width: 280,
        height: 50,
        backgroundColor: Colors.BG,
        borderRadius: 25,
        marginHorizontal: "auto",
        marginVertical: 10,
    },
    textButton: {
        textAlign: "center",
        textWeight: "200",
        color: Colors.TXT,
        fontSize: normalize(20),
        marginVertical: 10,
        margin: "auto",
        marginHorizontal: 20
        
    },

    textLogin: {
        textAlign: "center",
        fontWeight: "10",
        fontSize: normalize(20),
        color: Colors.BG,
        margin: "auto",
        marginVertical: 20,
        marginHorizontal:  "auto",
    },

    
    
    


})