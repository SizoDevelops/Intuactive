import { Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Background from './Background';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setTabColor } from '../shared/TabColor';
import { Colors } from '../shared/Colors';
import { SLIDER_HEIGHT, SLIDER_WIDTH } from '../shared/functions';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_API_KEY} from '@env'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function ViewMap() {
  const [regions, setRegion] = useState({
    latitude: -26.205848761507273,
    longitude: 28.033889425970717,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0521,
  });
  
  const mapRef = useRef(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const animationRef = useRef(null);
  
  const [userLocation, setUserLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [cars, setCars] = useState([
    { id: 1, latitude: -26.2041, longitude: 28.0473, speed: 0 },
    { id: 2, latitude: -26.2050, longitude: 28.0450, speed: 0 },
    { id: 3, latitude: -26.2030, longitude: 28.0460, speed: 0 },
    { id: 4, latitude: -26.2206, longitude: 28.0292, speed: 0 },
    { id: 5, latitude: -26.2290, longitude: 28.0686, speed: 0 },
    { id: 6, latitude: -26.2480, longitude: 28.0350, speed: 0 },
    { id: 7, latitude: -26.1755, longitude: 28.0166, speed: 0 },
    { id: 8, latitude: -26.1895, longitude: 28.0421, speed: 0 },
    { id: 9, latitude: -26.1475, longitude: 28.0247, speed: 0 },
    { id: 10, latitude: -26.1452, longitude: 28.0469, speed: 0 },
  ]);
  
  const [carPositions, setCarPositions] = useState(cars);
  const [closestCar, setClosestCar] = useState(null);
  const [eta, setEta] = useState(0);
  const [currentSegment, setCurrentSegment] = useState(0);
  const [animationProgress, setAnimationProgress] = useState(0);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor(Colors.BGALT);
      StatusBar.setTranslucent(true);

      dispatch(setTabColor({
        background: Colors.BGALT,
        icons: Colors.TXTALT,
      }));
    }, [])
  );

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({ accuracy: 6 });
      setUserLocation(location.coords);
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    })();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleRecenter = () => {
    if (userLocation && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      }, 1000);
    }
  };

  const calculateDistance = (loc1, loc2) => {
    const R = 6371;
    const dLat = (loc2.latitude - loc1.latitude) * (Math.PI / 180);
    const dLon = (loc2.longitude - loc1.longitude) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(loc1.latitude * (Math.PI / 180)) * Math.cos(loc2.latitude * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // Find closest car
  useEffect(() => {
    if (userLocation) {
      const closest = carPositions.reduce((prev, curr) => {
        const prevDistance = calculateDistance(userLocation, prev);
        const currDistance = calculateDistance(userLocation, curr);
        return currDistance < prevDistance ? curr : prev;
      });
      
      setClosestCar(closest);
    }
  }, [userLocation]);

  // Animate car along route
  useEffect(() => {
    if (routeCoordinates.length > 0 && closestCar) {
      let startTime;
      const duration = 3000; // Time to traverse each segment (3 seconds)

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;

        if (progress <= 1) {
          // Get current segment coordinates
          const start = routeCoordinates[currentSegment];
          const end = routeCoordinates[currentSegment + 1];

          if (start && end) {
            // Linear interpolation between points
            const newLat = start.latitude + (end.latitude - start.latitude) * progress;
            const newLng = start.longitude + (end.longitude - start.longitude) * progress;

            // Update car position
            setCarPositions(prevPositions =>
              prevPositions.map(car =>
                car.id === closestCar.id
                  ? {
                      ...car,
                      latitude: newLat,
                      longitude: newLng,
                      speed: calculateDistance(start, end) * (3600 / duration), // km/h
                    }
                  : car
              )
            );

            setAnimationProgress(progress);
            animationRef.current = requestAnimationFrame(animate);
          }
        } else {
          // Move to next segment
          if (currentSegment < routeCoordinates.length - 2) {
            setCurrentSegment(prev => prev + 1);
            startTime = null;
            animationRef.current = requestAnimationFrame(animate);
          }
        }
      };

      animationRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [routeCoordinates, currentSegment, closestCar]);

  // Move other cars randomly
  useEffect(() => {
    const interval = setInterval(() => {
      setCarPositions(prevPositions =>
        prevPositions.map(car => {
          if (closestCar && car.id === closestCar.id) {
            return car;
          }

          const randomLat = (Math.random() - 0.5) * 0.0002;
          const randomLng = (Math.random() - 0.5) * 0.0002;

          return {
            ...car,
            latitude: car.latitude + randomLat,
            longitude: car.longitude + randomLng,
            speed: Math.random() * 60,
          };
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [closestCar]);

  return (
    <Background>
      <View style={styles.Cont}>
        <Text>Sizo Mhlongo</Text>
        {closestCar && <Text style={styles.etaText}>ETA: {eta != Infinity ? eta.toFixed(0) : null} min</Text>}
      </View>

      <MapView
        provider={PROVIDER_GOOGLE}
        region={regions}
        style={styles.map}
        onRegionChangeComplete={(region) => setRegion(region)}
        loadingEnabled
        loadingIndicatorColor={Colors.BG}
        followsUserLocation
        showsUserLocation
        showsMyLocationButton={false}
        ref={mapRef}
        camera={{ center: regions, heading: 0, pitch: 0, zoom: 15, altitude: 0 }}
      >
        {carPositions.map(car => (
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
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={4}
            strokeColor="blue"
            onReady={(result) => {
              setEta(result.duration);
              setRouteCoordinates(result.coordinates);
              setCurrentSegment(0);
              setAnimationProgress(0);
            }}
          />
        )}
      </MapView>

      <TouchableOpacity style={styles.recenterButton} onPress={handleRecenter}>
        <Ionicons name="locate" size={30} color="white" />
      </TouchableOpacity>
      
      <View style={styles.Container}>
        <View style={styles.Row}>
          <View style={styles.Biomerics}>
            <Image source={require('../assets/images/DriverProfile.png')}/>
            <View style={styles.Colmn}>
                <Text style={styles.text}>Thabo Motloung</Text>
                <Text style={styles.text}>Driver</Text>
            </View>
          </View>
          <Pressable style={styles.Contact}>  
            <FontAwesome6 name="message" size={24} color={Colors.TXTALT} />
            <Ionicons name="call-outline" size={24} color={Colors.TXTALT} style={styles.transform} />
          </Pressable>
        </View>
        <View style={styles.button}>
          <Text style={styles.textDriver}>Minimal View</Text>
        </View>
      </View>
    </Background>
  );
}


const styles = StyleSheet.create({
  Cont: {
    backgroundColor: Colors.TXT,
    height: 63,
    width: 271,
    borderRadius: 25,
    marginHorizontal: 'auto',
    justifyContent: 'space-evenly',
    paddingLeft: 20,
    marginTop: 20,
    elevation: 10,
  },
  Container: {
    backgroundColor: Colors.TXT,
    width: SLIDER_WIDTH,
    height: 210,
    position: 'absolute',
    bottom: 0,
    borderRadius: 25,
    elevation: 10,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  map: {
    width: '100%',
    height: SLIDER_HEIGHT,
    position: 'absolute',
    zIndex: -1,
  },
  recenterButton: {
    position: 'absolute',
    bottom: 214,
    right: 10,
    backgroundColor: Colors.BG,
    padding: 15,
    borderRadius: 50,
    elevation: 5,
  },
  Row:{
    flexDirection: 'row',
    marginTop: 20,
    gap: 90
  },
  text:{
    fontSize: 14,
    fontWeight: '500'
  },
  Colmn:{
    marginTop:20,
    gap: 10,
  },
  button:{
    backgroundColor: Colors.DRPB,
    height:64,
    width:331,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 20
  },
  transform:{
    transform: [{rotate: '180deg'}],
    marginBottom: 60
  },
  Biomerics:{
    flexDirection:'row',
    gap: 20
  },
  Contact:{
    flexDirection:'row',
    gap: 20
  },
  textDriver:{
    color: Colors.TXT
  }
  
  
  
});
