import { View, Text, StyleSheet, StatusBar, Pressable } from 'react-native'
import React, { useCallback } from 'react'
import Background from './Background'
import { Colors } from '../shared/Colors'
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setTabColor } from '../shared/TabColor';
import MenuButton from '../shared/MenuButton';
import {  LineChart } from 'react-native-gifted-charts';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';


export default function Health() {
  const [isChecked1, setChecked1] = useState(true)
  const [isChecked2, setChecked2] = useState(true)
  const [isChecked3, setChecked3] = useState(true)
  const [isChecked4, setChecked4] = useState(true)
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

 
  const heartRate = [
    { value: 72, dataPointText: '72' },
    { value: 75, dataPointText: '75' },
    { value: 78, dataPointText: '78' },
    { value: 74, dataPointText: '74' },
    { value: 77, dataPointText: '77' },
    { value: 79, dataPointText: '79' },
    { value: 76, dataPointText: '76' },
    { value: 80, dataPointText: '80' },
    { value: 74, dataPointText: '74' },
    { value: 82, dataPointText: '82' }
  ];
  
  const bloodPressure = [
    { value: 118, dataPointText: '118' },
    { value: 120, dataPointText: '120' },
    { value: 122, dataPointText: '122' },
    { value: 90, dataPointText: '117' },
    { value: 119, dataPointText: '119' },
    { value: 121, dataPointText: '121' },
    { value: 116, dataPointText: '116' },
    { value: 118, dataPointText: '118' },
    { value: 120, dataPointText: '120' },
    { value: 119, dataPointText: '119' }
  ];
  
  const sleepPattern = [
    { value: 30, dataPointText: '30' },
    { value: 45, dataPointText: '45' },
    { value: 38, dataPointText: '38' },
    { value: 50, dataPointText: '50' },
    { value: 25, dataPointText: '25' },
    { value: 40, dataPointText: '40' },
    { value: 35, dataPointText: '35' },
    { value: 30, dataPointText: '30' },
    { value: 45, dataPointText: '45' },
    { value: 33, dataPointText: '33' }
  ];
  
  const bloodOxygenSaturation = [
    { value: 98, dataPointText: '98' },
    { value: 97, dataPointText: '97' },
    { value: 99, dataPointText: '99' },
    { value: 98, dataPointText: '98' },
    { value: 97, dataPointText: '97' },
    { value: 96, dataPointText: '96' },
    { value: 98, dataPointText: '98' },
    { value: 99, dataPointText: '99' },
    { value: 98, dataPointText: '98' },
    { value: 97, dataPointText: '97' }
  ];
  
  
  return (
    <Background color={Colors.BGALT}>
      <MenuButton bg={"#A3A3A340"} iconColor={Colors.TXTALT}/>
      <View style={styles.textCont}>
        <Text style={styles.Text}>
          Medical Vitals
        </Text>
        <Text style={[styles.Text, {fontSize: 40, fontWeight: "900", marginTop: 7, marginBottom: 10}]}>
          Overview
        </Text>
      </View>

      <View style={styles.Graph}>
      <LineChart
    data={heartRate} 
    data2={bloodPressure}
    data3={sleepPattern}
    data4={bloodOxygenSaturation}
    height={200}
    overflowTop={300}
    showVerticalLines={false}
    spacing={44}
    initialSpacing={0}
    color1={isChecked1 ? Colors.PURPLE : 'transparent'}
    color2={isChecked2 ? Colors.RED : 'transparent'}
    color3={isChecked3 ? Colors.ORANGE : 'transparent'}
    color4={isChecked4 ? Colors.GREEN : 'transparent'}
    
    hideDataPoints={true}
   
    hideRules
    
    yAxisColor={Colors.TXT}
    xAxisColor={Colors.TXT}
    yAxisOffset={20}  
   
    yAxisMaxValue={130}   
    yAxisMinValue={0}     
    stepValue={20}        
    noOfVerticalLines={10} 

    textShiftY={-2}
    textShiftX={-5}
    textFontSize={13}
    curved
/>

      </View>
      <View style={styles.listVitals}>
        <View style={styles.ColmnVitals}>
          <Text style={styles.textVitals}>Heart Rate</Text>
          <View style={[styles.Block , {backgroundColor: Colors.PURPLE} ]}/>
        </View>
        <View style={styles.ColmnVitals}>
          <Text style={styles.textVitals}>Blood Pressure</Text>
          <View style={[styles.Block , {backgroundColor:Colors.RED}]}/>
        </View>
        <View style={styles.ColmnVitals}>
          <Text style={styles.textVitals}>Sleep Pattern</Text>
          <View style={[styles.Block ,{backgroundColor:Colors.ORANGE}]}/>
        </View>
        <View style={styles.ColmnVitals}>
          <Text style={styles.textVitals}>Blood Oxygen Saturation</Text>
          <View style={[styles.Block , {backgroundColor:Colors.GREEN}]} />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked1}
            onValueChange={setChecked1}
            color={isChecked1 ? Colors.PURPLE : undefined}
          />
          <Text style={styles.paragraph}>Heart rate</Text>
        
          </View>
        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked2}
            onValueChange={setChecked2}
            color={isChecked2 ? Colors.RED : undefined}
          />
          <Text style={styles.paragraph}>Blood pressure</Text>
        </View>
        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked3}
            onValueChange={setChecked3}
            color={isChecked3 ? Colors.ORANGE : undefined}
          />
          <Text style={styles.paragraph}>Sleep Pattern</Text>
        </View>
        <View style={styles.section}>
          <Checkbox 
            style={styles.checkbox}
            value={isChecked4}
            onValueChange={setChecked4}
            color={isChecked4 ? Colors.GREEN : undefined}
          />
          <Text style={styles.paragraph}>Blood Oxygen Saturation</Text>
        </View>
    </View>


  </Background>
  )
}

const styles = StyleSheet.create({
    Text: {
      color: Colors.TXTALT,
      fontSize: 18
    },
    textCont:{
      top: 100,
      paddingHorizontal: 20
    },
    Graph: {
      marginTop: 100
    },
    listVitals:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10
    },
    Block:{
      height: 3,
      width: 20,
      borderRadius: 25
      
    },
    textVitals:{
      fontSize: 12,
      fontWeight: '400'
    },
    container: {
      marginHorizontal: 16,
      marginVertical: 32,
      flexDirection: 'column'
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    paragraph: {
      fontSize: 17,
    },
    checkbox: {
      margin: 18,
      height: 25,
      width: 25
    },

  })