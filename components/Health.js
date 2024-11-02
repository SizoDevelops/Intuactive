import { View, Text, StyleSheet, StatusBar } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Background from './Background';
import { Colors } from '../shared/Colors';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setTabColor } from '../shared/TabColor';
import MenuButton from '../shared/MenuButton';
import { LineChart } from 'react-native-gifted-charts';
import Checkbox from 'expo-checkbox';


export default function Health() {
  const [isChecked1, setChecked1] = useState(true);
  const [isChecked2, setChecked2] = useState(true);
  const [isChecked3, setChecked3] = useState(true);
  const [isChecked4, setChecked4] = useState(true);
  const [data, setData] = useState(null); // Store the fetched data
  const dispatch = useDispatch();

  // Fetch sample data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const sampleData = await readSampleData();
      setData(sampleData);
    };
    fetchData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor(Colors.BGALT);
      StatusBar.setTranslucent(true);

      dispatch(setTabColor({
        background: Colors.BGALT,
        icons: Colors.TXTALT,
      }));
    }, [dispatch])
  );

  // Sample Data Generation
  const readSampleData = async () => {
    const today = new Date();
    const BloodPressure = [];
    const HeartRate = [];
    const SleepPattern = [];
    const BodyTemperature = [];
  
    for (let i = 0; i < 28; i++) {
      const date = new Date();
      date.setDate(today.getDate() - i); // Set the date to today minus i days
  
      // Format date to "23 Sep"
      const dateFormatted = date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  
      // Create fake data
      BloodPressure.push({ 
        value: Math.floor(Math.random() * (130 - 110 + 1)) + 110, // Random BP between 110-130
        dataPointText: dateFormatted // Use formatted date
      });
      HeartRate.push({ 
        value: Math.floor(Math.random() * (80 - 60 + 1)) + 60, // Random HR between 60-80
        dataPointText: dateFormatted
      });
      SleepPattern.push({ 
        value: Math.floor(Math.random() * (8 - 4 + 1)) + 4, // Random sleep hours between 4-8
        dataPointText: `${Math.floor(Math.random() * (8 - 4 + 1)) + 4} hours on ${dateFormatted}`
      });
      BodyTemperature.push({ 
        value: Math.floor(Math.random() * (100 - 95 + 1)) + 95, // Random SpO2 between 95-100
        dataPointText: dateFormatted
      });
    }
  
    // Return the fake data as an object
    return {
      bloodPressure: BloodPressure,
      heartRate: HeartRate,
      sleepPattern: SleepPattern,
      bodyTemperature: BodyTemperature,
    };
  };
  

  // Ensure data is fetched before rendering the chart
  if (!data) return <Background color={Colors.BGALT}/>;

  return (
    <Background color={Colors.BGALT}>
      <MenuButton bg={"#A3A3A340"} iconColor={Colors.TXTALT} />
      <View style={styles.textCont}>
        <Text style={styles.Text}>Medical Vitals</Text>
        <Text style={[styles.Text, {fontSize: 40, fontWeight: "900", marginTop: 7, marginBottom: 10}]}>
          Overview
        </Text>
      </View>

      <View style={styles.Graph}>
        <LineChart
          data={data.heartRate} 
          data2={data.bloodPressure}
          data3={data.sleepPattern}
          data4={data.bodyTemperature}
          xAxisLabelTexts={data.heartRate.map(item => item.dataPointText)}
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
          xAxisColor={Colors.TXTALT}
          yAxisOffset={1}  
          yAxisMaxValue={130}   
          yAxisMinValue={0}     
          stepValue={15}        
          noOfVerticalLines={10} 
          textShiftY={-2}
          textShiftX={-5}
          textFontSize={13}
          curved
        />
      </View>
      
      {/* Checkboxes for each data line */}
      <View style={styles.container}>
        {[["Heart Rate", isChecked1, setChecked1, Colors.PURPLE],
          ["Blood Pressure", isChecked2, setChecked2, Colors.RED],
          ["Sleep Pattern", isChecked3, setChecked3, Colors.ORANGE],
          ["Blood Oxygen Saturation", isChecked4, setChecked4, Colors.GREEN]
        ].map(([label, isChecked, setChecked, color], idx) => (
          <View key={idx} style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? color : undefined}
            />
            <Text style={styles.paragraph}>{label}</Text>
          </View>
        ))}
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  Text: {
    color: Colors.TXTALT,
    fontSize: 18,
  },
  textCont: {
    top: 100,
    paddingHorizontal: 20,
  },
  Graph: {
    marginTop: 100,
  },
  container: {
    marginHorizontal: 16,
    marginVertical: 32,
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
    width: 25,
  },
});
