import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'


export default function Tarjeta2(props:any) {
    //console.log(props.informacion.name);
    const[mostrar, setmostrar]=useState(false)
    
  return (
 <View>
    <TouchableOpacity style={styles.fila}onPress={()=>setmostrar(true)}>
        <Image source={{uri:props.informacion.image}}
        style={styles.img}/>
      <Text>{props.informacion.name}</Text>
    </TouchableOpacity>
    <Modal
    visible={mostrar}
    transparent={true}
    >
        <View style={styles.modal}>
            <View style={styles.modalContainer}>
<Image source={{uri:props.informacion.image}}
            style={styles.modalImg}
            />
        <Button title='cerrar' onPress={()=> setmostrar(false)}/>
            </View>
            
    </View>
    </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    modalContainer:{
        width:"80%",
        height:"50%",
        backgroundColor:'white',
        borderRadius:20,
        padding:20

    },
    modal:{
        backgroundColor:"#8c88af75",
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modalImg:{
        width:300,
        height:300,
        resizeMode:'contain'
    },
    img:{
        height: 80,
        width:50,
        resizeMode:'contain'

    },
    fila:{
        flexDirection:'row',
        backgroundColor:"#80fefe",
        margin:5,
        borderRadius:10 
    }
})