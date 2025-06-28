import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavegadorBottom from './Navigation/BottonNavigator';
import NavegadorPrincipal from './Navigation/MainNavigation';

export default function App() {
  return (
    //<NavegadorPrincipal/>
    <NavegadorBottom/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
