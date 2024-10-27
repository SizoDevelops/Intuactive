import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from './Background'
import { Colors } from '../shared/Colors'
import { normalize } from '../shared/functions'
import { Button } from 'react-native-web'
import { getSdkStatus, initialize, openHealthConnectSettings, readRecords, requestPermission, SdkAvailabilityStatus } from 'react-native-health-connect'

export default function BluetoothScan() {

  const initializeHealthConnect = async () => {
    const isInitialized = await initialize();
    console.log({ isInitialized });
  };
  const checkAvailability = async () => {
    const status = await getSdkStatus();
    if (status === SdkAvailabilityStatus.SDK_AVAILABLE) {
      console.log('SDK is available');
    }
  
    if (status === SdkAvailabilityStatus.SDK_UNAVAILABLE) {
      console.log('SDK is not available');
    }
  
    if (
      status === SdkAvailabilityStatus.SDK_UNAVAILABLE_PROVIDER_UPDATE_REQUIRED
    ) {
      console.log('SDK is not available, provider update required');
    }
  };
  const requestHealthPermissions = async () => {
    try {
        const permissions = await requestPermission([
            {
                accessType: 'read',
                recordType: 'BloodPressure',
            },
           
            {
                accessType: 'read',
                recordType: 'BodyTemperature',
            },
           
            {
                accessType: 'read',
                recordType: 'HeartRate',
            },
         
            {
                accessType: 'read',
                recordType: 'SleepSession',
            }
            
        
        ]);

        if(permissions.length === 0 ){
            console.log('No permissions granted');
            return
        }

        console.log('Granted permissions: ', { permissions });
    } catch (error) {
        console.error('Error requesting permissions: ', error);
    }
};



const readSampleData = async () => {
    // Calculate the current date
    const endTime = new Date(); // Current date and time
    const startTime = new Date(endTime); // Create a new Date object for startTime
    startTime.setDate(endTime.getDate() - 28); // Set startTime to 28 days before current date

    // Convert dates to ISO strings for compatibility with the API
    const startTimeISO = startTime.toISOString();
    const endTimeISO = endTime.toISOString();

    try {
        // Read Blood Pressure
        const { records: bloodPressureRecords } = await readRecords('BloodPressure', {
            timeRangeFilter: {
                operator: 'between',
                startTime: startTimeISO,
                endTime: endTimeISO,
            },
        });

        const bloodPressure = bloodPressureRecords.map(record => ({
            value: record.energy?.inKilojoules || record.energy?.inCalories, // Adjust based on your data
            dataPointText: record.energy?.inKilojoules || record.energy?.inCalories,
        }));

        console.log('Blood Pressure Data: ', JSON.stringify(bloodPressure, null, 2));

        // Read Heart Rate
        const { records: heartRateRecords } = await readRecords('HeartRate', {
            timeRangeFilter: {
                operator: 'between',
                startTime: startTimeISO,
                endTime: endTimeISO,
            },
        });

        const heartRate = heartRateRecords.map(record => ({
            value: record.energy?.inCalories, // Adjust according to your data structure
            dataPointText: record.energy?.inCalories,
        }));

        console.log('Heart Rate Data: ', JSON.stringify(heartRate, null, 2));

        // Read Sleep Pattern
        const { records: sleepRecords } = await readRecords('SleepSession', {
            timeRangeFilter: {
                operator: 'between',
                startTime: startTimeISO,
                endTime: endTimeISO,
            },
        });

        const sleepPattern = sleepRecords.map(record => ({
            value: record.duration || record.energy?.inCalories, // Adjust accordingly
            dataPointText: record.duration || record.energy?.inCalories,
        }));

        console.log('Sleep Pattern Data: ', JSON.stringify(sleepPattern, null, 2));

        // Read Blood Oxygen Saturation
        const { records: bloodOxygenRecords } = await readRecords('BodyTemperature', {
            timeRangeFilter: {
                operator: 'between',
                startTime: startTimeISO,
                endTime: endTimeISO,
            },
        });

        const OxygenSaturation = bloodOxygenRecords.map(record => ({
            value: record.energy?.inCalories, // Adjust accordingly
            dataPointText: record.energy?.inCalories,
        }));

        console.log('Oxygen Saturation Data: ', JSON.stringify(OxygenSaturation, null, 2));

    } catch (error) {
        console.error('Error reading health data: ', error);
    }
};



  React.useEffect(() => {
    initializeHealthConnect()
    checkAvailability()
    
    const fetchPermissions = async () => {
      await requestHealthPermissions();
  };

  fetchPermissions();
    readSampleData()
  }, [])

  return (
    <Background>
      <View style={styles.Cont}>
        <Image source={require('../assets/images/SearchIcon.png')}/>

      </View>
      <View style={styles.Contain}>
        <Text style={styles.heading}>No device found</Text>
      </View>
      <View style={styles.Paragraph}>
        <Text style={styles.text}>Make sure the health accesory you want to add is not already connected to another device.

        </Text>
      </View>
      <View style={styles.buttonRow}>  
        <Pressable style={styles.Button}>
            <Text style={styles.text}>Cancel</Text>
        </Pressable>
        <Pressable style={styles.Button}>
            <Text style={styles.text}>Scan</Text>
        </Pressable>

    </View>  
    </Background>
  )
}

const styles = StyleSheet.create({
    Cont:{
        marginHorizontal: 'auto',
        marginTop: 100
    },
    Contain:{
       marginHorizontal: 'auto',
       marginTop: 30
    },
    heading:{
        color: Colors.TXT,
        fontSize: normalize(30),
        fontWeight: '600'
    },
    Paragraph:{
        marginHorizontal: 'auto',
        marginTop: 30,
        paddingHorizontal: 50
    },
    text:{
        color: Colors.TXT,
        fontSize: normalize(16)
    },
    buttonRow:{
        flexDirection: 'row',
        marginHorizontal: 'auto',
        marginTop: 360,
        gap: 40
        
    },
    Button:{
        height: 53,
        width: 140,
        borderRadius: 25,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.TXT
    }

})







