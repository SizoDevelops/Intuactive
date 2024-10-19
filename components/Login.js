import {View, Text, StyleSheet, TextInput} from "react-native"
import Background from "./Background"
import { Colors } from "../shared/Colors"
import { Image } from "react-native"


export default function Login(){

    return(
        <Background color={Colors.BGALT}>
            <View style={styles.container}>
                {/* Icon */}
            </View>

            <View style={styles.details}>
                <Image style={styles.image} source={require("../assets/images/volunteer.png")}/>

                <TextInput style={styles.textInput}/>
                
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.BG,
        height: 426,
        borderBottomEndRadius: 25,
        borderBottomLeftRadius: 25
    },
    text: {
        color: Colors.TXT
    },
    details: {
        height: 497,
        width: 323,
        margin: "auto",
        top: -100,
        borderRadius: 25,
        backgroundColor: Colors.BGALT,
        elevation: 9
    },
    image: {
        width: 30,
        height: 30,
        marginLeft: 40,
        marginTop: 40
    },
    textInput: {
        borderBottomColor: Colors.TXTALT,
        width: "90%",
        borderBottomWidth: 1,
        marginHorizontal: "auto",
        
    }
})