import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CalculadoraScreen from "../screens/CalculadoraScreen";
import FormularioScreen from "../screens/FormularioScreen";
import { createNavigationContainerRef, NavigationContainer } from "@react-navigation/native";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FormularioDireccionScreen from "../screens/DireccionScreen";
import DireccionScreen from "../screens/DireccionScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ListaLocalSrcren from "../Lista/ListaLocalSrcren";
import ListaLocal2Screen from "../Lista/ListaLocal2Screen";
import RegistroScreen from "../screens/EncuestaScreem";
import ListaExternaScreen from "../Lista/ListaExternaScreen";
const Stack = createStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Tab">
      <Stack.Screen name="Welcome" component={WelcomeScreen}></Stack.Screen>
      <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
      <Stack.Screen name="Tab" component={MyTab}></Stack.Screen>
    </Stack.Navigator>
  )
}

/*Implementar el boton tab */

const Tab = createBottomTabNavigator()
function MyTab() {
  return (
    <Tab.Navigator
      //initialRouteName="Top"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Calculadora" component={CalculadoraScreen} />
      <Tab.Screen name="Formulario" component={FormularioScreen} />
      <Tab.Screen name="Direccion" component={DireccionScreen} />
      <Tab.Screen
        name="Registro"
        component={RegistroScreen}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="form-select" size={24} color="black" />,
          title: "Encuesta"
        }}
      />
      <Tab.Screen name="Top" component={MyTops} />
    </Tab.Navigator>
  )
}
const Top = createMaterialTopTabNavigator()
function MyTops() {
  return (
    <Top.Navigator initialRouteName="ListaLocal2">
      <Top.Screen name="ListaLocal1" component={ListaLocalSrcren} />
      <Top.Screen name="ListaLocal2" component={ListaLocal2Screen} />
      <Top.Screen name="ListaExtrena" component={ListaExternaScreen} />

    </Top.Navigator>
  )
}

export default function NavegadorPrincipal() {
  return (
    <NavigationContainer>
      <MyStack />

    </NavigationContainer>
  )
}