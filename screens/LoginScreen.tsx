import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function LoginScreen({navigation} : any) {
  return (
    <View style={styles.container}>
      <Text style={[styles.txt, { fontSize: 60 }]}>Login</Text>
      <TextInput
        placeholder='Tu correo o usuario'
        style={[styles.input, styles.txt]}
      />
      <TextInput
        placeholder='Tu contrasenia'
        style={styles.input}
      />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Calculadora")} >
        <View style={styles.fila}>
          <Text style={styles.txt} >Ir a Calculadora</Text>
          <Text></Text>
          <MaterialCommunityIcons name="login-variant" size={24} color="black" />
        </View>
        <Image source={require("../assets/imagenes/calculator_2822971.png")} style={styles.img} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

  fila: {
    flexDirection:'row',

  },

  img: {
    width: 60,
    height: 60,

  },

  btn: {
    backgroundColor: "#fa8e8e",
    width: "80%",
    height: 120,
    alignItems:'center',
    borderRadius:20,
    padding: 10,

  },

  container: {
    alignItems: 'center',
    backgroundColor: "#b3f4f2",
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#6666',
    width: "80%",
    height: 50,
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 25,
    color: 'white',
  },

  txt: {
    color: '#111112',
    fontSize: 30,
  }
})