import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import CalculadoraScreen from "../screens/CalculadoraScreen";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Welcome" component={WelcomeScreen}
      options={{headerShown:true}} />
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Calculadora" component={CalculadoraScreen} />
    </Tab.Navigator>
  );
}

export default function NavegadorBottom() {
  return (
    <NavigationContainer>
      <MyTab />
    </NavigationContainer>
  );
}
