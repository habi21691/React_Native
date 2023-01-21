import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from './CustomButton'


const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };

  const onSignInApple = () => {
    console.warn('onSignInApple');
  };

  return (
    <View style={styles.container}>
    <View>
    
      <CustomButton
        name="sc-facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
        />
        </View>
        <View>
      <CustomButton
        name="sc-google-plus"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
        />
        </View>
        <View>
          
      <CustomButton
        name="sc-twitter"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
        />
        </View>
    </View>
  );
};

export default SocialSignInButtons;

const styles = StyleSheet.create({
  container:{
    width: "80%",
    marginHorizontal:23,
    paddingHorizontal:8,
    // borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: 'space-between',
    flexDirection:'row'
    
  }
})