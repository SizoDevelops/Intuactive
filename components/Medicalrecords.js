import { useFocusEffect } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { setTabColor } from "../shared/TabColor";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Colors } from "../shared/Colors";
import Background from "./Background";
import { StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function Medicalrecords (){
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
    return(
        <Background color= {Colors.BGALT}>
          <Text style= {Styles.icon}>
            <AntDesign name="left" size={24} color="black" /> Medical Records
          </Text>
        
          
          <Text style={Styles.text}>
            Sizo Mhlongo
          </Text>
          <Text style= {Styles.text}>
            Prescription Details
          </Text>

          <View>
            <Text></Text>
          </View>

        



        </Background>
    ) 
    
}
const Styles = StyleSheet.create({
  icon: {
    marginTop: 110,
    marginBottom: 10,
    marginLeft: 10,

  },

  text: {
    textAlign: "left",
    fontWeight: "800",
    marginTop: 5,
    marginBottom: "auto",
    marginLeft: 20,


  }
})
   