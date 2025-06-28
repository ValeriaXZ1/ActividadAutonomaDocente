import { SectionList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Tarjeta2 from '../components/Tarjeta2';

export default function ListaExternaScreen() {

    const[datos, setdatos]= useState([])
    async function leer(){
        const resp = await fetch('https://jritsqmet.github.io/web-api/assets/data/api2/sections/crash-s.json');
      const json = await resp.json();
      setdatos(json)
    }


    useEffect(() => {
     leer()
     //console.log(datos);
    }, [])
    

  return (
    <View>
      <Text style={styles.title}>Lista Externa</Text>
      <SectionList
      sections={datos}
      renderItem={({item})=>
        <Tarjeta2 informacion={item}/> //Se envia datos de componente hijo 
    }

    renderSectionHeader={({section:{title}})=>
        <Text style={{fontSize:30}}>{title}</Text>

    }
      /> 
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize:50,
        color:"red",
        textAlign:'center'
    }
})