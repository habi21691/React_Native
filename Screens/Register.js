import React, { useState } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import SocialSigninButton from '../component/SocialSignInButtons '
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Modal,
  Alert,
  
  
} from "react-native";
// import { useNavigation } from "@react-navigation/core";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
// import { ScrollView } from "react-native-gesture-handler";

const Register = (props) => {
  const { control, handleSubmit } = useForm();

  const navigation = useNavigation()
  function onSubmit(data) {
    console.log(data);
    try {
      const res = axios.post('http://192.168.43.63:5000/api/Register',data).then((data) => {
        if(data.status === 200){
          Alert.alert("Successfully Register")
          
        }
        else{
       Alert.alert("user alreadey exist")
        }
      }).catch( error =>{
        Alert.alert("Oops!!!User Already Exits,Try Again")
      })
    } catch (error) {
      Alert.alert('Oops!!!', error.message)
    }
  }
  return (
    <Modal visible={props.showModal}>
      <>
        <View style={styles.container}>
          <Text style={styles.title}>Create an account</Text>

          {/* <Spinner visible={isLoading} /> */}
          <View style={styles.wrapper}>
            <View style={styles.input}>
              <Controller
                control={control}
                name="fullname"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    style={{ flex: 1 }}
                    placeholder="Enter Your fullname Here"
                    rules={{
                      required: "fullname is required",
                      minLength: {
                        value: 3,
                        message: "Password should be minimum 3 characters long",
                      },
                    }}
                  />
                )}
              />
            </View>
            <View style={styles.input}>
              <Controller
                control={control}
                name="username"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    style={{ flex: 1 }}
                    placeholder="Enter Your Email Here"
                    rules={{
                      required: "Email is required",
                      minLength: {
                        value: 9,
                        message: "Email should be minimum 9 characters long",
                      },
                    }}
                  />
                )}
              />
            </View>
            <View style={styles.input}>
              <Controller
                control={control}
                name="password"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    style={{ flex: 1 }}
                    placeholder="Enter Your password Here"
                    secureTextEntry={true}
                    rules={{
                      required: "Password is required",
                      minLength: {
                        value: 3,
                        message: "Password should be minimum 3 characters long",
                      },
                    }}
                  />
                )}
              />
            </View>
            <View style={styles.input}>
              <Controller
                control={control}
                name="phone_number"
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    style={{ flex: 1 }}
                    placeholder="Enter Your Phone Number Here"
                    rules={{
                      required: "Phone is required",
                      minLength: {
                        value: 10,
                        message: "Phone should be minimum 10 characters long",
                      },
                    }}
                  />
                )}
              />
            </View>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={styles.button}>Register</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Text>Already have an accoutn? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.link}>Login</Text>
              </TouchableOpacity>
            </View>
            <View>
              <SocialSigninButton/>
            </View>
          </View>
        </View>
      </>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "80%",
  },
  input: {
    height: 50,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    paddingHorizontal: 14,
    marginTop: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  link: {
    color: "blue",
  },
  buttonContainer: {
    width: "80%",
    // borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginHorizontal: "10%",
    backgroundColor: "#110e10",
  },
  button: {
    color: "#ffffff",
  },
});

export default Register;
