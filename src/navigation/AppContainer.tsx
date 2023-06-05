import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {View} from "react-native";
import LoginScreen from "../screen/Auth/LoginScreen";
import RegisterScreen from "../screen/Auth/RegisterScreen";
import HomeScreen from "../screen/Home/HomeScreen";
import DetailScreen from "../screen/Home/DetailScreen";

const Stack = createNativeStackNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <Stack.Navigator
          initialRouteName={"Login"}>
            <Stack.Screen name="Login" options={{
                headerShown: false,
            }} component={LoginScreen}/>
            <Stack.Screen name="Register" options={{headerShown: false}} component={RegisterScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Detail" component={DetailScreen}/>
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  )
}

export default AppContainer