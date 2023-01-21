import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function index({navigation}) {
//   const [lmodalVisible, setLModalVisible] = useState(false);
//   const [rmodalVisible, setRModalVisible] = useState(false);

  // console.log(errors)
//   const LoginTriger = () => {
//     setLModalVisible(true);
//   };

//   function LoginHandler() {
//     setInput();
//   }
//   function Triger() {
//     setRModalVisible(true);
//   }
//   function regHandler() {}
  return (
    <View style={styles.container}>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={() => {navigation.push('Login')}}>
          <Text style={styles.Button}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={() => {navigation.push('Registor')}}>
          <Text style={styles.Button}>Register</Text>
        </TouchableOpacity>
      </View>
      {/* <View>
        <Login isLogin={LoginHandler} showModal={lmodalVisible} />
        <Register isReg={regHandler} showModal={rmodalVisible} />
      </View> */}
    </View>
  );
}

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17345f0",
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonContainer: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 50,

    backgroundColor: "#110e10",
  },
  Button: {
    color: "white",
  },
});
