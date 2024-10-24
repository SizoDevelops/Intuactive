import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Background from './Background'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setTabColor } from '../shared/TabColor'
import { Colors } from '../shared/Colors'
import { SLIDER_HEIGHT, SLIDER_WIDTH } from '../shared/functions'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions'
import Config from '../config'

export default function ViewMap() {

  const [regions, setRegion] = useState({
    latitude: -26.205848761507273,
    longitude: 28.033889425970717,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0521,
  })
  const origin = {latitude: -26.195252799964948, longitude: 28.033747172261016};
  const destination = {latitude: -26.191859524197366, longitude: 28.0234963885825};
  const mapRef = useRef(null);
  const navigation = useNavigation()
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

  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({accuracy: 6});
      setUserLocation(location.coords);
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    })();
  }, []);

  // Recenter map to user's location
  const handleRecenter = () => {
    if (userLocation && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.003, // Adjust delta for zoom level
        longitudeDelta: 0.003,
      }, 1000); // The 1000ms duration for smooth animation
    }
  };
  const johannesburgCoords = {
    latitude: -26.2041,
    longitude: 28.0473,
  };

  const braamfonteinCoords = {
    latitude: -26.1926,
    longitude: 28.0343,
  };
  


    const [cars, setCars] = useState([
      { id: 1, latitude: -26.2041, longitude: 28.0473, speed: 0 },  // Central Johannesburg
  { id: 2, latitude: -26.2050, longitude: 28.0450, speed: 0 },  // Near Braamfontein
  { id: 3, latitude: -26.2030, longitude: 28.0460, speed: 0 },  // Near Parktown
  { id: 4, latitude: -26.2206, longitude: 28.0292, speed: 0 },  // Near Rosebank
  { id: 5, latitude: -26.2290, longitude: 28.0686, speed: 0 },  // Near Randburg
  { id: 6, latitude: -26.2480, longitude: 28.0350, speed: 0 },  // Near Greenstone Hill
  { id: 7, latitude: -26.1755, longitude: 28.0166, speed: 0 },  // Near Soweto
  { id: 8, latitude: -26.1895, longitude: 28.0421, speed: 0 },  // Near The Zone @ Rosebank
  { id: 9, latitude: -26.1475, longitude: 28.0247, speed: 0 },  // Near Kensington
  { id: 10, latitude: -26.1452, longitude: 28.0469, speed: 0 }  // Near Bedfordview
    ]);
  
    const moveCars = () => {
      setCars((prevCars) =>
        prevCars.map(car => {
          const deltaLat = (Math.random() - 0.5) * 0.0005;
          const deltaLng = (Math.random() - 0.5) * 0.0005;
          return {
            ...car,
            latitude: car.latitude + deltaLat,
            longitude: car.longitude + deltaLng,
            speed: Math.random() * 100,
          };
        })
      );
    };
  
    useEffect(() => {
      const interval = setInterval(moveCars, 1000); // Update every second
      return () => clearInterval(interval);
    }, []);
  
    const [carPositions, setCarPositions] = useState(cars);
 
    const [closestCar, setClosestCar] = useState(null);
    const [eta, setEta] = useState('');
  

    useEffect(() => {
      if (userLocation) {
        // Calculate distance to each car and find the closest one
        const closest = carPositions.reduce((prev, curr) => {
          const prevDistance = calculateDistance(userLocation, prev);
          const currDistance = calculateDistance(userLocation, curr);
          return currDistance < prevDistance ? curr : prev;
        });
  
        setClosestCar(closest);
        calculateETA(closest);
      }
    }, [userLocation, carPositions]);
  
    const calculateDistance = (loc1, loc2) => {
      const R = 6371; // Radius of the Earth in km
      const dLat = (loc2.latitude - loc1.latitude) * (Math.PI / 180);
      const dLon = (loc2.longitude - loc1.longitude) * (Math.PI / 180);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(loc1.latitude * (Math.PI / 180)) * Math.cos(loc2.latitude * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c; // Distance in km
    };
  
    const calculateETA = (car) => {
      const distance = calculateDistance(userLocation, car);
      const timeInHours = distance / (car.speed / 60); // Speed is in km/h
      const minutes = Math.round(timeInHours * 60);
      setEta(`${minutes} min`);
    };
  
    useEffect(() => {
      if (closestCar) {
        const interval = setInterval(() => {
          // Move the closest car towards the user's location
          setCarPositions((prevPositions) =>
            prevPositions.map((car) => {
              if (car.id === closestCar.id) {
                const deltaLatitude = (userLocation.latitude - car.latitude) * 0.01; 
                const deltaLongitude = (userLocation.longitude - car.longitude) * 0.01; 
                return {
                  ...car,
                  latitude: car.latitude + deltaLatitude,
                  longitude: car.longitude + deltaLongitude,
                };
              }
              return car;
            })
          );
        }, 2000); // Update every second
  
        return () => clearInterval(interval);
      }
    }, [closestCar, userLocation]);
  
  return (
    <Background>
      <View style={styles.Cont}>
        <Text>
          Sizo Mhlongo
        </Text>
        {closestCar && <Text style={styles.etaText}>ETA: {eta}</Text>}
      </View>

      <MapView provider={PROVIDER_GOOGLE} region={regions} style={styles.map} 
      onRegionChangeComplete={(region) => setRegion(region)} 
      loadingEnabled
      loadingIndicatorColor={Colors.BG}
      followsUserLocation
      showsUserLocation
      showsMyLocationButton={false}
      ref={mapRef}
      camera={{center: regions, heading: 0, pitch: 0, zoom: 15, altitude: 0}}
      >
          {cars.map(car => (
        <Marker
          key={car.id}
          coordinate={{ latitude: car.latitude, longitude: car.longitude }}
          title={`Car ${car.id}`}
          description={`Speed: ${car.speed.toFixed(2)} km/h`}
    
          image={require('../assets/images/car.png')}
        />
      ))}

{closestCar && userLocation && (
          <MapViewDirections
            origin={closestCar}
            destination={userLocation}
            apikey={Config.GOOGLE_MAPS_API_KEY}
            strokeWidth={3}
            strokeColor="blue"
            onReady={(result) => {
              console.log(`Distance: ${result.distance} km`);
              console.log(`ETA: ${result.duration} min`);
            }}
          />
        )}  
       
      </MapView>
      <TouchableOpacity style={styles.recenterButton} onPress={handleRecenter}>
        <Ionicons name="locate" size={30} color="white" />
      </TouchableOpacity>
      <View style ={styles.Container}>
        <View style={styles.Row}>
          

        </View>
        
      </View>
      </Background>
  )
}

const styles = StyleSheet.create({
  Cont:{
    backgroundColor: Colors.TXT,
    height:63,
    width:271,
    borderRadius: 25,
    marginHorizontal: 'auto',
    justifyContent: 'center',
    paddingLeft: 20,
    marginTop: 20,
    elevation: 10
  },    
  Container:{
        backgroundColor: Colors.TXT,
        width: SLIDER_WIDTH,
        height: 260,
        position: "absolute",
        bottom: 0,
        borderRadius: 25,
        elevation: 10

      },

      map: {
        width: '100%',
        height: SLIDER_HEIGHT,
        position: "absolute",
        zIndex: -1,
      },
      recenterButton: {
        position: 'absolute',
        bottom: 270,
        right: 10,
        backgroundColor: Colors.BG,
        padding: 15,
        borderRadius: 50,
        elevation: 5, 
      },
})