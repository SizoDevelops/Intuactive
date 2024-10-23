import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useCallback } from 'react'
import Background from './Background'
import { Colors } from '../shared/Colors'
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setTabColor } from '../shared/TabColor';
import MenuButton from '../shared/MenuButton';
import {  LineChart } from 'react-native-gifted-charts';

export default function Health() {
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

  const lineData = [
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
  ];

  const lineData2 = [
    {value: 0, dataPointText: '0'},
    {value: 30, dataPointText: '20'},
    {value: 48, dataPointText: '18'},
    {value: 10, dataPointText: '40'},
    {value: 16, dataPointText: '36'},
    {value: 10, dataPointText: '56'},
    {value: 70, dataPointText: '78'},
    {value: 74, dataPointText: '74'},
    {value: 58, dataPointText: '98'},
    {value: 60, dataPointText: '60'},
    {value: 44, dataPointText: '54'},
    {value: 25, dataPointText: '85'},
  ];



  return (
    <Background color={Colors.BGALT}>
      <MenuButton bg={"#A3A3A340"} iconColor={Colors.TXTALT}/>
      <View style={styles.textCont}>
        <Text style={styles.Text}>
          Medical Portfolio
        </Text>
        <Text style={[styles.Text, {fontSize: 48, fontWeight: "900", marginTop: 7, marginBottom: 30}]}>
          Overview
        </Text>
      </View>

      <View style={styles.Graph}>
      <LineChart
          data={lineData}
          data2={lineData2}
          height={250}
          showVerticalLines = {false}
          spacing={44}
          initialSpacing={0}
          color1="skyblue"
          color2="orange"
          textColor1="green"
          hideDataPoints
          hideRules
          
          textShiftY={-2}
          textShiftX={-5}
          textFontSize={13}
          curved
      />
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
    }
  })