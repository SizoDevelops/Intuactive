import { View, Text, TouchableOpacity, Pressable, BackHandler, StyleSheet, Modal } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';


import { SLIDER_WIDTH } from './functions';
import { Colors } from './Colors';
import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';




function MyTabBar({ state, descriptors, navigation }) {

  const colors = useSelector(state => state.TabColor)
 
  return (
  
    <>  
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: SLIDER_WIDTH, paddingLeft: 35, paddingRight: 35, backgroundColor: colors.background, height: 70,paddingTop: 5, paddingBottom: 8}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            
              navigation.navigate({ name: route.name, merge: true });
            
            
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
          android_ripple = {{
            color: '#03a4ff',
            borderless: true,
            radius: 30,
            foreground: true
          }}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            
            onLongPress={onLongPress}
            
            key={route.name}
            style={{ padding: 10, borderRadius: 100}}

            onPress={onPress}
          >
            <View style={{alignItems: 'center'}}>
                {
                    route.name === 'Home' ? (
                      <FontAwesome name="send-o" size={30} color={colors.icons} />
                    ) : route.name === 'Health' ? <Fontisto name="heartbeat-alt" size={40} color={colors.icons} />: <MaterialCommunityIcons name="bullseye-arrow" size={35} color={colors.icons} />
                }
            </View> 
            
          </Pressable>
        );
      })}
    </View>
    </>
  );
}
const styles = StyleSheet.create({
   
})
export default MyTabBar;