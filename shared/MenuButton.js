import { Pressable, StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Colors } from './Colors';
import { useNavigation } from '@react-navigation/native';
import MenuIcon from './icons/MenuIcon';
import { normalize, SLIDER_HEIGHT, SLIDER_WIDTH } from './functions';
import { AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function MenuButton({ bg = "#D9D9D939", iconColor = Colors.TXT }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>
      {
        isMenuOpen 
        ? <MenuComponent closeMenu={() => setIsMenuOpen(false)} /> // Render MenuComponent when menu is open
        : <Pressable style={[styles.menuholder, { backgroundColor: bg }]} onPress={() => setIsMenuOpen(true)}>
            <MenuIcon style={styles.icon} Color={iconColor} />
          </Pressable>
      }
    </>
  );
}

// Updated MenuComponent to accept closeMenu function as prop
const MenuComponent = ({ closeMenu }) => {
  const slideAnim = useRef(new Animated.Value(-SLIDER_WIDTH)).current;
  const navigation = useNavigation();
  useEffect(() => {
    // Slide in the menu when component mounts
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]} onTouchEnd={() => closeMenu()} >
      <Text style={styles.menuTitle}>Menu</Text>

      <TouchableOpacity style={styles.menuOption} onPress={() => { closeMenu(); navigation.navigate("Learning")}}>
      <MaterialCommunityIcons name="book-education-outline" size={30} color="white" />
        <Text style={styles.menuText}>Edu Care</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuOption} onPress={() => { closeMenu(); navigation.navigate("Documents")}}>
        <Entypo name="documents" size={30} color="white" />
        <Text style={styles.menuText}>Upload Documents</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuOption} onPress={() => { closeMenu(); navigation.navigate("VolunteerProfile")}}>
      <MaterialIcons name="volunteer-activism" size={30} color="white" />
        <Text style={styles.menuText}>Find Assistance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.menuOption, {position: "absolute", bottom: 100, width: "100%", borderTopEndRadius: 25, borderBottomEndRadius: 0, borderColor: Colors.BG, alignItems: "center"}]} onPress={() => { closeMenu(); navigation.navigate("LoginHome") }}>
      <AntDesign name="logout" size={30} color="white" />
        <Text style={styles.menuText}>Sign Out</Text>
      </TouchableOpacity>
      
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  menuholder: {
    position: "absolute",
    top: -40,
    left: -44,
    width: 128,
    height: 128,
    borderRadius: 100,

  },
  icon: {
    position: "absolute",
    right: 40,
    bottom: 40,
  },
  menuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: SLIDER_HEIGHT * 0.85,
    width: SLIDER_WIDTH * 0.75,
    backgroundColor: Colors.BG,
    padding: 20,
    paddingTop: 50,
    zIndex: 3330,
    elevation: 10,
    shadowColor: Colors.TXTALT + '50',
    borderBottomEndRadius: 25,
    alignItems: "center"
  },
  menuTitle: {
    fontSize: normalize(24),
    color: Colors.TXT,
    marginBottom: 20,
    fontWeight: "600"
  },
  menuOption: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.TXT,
    marginVertical: 15,
    borderTopLeftRadius: 25,
    borderBottomEndRadius: 25,
    flexDirection: 'row',
    justifyContent: "left",
    alignItems: "center",
    gap: 20,
    width: "100%",
    
  },
  menuText: {
    fontSize: 18,
    color: 'white',
  },
});
