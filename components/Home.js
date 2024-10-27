import {
  View,
  Text,
  StyleSheet,
  Pressable,
  StatusBar,
  Animated,
} from "react-native";

import Background from "./Background";
import {
  Entypo,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";
import { Colors } from "../shared/Colors";
import HomeButton from "../shared/HomeButton";
import * as Progress from "react-native-progress";
import MenuButton from "../shared/MenuButton";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { setTabColor } from "../shared/TabColor";
import { normalize, SLIDER_WIDTH } from "../shared/functions";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Image } from "react-native";
import CheckupIcon from "../shared/icons/CheckupIcon";
import EmergoIcon from "../shared/icons/EmergoIcon";
import WatchIcon from "../shared/icons/WatchIcon";

export default function Home() {
  const dispatch = useDispatch();
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("light-content");
      StatusBar.setBackgroundColor(Colors.BG);
      StatusBar.setTranslucent(true);

      dispatch(
        setTabColor({
          background: Colors.BG,
          icons: Colors.TXT,
        })
      );
    }, [])
  );

  const navigation = useNavigation();

  return (
    <Background bg={Colors.BG}>
      <View style={styles.container}>
        <MenuButton />
        <View style={styles.greet}>
          <Text style={styles.text}>Welcome Back</Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: normalize(48),
                fontFamily: "Roboto-Black",
                marginTop: 20,
                marginBottom: 30,
              },
            ]}
          >
            Sizo Mhlongo
          </Text>
        </View>

        <View style={styles.greeting}>
          <View>
            <Text style={[styles.text]}>For emergency</Text>
            <HomeButton
              screen={"DistanceView"}
              image_path={require("../assets/images/ambulance.png")}
              buttonText={"EmergGo"}
              buttonIcon={
                <EmergoIcon/>
              }
            />
          </View>

          <View>
            <Text style={[styles.text]}>For your health</Text>
            <HomeButton
              screen={"BluetoothScan"}
              image_path={require("../assets/images/watchflower.png")}
              buttonText={"LifeLink"}
              buttonIcon={
                <WatchIcon/>
              }
            />
          </View>
        </View>

        <Pressable  onPress={() => {
              navigation.navigate("MedicalRecords");
            }} style={styles.greet}>
          <Text
            style={[
              styles.text,
              {
                fontSize: normalize(16),
                fontWeight: "900",
                marginTop: 20,
                marginBottom: 30,
              },
            ]}
          >
            Track
          </Text>
          <View
           
            style={{
              marginBottom: 30,
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
           <CheckupIcon/>
            <Text style={[styles.text]}>Next Checkup</Text>
          </View>

          <View>
            <Progress.Bar
              progress={0.3}
              width={null}
              unfilledColor={"#fff"}
              height={10}
              borderWidth={0}
              borderRadius={25}
              color={"#03a4ff"}
            />
          </View>

          <View
            style={{
              marginBottom: 30,
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={[
                  styles.text,
                  {
                    marginVertical: 20,
                    fontSize: normalize(16),
                    fontWeight: "900",
                    textAlign: "left",
                  },
                ]}
              >
                Previous Date
              </Text>
              <Text style={[styles.text, { fontSize: normalize(14) }]}>
                10 October 2024
              </Text>
            </View>

            <View>
              <Text
                style={[
                  styles.text,
                  {
                    marginVertical: 20,
                    fontSize: normalize(16) ,
                    fontWeight: "900",
                    textAlign: "left",
                  },
                ]}
              >
                Next Date
              </Text>
              <Text style={[styles.text, { fontSize: normalize(14) }]}>
                10 November 2024
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
    </Background>
  );
}





const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: normalize(17) ,
  },
  container: {
    position: "relative",
  },

  greeting: {
    position: "relative",
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    top: 120,
  },
  greet: {
    position: "relative",
    paddingHorizontal: 40,
    top: 120,
  },


  menuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: SLIDER_WIDTH * 0.75, // Cover 75% of the screen width
    backgroundColor: '#333',
    padding: 20,
    paddingTop: 50,
  },
  menuTitle: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  menuOption: {
    paddingVertical: 15,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  menuText: {
    fontSize: 18,
    color: 'white',
  },
});
