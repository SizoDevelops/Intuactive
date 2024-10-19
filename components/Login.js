import {View, Text, StyleSheet, TextInput, Pressable} from "react-native"
import Background from "./Background"
import { Colors } from "../shared/Colors"
import { Image } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';


export default function Login(){

    return(
        <Background color={Colors.BGALT}>
            <View style={styles.container}>
                {/* Icon */}
            </View>

            <View style={styles.details}>
                <Text style = {styles.text}>Contact information </Text>
                <View style = {styles.numberCont}>
                    <Image style={styles.image} source={require("../assets/images/flag.png")}/>

                    <TextInput style={styles.textInput } placeholder={'+27 123 456 6789'}/>

                </View>
                    <View style = {styles.numberCont}>
                        <TextInput style = {[styles.textInput,{marginLeft: 0}]} placeholder={' e.g John@Doe'}/>
                    </View>
                <View>
                    <Text style = {styles.textBelow}>To continue with registrations, press the button below...</Text>
                </View>
                <View>
                    <Pressable style = {styles.Button}>
                    <AntDesign name="arrowright" size={40} color={Colors.TXT} />
                    </Pressable>
                </View>

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
        height: 440,
        width: 323,
        margin: "auto",
        top: -50,
        borderRadius: 25,
        backgroundColor: Colors.BGALT,
        elevation: 9
        
    },
    image: {
        
        
    },
    textInput: {
        alignSelf: 'flex-end',
        marginHorizontal: "auto",
        width: '80%',
        color: Colors.TXTALT
    },
    text:{
        color: Colors.TXTALT,
        textAlign: 'center',
        marginTop: 50,
        fontSize: 22,
        fontWeight: '500'

    },
    numberCont:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'left',
        marginTop: 50,
        borderBottomWidth: 0.5,
        width: '85%',
        marginHorizontal: 'auto',
        paddingBottom: 9,
        borderBottomColor: Colors.TXTALT

        
    },
    textBelow:{
        color: Colors.TXTLT,
        textAlign: 'center',
        width: '90%',
        fontSize: 15,
        marginHorizontal: 'auto',
        marginTop: 30

    },
    Button:{
       height: 77,
       width: 77,
       backgroundColor: Colors.BG,
       marginTop: 20,
       marginHorizontal: 'auto',
       borderRadius: 100,
       justifyContent: 'center',
       alignItems: 'center' 
    }
})