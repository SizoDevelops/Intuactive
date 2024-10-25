import { useFocusEffect } from "@react-navigation/native";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { setTabColor } from "../shared/TabColor";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Colors } from "../shared/Colors";
import Background from "./Background";
import { StatusBar } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { normalize, SLIDER_WIDTH } from "../shared/functions";
import * as Progress from "react-native-progress";

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
            <View style={styles.header}>
              <Text style={styles.text}>Medical Records</Text>
              <FontAwesome name="exchange" size={30} color={Colors.TXTALT} />
            </View>

           <View style={{paddingLeft: 20}}>

              <Text style={[styles.text, {fontSize: normalize(18), marginTop:10}]}>Patient Information</Text>

            <View style={styles.container}>

                <View>

                    <Text style={{fontSize: normalize(15), fontWeight: "bold", marginTop: 3}}>Name:</Text>
                    <Text style={{fontSize: normalize(15), fontWeight: "bold", marginTop: 3}}>Age:</Text>
                    <Text style={{fontSize: normalize(15), fontWeight: "bold", marginTop: 3}}>Gender:</Text>
                    <Text style={{fontSize: normalize(15), fontWeight: "bold", marginTop: 3}}>Height:</Text>
                    <Text style={{fontSize: normalize(15), fontWeight: "bold", marginTop: 3}}>Weight:</Text>
                    
                </View>

                <View>
                    <Text style={{fontSize: normalize(15), fontWeight: "bold", marginTop: 3}}>John Doe</Text>
                    <Text style={{fontSize: normalize(15), fontWeight: "bold", marginTop: 3}}>20</Text>
                    <Text style={{fontSize: normalize(15), fontWeight: "bold", marginTop: 3}}>Male</Text>
                    <Text style={{fontSize: normalize(15), fontWeight: "bold", marginTop: 3}}>180</Text>
                    <Text style={{fontSize: normalize(15), fontWeight: "bold", marginTop: 3}}>70</Text>
                </View>

            </View>
           </View>

            <View style={[styles.header, {marginTop: 30}]}>
                <Text style={[styles.text, {fontSize: normalize(18)}]}>Medication Timeline</Text>
                <Text style={[styles.text, {fontSize: normalize(18)}]}>2 Months 6 Days</Text>
            </View>

            <View style={[{marginTop: 15, alignItems: "center", justifyContent: "space-evenly", flexDirection: "row"}]}>
              <Text>10 Oct</Text>
                <Progress.Bar width={SLIDER_WIDTH - 120} color={"#0FA958"} height={10} unfilledColor={"#0FA95843"} progress={0.5} borderWidth={0}/>
                <Text>16 Dec</Text>
            </View>
            
            <View style={[styles.container, {paddingLeft: 20}]}>
                <Text style={[styles.text, {fontSize: normalize(18), marginTop: 15}]}>Medical Records</Text>

                <ScrollView style={{marginTop: 20}}>

                  <View style={styles.expandable}>
                      <Text>Last Updated: 10/10/2021</Text>
                  </View>
                    
                </ScrollView>
            </View>
        </Background>
    ) 
    
}
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 70,
    position: "relative"
    
  },
  text: {
    fontSize: normalize(30),
    fontWeight: "800",
    color: Colors.TXTALT,
  },
  container:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: SLIDER_WIDTH / 2,
    marginTop: 10
  }
})
   