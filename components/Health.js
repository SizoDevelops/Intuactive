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
  const [isChecked, setChecked] = useState(false)
  const [isChecked1, setChecked1] = useState(false)
  const [isChecked2, setChecked2] = useState(false)
  const [isChecked3, setChecked3] = useState(false)
  const [isChecked4, setChecked4] = useState(false)
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
    {value: 60, dataPointText: '0'},
    {value: 20, dataPointText: '10'},
    {value: 40, dataPointText: '8'},
    {value: 68, dataPointText: '58'},
    {value: 10, dataPointText: '56'},
    {value: 70, dataPointText: '78'},
    {value: 74, dataPointText: '74'},
    {value: 58, dataPointText: '98'},
    {value: 10, dataPointText: '56'},
    {value: 70, dataPointText: '78'},
    {value: 74, dataPointText: '74'},
    {value: 58, dataPointText: '98'},
    {value: 34, dataPointText: '74'},
    {value: 28, dataPointText: '98'},
    {value: 50, dataPointText: '60'},
    {value: 44, dataPointText: '54'},
    {value: 25, dataPointText: '85'},
    {value: 60, dataPointText: '0'},
    {value: 20, dataPointText: '10'},
    {value: 40, dataPointText: '8'},
    
  ];

  const bloodPressure = [
    {value: 10, dataPointText: '0'},
    {value: 20, dataPointText: '20'},
    {value: 68, dataPointText: '18'},
    {value: 20, dataPointText: '40'},
    {value: 36, dataPointText: '36'},
    {value: 10, dataPointText: '56'},
    {value: 50, dataPointText: '78'},
    {value: 34, dataPointText: '74'},
    {value: 28, dataPointText: '98'},
    {value: 50, dataPointText: '60'},
    {value: 44, dataPointText: '54'},
    {value: 25, dataPointText: '85'},
    {value: 60, dataPointText: '0'},
    {value: 20, dataPointText: '10'},
    {value: 40, dataPointText: '8'},
    {value: 68, dataPointText: '58'},
    {value: 10, dataPointText: '56'},
    {value: 70, dataPointText: '78'},
    
  ];
  const sleepPattern = [
    {value: 10, dataPointText: '0'},
    {value: 50, dataPointText: '20'},
    {value: 38, dataPointText: '18'},
    {value: 10, dataPointText: '40'},
    {value: 16, dataPointText: '36'},
    {value: 5, dataPointText: '56'},
    {value: 60, dataPointText: '78'},
    {value: 74, dataPointText: '74'},
    {value: 58, dataPointText: '98'},
    {value: 40, dataPointText: '60'},
    {value: 44, dataPointText: '54'},
    {value: 25, dataPointText: '85'},
    {value: 74, dataPointText: '74'},
    {value: 58, dataPointText: '98'},
    {value: 10, dataPointText: '56'},
    {value: 70, dataPointText: '78'},
    {value: 74, dataPointText: '74'},
    {value: 58, dataPointText: '98'},

  ];
  const bloodOxygenSaturation = [
    {value: 70, dataPointText: '0'},
    {value: 30, dataPointText: '20'},
    {value: 48, dataPointText: '18'},
    {value: 10, dataPointText: '40'},
    {value: 16, dataPointText: '36'},
    {value: 10, dataPointText: '56'},
    {value: 20, dataPointText: '78'},
    {value: 64, dataPointText: '74'},
    {value: 58, dataPointText: '98'},
    {value: 60, dataPointText: '60'},
    {value: 44, dataPointText: '54'},
    {value: 25, dataPointText: '85'},
    {value: 16, dataPointText: '36'},
    {value: 5, dataPointText: '56'},
    {value: 60, dataPointText: '78'},
    {value: 74, dataPointText: '74'},
    {value: 58, dataPointText: '98'},
    {value: 40, dataPointText: '60'},
    {value: 44, dataPointText: '54'},
    {value: 25, dataPointText: '85'},
    {value: 74, dataPointText: '74'},

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
          showVerticalLines = {false}
          spacing={44}
          initialSpacing={0}
          color1={isChecked1 ? Colors.PURPLE : 'transparent'}
          color2={isChecked2 ? Colors.RED : 'transparent'}
          color3={isChecked3 ? Colors.ORANGE : 'transparent'}
          color4={isChecked4 ? Colors.GREEN : 'transparent'}
          hideData = {isChecked}
          hideDataPoints
          hideRules
          yAxisColor={Colors.TXT}
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
      margin: 15,
      height: 30,
      width: 30
    },

  })