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

  const BloodPressure = [
    {value: 60, dataPointText: '0' },
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

  const HeartRate = [
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

  const SleepPattern = [
    {value: 0, dataPointText: '0'},
    {value: 70, dataPointText: '20'},
    {value: 68, dataPointText: '18'},
    {value: 10, dataPointText: '40'},
    {value: 16, dataPointText: '36'},
    {value: 20, dataPointText: '56'},
    {value: 50, dataPointText: '78'},
    {value: 34, dataPointText: '74'},
    {value: 58, dataPointText: '98'},
    {value: 10, dataPointText: '60'},
    {value: 44, dataPointText: '54'},
    {value: 25, dataPointText: '85'},
  ];

  const BloodOxygenSaturation = [
    {value: 0, dataPointText: '0'},
    {value: 50, dataPointText: '20'},
    {value: 68, dataPointText: '18'},
    {value: 10, dataPointText: '40'},
    {value: 76, dataPointText: '36'},
    {value: 40, dataPointText: '56'},
    {value: 70, dataPointText: '78'},
    {value: 24, dataPointText: '74'},
    {value: 18, dataPointText: '98'},
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
        <Text style={[styles.Text, {fontSize: 40, fontWeight: "900", marginTop: 2, marginBottom: 30}]}>
          Overview
        </Text>
      </View>

      <View style={styles.Graph}>
      <LineChart
          data={BloodPressure}
          data2={HeartRate}
          data3={SleepPattern}
          data4={BloodOxygenSaturation}
          height={200}
          showVerticalLines = {false}
          spacing={44}
          initialSpacing={0}
          color1= {Colors.RED}
          color2= {Colors.GREEN}
          color3= {Colors.ORANGE}
          color4= {Colors.AQUA}
          hideDataPoints
          hideRules
          yAxisColor={Colors.TXT}
          xAxisColor={Colors.TXT}
          textShiftY={-2}
          textShiftX={-5}
          textFontSize={13}
          curved
      />
      </View>
      <View>
          {/* <View>
            <Text style={styles.Text}>Legend</Text>
          </View> */}
          <View style = {styles.Container}>
            {/* <View style={styles.Colmn}> */}
            <View style={styles.Colmn}>    
              <Text style={styles.text}>Blood pressure |</Text>
              <View style={[styles.Block, {backgroundColor:Colors.RED}]}/>
            </View>
            <View style={styles.Colmn}>
              <Text style={styles.text}>Heart rate |</Text>
              <View style={[styles.Block, {backgroundColor:Colors.GREEN}]}/>
            </View>
            <View style={styles.Colmn}>
              <Text style={styles.text}>Sleep Patterns |</Text>
              <View style={[styles.Block, {backgroundColor:Colors.ORANGE}]}/>  
            </View>
            <View style={styles.Colmn}>
              <Text style={styles.text}>Blood Oxygen Saturation |</Text>
              <View style={[styles.Block, {backgroundColor:Colors.AQUA}]}/>
            </View>
          </View>  
            {/* <View style={[styles.Block, {backgroundColor:Colors.PURPLE}]}/>
            <Text style={styles.text}>Calorie Burn</Text>
          </View> */}
          
          
          
          
          
            
            
          
          

          
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
      marginTop: 80
    },
    Container:{
      flexDirection: 'row',
      gap: 5,
      paddingHorizontal: 10,
      justifyContent: 'space-between'
    },
    Colmn:{
      flexDirection: 'colmn',
      // paddingHorizontal: 10,
      // gap:45
    },
    text:{
      color: Colors.TXTALT,
      fontSize: 10
    },
    Block:{
      height: 5,
      width: 20,
      marginBottom: 8,
      marginTop: 2,
      borderRadius: 25
    }

  })