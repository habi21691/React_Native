import React from 'react'

import {StyleSheet} from 'react-native'
function ForgotPassword() {
  
    const {control, handleSubmit} = useForm();
  const navigation = useNavigation();

  const onSendPressed = async data => {
    try {
      await Auth.forgotPassword(data.username);
      navigation.navigate('forgotPassword');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
          }}
        />

        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});
  


export default ForgotPassword