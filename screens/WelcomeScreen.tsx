import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen({navigation}:any) {
  return (
    <ImageBackground source={{ uri:"https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg"}} style={styles.container}>
      <Text style={styles.titulo}>Bienvenidos a la app</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  titulo:{
    padding:150,
    textAlign:'center',
  }
})