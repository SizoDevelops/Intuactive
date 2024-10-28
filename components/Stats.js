import { View, Text, StyleSheet, Pressable, StatusBar, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Background from './Background'
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors } from '../shared/Colors'
import MenuButton from '../shared/MenuButton'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setTabColor } from '../shared/TabColor'
import { normalize, SLIDER_WIDTH } from '../shared/functions'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { TalkToAI } from '../shared/Gemini'

const AIConp = ({message}) => {
  return(
    <View style={[styles.ContUser, {justifyContent: "left"}]}>
          <View style={[styles.User, {backgroundColor: Colors.BGALT +30, borderTopLeftRadius: 0, borderBottomLeftRadius: 25, borderBottomEndRadius: 25, borderTopEndRadius: 25}]}>
          <Text style={styles.botText}>
          {
              message
            }
          </Text>
          </View>
        </View>
  )
}


const HumanComp = ({message}) => {
  return(
    <View style={styles.ContUser}>
          <View style={styles.User}>
          <Text style={styles.botText}>
            {
              message
            }
      
          </Text>
          </View>
        </View>

  )
}
export default function Stats() {
  const navigation = useNavigation()
  const [userPrompt, setPrompt] = useState("")
  const [userQs, setUserQs] = useState([])
  const scrollViewRef = useRef();
  const dispatch = useDispatch()
  useFocusEffect(
    useCallback(() => {
        StatusBar.setBarStyle('light-content'); // 'light-content' is also available
         StatusBar.setBackgroundColor(Colors.BG); //add color code
        StatusBar.setTranslucent(true);

        dispatch(setTabColor({
          background: Colors.BG,
          icons: Colors.TXT,
          display: "none"
        }))

        

    }, []),
  );


  useEffect(() => {
    
    const talk = async () => {
      if (userQs.length === 0){

        const AI = await TalkToAI("Greet me and offer help")

          setUserQs(prep => [...prep, {
          id: 1,
          text: AI
          }])
         }
          talk()
      }

      
  },[])
  return (
    <Background>
      <Text style={styles.Text}>Personal Companion</Text>
        <View style={{flex: 1, alignItems: "center"}}>
        <ScrollView  ref={scrollViewRef}
      onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })} snapToEnd style={{flex: 1, flexDirection: "column", paddingBottom: 80}}>
            {
              userQs.map((item, index) => {

                return(
                  <View key={index}>
                    {
                      item.id === 0 ? <HumanComp message={item.text}/> : <AIConp message={item.text}/>
                    }
                  </View>
                )
                
              })  
            }
        </ScrollView>
        
        <KeyboardAvoidingView   style={styles.InputTab}>
          <View style={styles.textInput}>
            <TextInput value={userPrompt} onChangeText={(e) => setPrompt(e)} numberOfLines={4} multiline  style = {[{color: Colors.TXT, width: "82%", height: "100%", fontSize: normalize(16)}]} placeholder={'Chronic Condition Management Quiz'} placeholderTextColor={"#ddd"}/>

              <TouchableOpacity style={styles.SendButton} onPress={async() => {
                if (userPrompt.length > 0){
                  setUserQs(prep => [...prep, {
                    id: 0, 
                    text: userPrompt
                  }])
                  const some = await TalkToAI(userPrompt)
                  setPrompt("")
                  setUserQs(prep => [...prep, {
                    id: 1, 
                    text: some
                  
                  }])
                  }
                  
                

               
              }}>
                <Image source={require('../assets/images/SendIcon.png')}/>
              </TouchableOpacity>
      
          </View>
          
        </KeyboardAvoidingView>
        </View>

      
    </Background>
  )
}

const styles = StyleSheet.create({
    Text:{
      color: Colors.TXT,
      fontSize: normalize(25),
      marginHorizontal: 'auto',
      marginTop: 30,
      marginBottom: 30
    },


    ContUser:{
      width: SLIDER_WIDTH,
      flexDirection: "row",
      justifyContent: "flex-end",
      paddingEnd: 10,
      marginTop: 20,

    },

    User:{
      backgroundColor: Colors.BG +10,
      borderWidth:1,
      borderTopEndRadius: 25,
      borderBottomLeftRadius: 25,
      borderTopLeftRadius: 25,
      borderBottomEndRadius: 0,
      minHeight: 65,
      height: 'fit-content',
      width:SLIDER_WIDTH * 0.9,
      marginLeft: 10,
      paddingHorizontal: 10,
      borderColor: Colors.TXT,
      paddingVertical: 10
    },

    botText:{
      color: Colors.TXT,
      lineHeight: 30,
      fontSize: normalize(14)
    },
    InputTab:{
      flexDirection: 'row',
      borderWidth: 1,
      height: 75,
      width: SLIDER_WIDTH - 10,
      paddingHorizontal: 10,
      justifyContent: "center",
      alignItems: "center",
      gap: 60,
      borderRadius: 15,
      borderColor: Colors.TXT,
      position: 'relative',
      bottom: 20,
      marginTop: 30,
      backgroundColor: Colors.BG,
      
    },
    SendButton:{
      marginTop: 3,
      
    },

    textInput:{
      flexDirection: "row",
      justifyContent: "space-between",
      fontSize: normalize(16)
    }
  
    

  })