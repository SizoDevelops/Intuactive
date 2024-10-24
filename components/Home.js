import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  StatusBar,
} from "react-native";

import Background from "./Background";
import {
  Entypo,
  Feather,
  FontAwesome5,
  FontAwesome6,
  Ionicons,
} from "@expo/vector-icons";
import { Colors } from "../shared/Colors";
import HomeButton from "../shared/HomeButton";
import * as Progress from "react-native-progress";
import MenuButton from "../shared/MenuButton";

import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { setTabColor } from "../shared/TabColor";
import { normalize } from "../shared/functions";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

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
          <Pressable
            onPress={() => {
              navigation.navigate("Medicalrecords");
            }}
          >
            <Text style={[styles.text]}>For emergency</Text>
            <HomeButton
              image_path={require("../assets/images/ambulance.png")}
              buttonText={"EmergGo"}
              buttonIcon={
                <Entypo name="location" size={35} color={Colors.TXTALT} />
              }
            />
          </Pressable>

          <View>
            <Text style={[styles.text]}>For your health</Text>
            <HomeButton
              image_path={require("../assets/images/watchflower.png")}
              buttonText={"LifeLink"}
              buttonIcon={
                <FontAwesome5
                  name="heartbeat"
                  size={35}
                  color={Colors.TXTALT}
                />
              }
            />
          </View>
        </View>

        <View style={styles.greet}>
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
            <Feather name="check-square" size={30} color={Colors.TXT} />
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
        </View>
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
});
