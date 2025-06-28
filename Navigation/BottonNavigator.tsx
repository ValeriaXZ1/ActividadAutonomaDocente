import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { BlurView } from 'expo-blur';
import { StyleSheet } from "react-native";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

// Screens
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CalculadoraScreen from "../screens/CalculadoraScreen";
import FormularioScreen from "../screens/FormularioScreen";
import DireccionScreen from "../screens/DireccionScreen";
import RegistroScreen from "../screens/RegistroScreen"; // O EncuestaScreen si así lo nombraste
import ListaLocalSrcren from "../Lista/ListaLocalSrcren";
import ListaLocal2Screen from "../Lista/ListaLocal2Screen";
import ListaExternaScreen from "../Lista/ListaExternaScreen";

// ---------- Top Tabs ----------
const Top = createMaterialTopTabNavigator();
function MyTops() {
  return (
    <Top.Navigator initialRouteName="ListaLocal2">
      <Top.Screen name="ListaLocal1" component={ListaLocalSrcren} />
      <Top.Screen name="ListaLocal2" component={ListaLocal2Screen} />
      <Top.Screen name="ListaExtrena" component={ListaExternaScreen} />
    </Top.Navigator>
  );
}

// ---------- Bottom Tabs ----------
const Tab = createBottomTabNavigator();
function MyTab() {
  return (
    <Tab.Navigator
      initialRouteName="Calculadora"
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          borderRadius: 15,
          height: 70,
          backgroundColor: 'transparent',
        },
        tabBarBackground: () => (
          <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
        ),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-account" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="login" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calculadora"
        component={CalculadoraScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="calculator" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Formulario"
        component={FormularioScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="file-document-edit" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Direccion"
        component={DireccionScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-marker-radius" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Registro"
        component={RegistroScreen}
        options={{
          title: "Registro",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-plus" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Top"
        component={MyTops}
        options={{
          title: "Listas",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-bulleted-type" size={size} color={color} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}

// ---------- Stack Navigator ----------
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Tab">
      <Stack.Screen name="Tab" component={MyTab} options={{ headerShown: false }} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Calculadora" component={CalculadoraScreen} />
    </Stack.Navigator>
  );
}

// ---------- Principal ----------
export default function NavegadorPrincipal() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
