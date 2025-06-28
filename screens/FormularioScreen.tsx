import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Divider, Snackbar } from 'react-native-paper'

export default function FormularioScreen() {

    const [nombre, setnombre] = useState("")
    const [edad, setedad] = useState(0)
    const [datos, setdatos] = useState({ "nombre": "", "edad": 0 })
    const [activado, setactivado] = useState(false)

    function guardar() {
        if (nombre.trim() != "" && edad.toString().trim()) {
            setdatos(
                {
                    "nombre": nombre.trim(),
                    "edad": edad
                }
            )
            Alert.alert("Mensaje", "Los datos se han guardado correctamente")
        } else {
            Alert.alert("Error", "NO se permiten campos en blanco")
        }


    }


    return (
        <View style={styles.container} >
            <Text style={{ fontSize: 60 }} >Formulario</Text>

            <TextInput
                placeholder='Ingresar Nombre'
                style={styles.input}
                onChangeText={(texto) => setnombre(texto)}
            />

            <TextInput
                placeholder='Ingresar Edad'
                style={styles.input}
                onChangeText={(texto) => setedad(+texto)}
                keyboardType='numeric'
            />
            <Button title='Guardar' onPress={() => guardar()} />

            {/* ------------------------------------------------------------------------------------------------*/}

            <View style={styles.linea} />
            <Text style={styles.txt} >Ver datos</Text>
            <Switch
                value={activado}
                onValueChange={() => setactivado(!activado)}
            />

            <View style={styles.linea} />

            {
                activado == true
                    ? <View>
                        <Text style={styles.txt} >Nombre: {datos.nombre}</Text>
                        <Text style={styles.txt} >Edad:   {datos.edad}</Text>
                    </View>

                    : <Text style={styles.txt} >Alerta de Spoiler</Text>
            }

            <Divider style={{ width: "80%" }} />

            <Snackbar
                visible={activado}
                onDismiss={()=>setactivado(!activado)}
                action={{
                    label: 'Cerrar',
                    onPress: () => {
                        // Do something
                    },
                }}>
                Hey there! I'm a Snackbar.
            </Snackbar>

        </View>
    )
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4a0d0d',
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: 8,
  },
    linea: {
    width: '70%',
    height: 4,                        
    marginVertical: 16,
    borderRadius: 2,
    overflow: 'hidden',               
    backgroundColor: '#4a0d0d',  
                       
  },

   container: {
  flex: 1,
  backgroundColor: '#e0f7fa', 
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 24,
  gap: 20,
},


     input: {
    width: '80%',
    fontSize: 22,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4a0d0d55',         
    backgroundColor: '#ffffffaa',   
    color: '#333',
    marginBottom: 12,
  },
})