import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useCallback } from 'react'
import Background from './Background'
import { Colors } from '../shared/Colors'
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setTabColor } from '../shared/TabColor';
import MenuButton from '../shared/MenuButton';
import { BarChart, LineChart } from 'react-native-gifted-charts';

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
 
    {value: 54, label: "14 Oct"},
    {value: 58, label: "14 Oct"},
    {value: 46, label: "14 Oct"},
    {value: 48, label: "14 Oct"},
    {value: 10, label: "14 Oct"},
    {value: 18, label: "14 Oct"},
    {value: 30, label: "14 Oct"},
    {value: 68, label: "14 Oct"},
    {value: 54, label: "14 Oct"},
    {value: 58, label: "14 Oct"},
    {value: 46, label: "14 Oct"},

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
      <BarChart
        noOfSections={3}
        barBorderRadius={4}
        frontColor={Colors.BG}
        curved
        data={lineData}
        overflowTop={1}
        overflowBottom={10}
        height={150}
        spacing={44}
        initialSpacing={0}
        color1="skyblue"
        color2="orange"
        xAxisColor={"transparent"}
        yAxisColor={"transparent"}
        hideYAxisText
        hideRules
        xAxisLabelsVerticalShift={30}
        hideDataPoints
        startOpacity={0}
        endOpacity={0}
        textFontSize={13}
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