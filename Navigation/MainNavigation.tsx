import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CalculadoraScreen from "../screens/CalculadoraScreen";
import FormularioScreen from "../screens/FormularioScreen";
import { createNavigationContainerRef, NavigationContainer } from "@react-navigation/native";
import FormularioDireccionScreen from "../screens/DireccionScreen";
import DireccionScreen from "../screens/DireccionScreen";

const Stack =createStackNavigator()

function MyStack(){
    return(
        <Stack.Navigator initialRouteName="Tab">
            <Stack.Screen name="Welcome" component={WelcomeScreen}></Stack.Screen>
            <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
            <Stack.Screen name="Tab" component={MyTab}></Stack.Screen>
        </Stack.Navigator>
    )
}

/*Implementar el boton tab */

const Tab =createBottomTabNavigator()
function MyTab(){
    return(
        <Tab.Navigator screenOptions={{headerShown:true}}>  
            <Tab.Screen name="Calculadora" component={CalculadoraScreen}></Tab.Screen>
            <Tab.Screen name="Formulario" component={FormularioScreen}></Tab.Screen>
            <Tab.Screen name="Direccion" component={DireccionScreen}></Tab.Screen>

        </Tab.Navigator>
    )
}

export default function NavegadorPrincipal(){
    return(
        <NavigationContainer>
            <MyStack/>

        </NavigationContainer>
    )
}