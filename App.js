import Index from './Screens/Index'
import Login from "./Screens/Login"
import Register from './Screens/Register';
import Home from "./Screens/Home";
import ForgotPassword from './Screens/ForgotPassword';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

// const axios = require('axios').default

// import signin from "./api/signin";
const Stack = createNativeStackNavigator();

export default function App() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  return (
         <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
             name="index"
             component={Index}

            />
            <Stack.Screen
            name="Registor"
            component={Register}
            />
            <Stack.Screen
            name='Login'
            component={Login}
            />
            <Stack.Screen
            name='Home'
            component={Home}
            />
            <Stack.Screen
            name='forgotPassword'
            component={ForgotPassword}
            />
          </Stack.Navigator>
         </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
