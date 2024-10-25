import { useFocusEffect } from "@react-navigation/native";
import { View, Text, StyleSheet, ScrollView, Animated } from "react-native";
import { setTabColor } from "../shared/TabColor";
import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Colors } from "../shared/Colors";
import Background from "./Background";
import { StatusBar } from "react-native";
import { AntDesign, FontAwesome, FontAwesome5, FontAwesome6, Fontisto } from "@expo/vector-icons";
import { normalize, SLIDER_HEIGHT, SLIDER_WIDTH } from "../shared/functions";
import * as Progress from "react-native-progress";
import { TouchableOpacity } from "react-native";


const ExpandableCard = ({ title, items, icon }) => {
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;


  const toggleExpand = () => {
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  const containerHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [80, items.length * 34],
  });

  return (

    <View style={styles.expandable} >
                      <Text>Last Updated: 10/10/2021</Text>
                      <View>
                      <Animated.View style={[styles.expandedView, { height:  containerHeight }]}>

                        <View>
                          
                            <Text style={styles.title}>{title}</Text>
                         
                          <View>
                          {items.map((item, index) => (
                            <Text key={index} style={styles.item}>{item}</Text>
                          ))}
                          </View>
                        </View>
                        <TouchableOpacity onPress={toggleExpand}>
                          {
                            icon
                          }
                        </TouchableOpacity>
                          
                    </Animated.View>
                  </View>
                  </View>
    
  );
};
export default function Medicalrecords (){
    const dispatch = useDispatch()

    const animation = useRef(new Animated.Value(0)).current;
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


    const sections = [
      { title: 'Medical Conditions', items: ['Diabetes', 'Hypertension', 'Cardiovascular Disease', 'Heart Disease', 'Respiratory Disease'], icon: <FontAwesome6 name="hand-holding-medical" size={40} color={Colors.BG} /> },
      { title: 'Medications', items: ['Metformin', 'Amlodipine', 'Atorvastatin', 'Lisinopril'], icon: <AntDesign name="medicinebox" size={40} color={Colors.BG} /> },
      { title: 'Allergies', items: ['Penicillin', 'Peanuts', 'Dust Mites'], icon: <FontAwesome5 name="allergies" size={40} color={Colors.BG} />},
      { title: 'Past Surgeries', items: ['Appendectomy', 'Knee Replacement'], icon: <Fontisto name="surgical-knife" size={40} color={Colors.BG} /> },
      { title: 'Family History', items: ['Heart Disease', 'Diabetes', 'Breast Cancer'], icon: <FontAwesome name="plus" size={30} color={Colors.BG} /> },
    ];

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
            
            <View style={{paddingLeft: 20, flex: 1}}>
                <Text style={[styles.text, {fontSize: normalize(18), marginTop: 15}]}>Medical Records</Text>

                <ScrollView style={{marginTop: 10, flex: 1}}>

                  {sections.map((section, index) => (
                    <ExpandableCard key={index} title={section.title} items={section.items} icon={section.icon}/>
                
                    ))}

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
  },
  expandedView: {
    overflow: 'hidden',
    width: SLIDER_WIDTH - 40,
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 1, 
    borderColor: Colors.BG,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
   
  },
  title:{
    fontSize: normalize(18),
    fontWeight: "600",
    color: Colors.TXTALT,
    marginBottom: 5
  },
  condition:{
    lineHeight: 35,
    fontSize: normalize(15),
    fontWeight: "400",
  },
  expandable: {
    marginVertical: 20,
   
  }
})