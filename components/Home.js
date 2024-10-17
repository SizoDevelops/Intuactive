import { View, Text, StyleSheet, Pressable, Image } from 'react-native'

import Background from './Background'
import { Entypo, Feather, FontAwesome5, FontAwesome6, Ionicons } from '@expo/vector-icons'
import { Colors } from '../shared/Colors'
import HomeButton from '../shared/HomeButton'
import * as Progress from 'react-native-progress';

export default function Home() {
  return (
    <Background>
      <View style={styles.container}>
        <Pressable style={styles.menuholder}>
          <Ionicons style={styles.icon} name="menu" size={40} color={Colors.TXT} />
        </Pressable>
        <View style={styles.greet}>
          <Text style={styles.text}>Welcome Back</Text>
          <Text style={[styles.text, {fontSize: 58, fontFamily: "Roboto-Black", marginTop: 20, marginBottom: 30}]}>Sizo Mhlongo</Text>
        </View>

        <View style={styles.greeting}>
            <View>
              <Text style={[styles.text]}>For emergency</Text>
              <HomeButton image_path={require("../assets/images/ambulance.png")} buttonText={"EmergGo"} buttonIcon={<Entypo  name="location" size={35} color={Colors.TXTALT} />}/>
            </View>

            <View >
              <Text style={[styles.text]}>For your health</Text>
              <HomeButton image_path={require("../assets/images/watchflower.png")} buttonText={"LifeLink"} buttonIcon={<FontAwesome5 name="heartbeat" size={35} color={Colors.TXTALT} />}/>
            </View>
        </View>

        <View style={styles.greet}>
          <Text style={[styles.text, {fontSize: 23, fontWeight: "900", marginTop: 20, marginBottom: 30}]}>Track</Text>
          <View style={{marginBottom: 30, flexDirection: "row", gap: 10, alignItems:"center"}}>
          <Feather name="check-square" size={30} color={Colors.TXT} />
          <Text style={[styles.text]}>Next Checkup</Text>
          </View>

          <View>
             <Progress.Bar progress={0.3} width={null} unfilledColor={"#fff"} height={10} borderWidth={0} borderRadius={25} color={"#03a4ff"}/>
          </View>
         

          <View style={{marginBottom: 30, flexDirection: "row", gap: 10, alignItems:"center", justifyContent: "space-between"}}>
            <View>
              <Text style={[styles.text, {marginVertical: 20, fontSize: 30, fontWeight: "900", textAlign: "left"}]}>Previous Date</Text>
              <Text style={[styles.text, {fontSize: 18}]}>10 October 2024</Text>
            </View>

            <View>
              <Text style={[styles.text, {marginVertical: 20, fontSize: 30, fontWeight: "900", textAlign: "left"}]}>Next Date</Text>
              <Text style={[styles.text, {fontSize: 18}]}>10 November 2024</Text>
            </View>
          </View>

        </View>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 22,

  },
  container: {
    position: "relative"
  },
  menuholder: {
    position: "relative",
    top: -40,
    left: -44,
    backgroundColor: "#D9D9D939",
    width: 138,
    height: 138,
    borderRadius: 100
  },

  icon: {
    position: "absolute",
    right: 40,
    bottom: 40,
  },
  greeting:{
    position: "relative",
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: 20
  },
  greet:{
    position: "relative",
    paddingHorizontal: 40,
  }
})