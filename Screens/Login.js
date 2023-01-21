import { useState } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import SocialSignInButtons from "../component/SocialSignInButtons ";
import {
  Modal,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,

} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { Eye, EyeActive } from "../assets/index";
// import {useNavigation} from '@react-navigation/native'
import axios from "axios";

function Login(props) {
  const [seePassword, setSeePassword] = useState(true);

  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // event.preventDefault();
    // console.log(data);
    // console.log(data);
    // if(loading){
    //   return
    // }
    // setLoading(true)
    // const user = {
    //   username: username,
    //   password: password,
    // };
    // // // const user = new FormData();
    // // user.append("username", username);
    // // user.append("password", password);

    try {
      axios
        .post(`http://192.168.43.63:5000/api/Signin`, {
          data,
        })
        .then((data) => {
          console.log(data)
         
          
            navigation.navigate('Home')
          
        })
        .catch((err) => {
          Alert.alert('Oops', err.message);
        });
      // return res;
    } catch (e) {
      Alert.alert('Oops',e.message);
    }
   
  };
  const onSignUpPress = () => {
    navigation.navigate('Registor')
  }
  const onForgotPasswordParessed = () => {
         navigation.navigate('ForgotPassword')
  }
  return (
    <>
      <>
        <Modal
          visible={props.showModal}
          style={styles.container}
          animationType={"slide"}
        >
          <Image
            source={require("../assets/4100_6_02.jpg")}
            style={styles.logo}
          />
          <View style={styles.sectionStyle}>
            <Ionicons name="ios-person-outline" size={24} color="black" />
            <Controller
              control={control}
              name="username"
              render={({ field: { value, onChange } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  style={{ flex: 1 }}
                  placeholder="Enter Your Name Here"
                  underlineColorAndroid="transparent"
                  rules={{ required: "Email or Username is required" }}
                />
              )}
            />
          </View>
          <View style={styles.sectionStyle}>
            <Entypo name="lock" size={24} color="black" />
            <Controller
              control={control}
              name="password"
              render={({
                field: { value, onChange,onBlur },
                
              }) => (
                <TextInput
                value={value}
                onChangeText={onChange}
                  style={{ flex: 1 }}
                  placeholder="Enter Your Mobile No Here"
                  underlineColorAndroid="transparent"
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
            <TouchableOpacity
              style={styles.wrapperIcon}
              onPress={() => setSeePassword(!seePassword)}
            >
              <Image
                source={seePassword ? Eye : EyeActive}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={onForgotPasswordParessed}>
              <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleSubmit(onSubmit)}
          >
            {/* {loading ? 'Loading...' : */}
            <Text style={styles.button}>Log in</Text>
          {/* } */}
          </TouchableOpacity>
          <TouchableOpacity onPress={onSignUpPress}>
            <Text style={styles.forgot_button}>Don't have an account? Create one</Text>
          </TouchableOpacity>
          <View>
            <SocialSignInButtons/>
          </View>
          
        </Modal>
      </>
    </>
  );
}
export default Login;

const styles = StyleSheet.create({
  inputText: {
    width: "90%",
    border: 1,
    borderColor: "red",
    borderWidth: 1,
  },

  sectionStyle: {
    padding: 9,

    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",

    backgroundColor: "#fff",

    borderWidth: 0.5,

    borderColor: "#000",

    height: 40,

    borderRadius: 5,

    margin: 10,
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
  logo: {
    marginHorizontal: "30%",
    marginTop: 40,
    width: "40%",
    height: "20%",
    borderRadius: 70,
  },
  forgot_button: {
    marginHorizontal: 19,
    height: 30,
    marginBottom: 30,
    color:'blue'
  },
  icon: {
    width: 30,
    height: 24,
  },
  wrapperIcon: {
    position: "absolute",
    right: 0,
    padding: 10,
  },
});
