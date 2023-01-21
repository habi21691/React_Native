import React from 'react';
import { StyleSheet, Pressable} from 'react-native';
import { EvilIcons,  } from '@expo/vector-icons';


const CustomButton = ({onPress, name, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
        <EvilIcons
         name={name}
         size={44} 
         style={[
          styles.text,
          styles[`text_${name}`],
          fgColor ? {color: fgColor} : {},
        ]}
         />
        
    
       
      {/* <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {icon}
      </Text> */}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    
    // marginHorizontal:23, 
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 5,
    
  },
  icon:{
    flex:4,
    flexDirection:'row'
  },

  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },

  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },

  container_TERTIARY: {},
 
});

export default CustomButton;