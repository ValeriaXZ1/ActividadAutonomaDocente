import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import datos from "../assets/data/futurama.json"
import { FlatList } from 'react-native-gesture-handler'
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer'
import Tarjeta from '../components/Tarjeta'

export default function ListaLocal2Screen() {
  return (
    <View>
      <Text style={styles.titulo}>Lista Local 2</Text>
      <FlatList
      data={datos}
      renderItem={({item})=>
        <Tarjeta informacion ={item}/>
    }
      />
    </View>
  )
}

const styles = StyleSheet.create({
    titulo:{
        textAlign: 'center',
        fontSize: 40,
        color:"#bd0a0a",
    }
})