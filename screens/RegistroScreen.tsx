import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Divider, Snackbar } from 'react-native-paper'

export default function RegistroScreen() {

    const [nombre, setnombre] = useState("")
    const [apellido, setapellido] = useState("")
    const [email, setemail] = useState("")
    const [telefono, settelefono] = useState("")
    const [contrasenia, setcontrasenia] = useState("")
    const [confirmarcontrasenia, setconfirmarcontrasenia] = useState("")

    const [datos, setdatos] = useState({ "nombre": "", "apellido": "", "email": "", "telefono": "", "contrasenia": "", "confirmarcontrasenia": "" })
    const [activado, setactivado] = useState(false)

    function guardar() {
        if (nombre.trim() != "" && apellido.trim() != "" && email.trim() != "" && telefono.trim() != "" && contrasenia.trim() != "" && confirmarcontrasenia.trim() != "") {
            setdatos(
                {
                    "nombre": nombre.trim(),
                    "apellido": apellido.trim(),
                    "email": email.trim(),
                    "telefono": telefono.trim(),
                    "contrasenia": contrasenia.trim(),
                    "confirmarcontrasenia": confirmarcontrasenia.trim(),
                }
            )
            Alert.alert("Mensaje", "Los datos se han guardado correctamente")
        } else {
            Alert.alert("Error", "NO se permiten campos en blanco")
        }
    }

    return (
        <View style={styles.container} >
            <Text style={{ fontSize: 30 }} >Registro De Usuario</Text>
            <TextInput
                placeholder='Ingresar Nombre'
                style={styles.input}
                onChangeText={(texto) => setnombre(texto)}
            />
            <TextInput
                placeholder='Ingresar Apellido'
                style={styles.input}
                onChangeText={(texto) => setapellido(texto)}
            />
            <TextInput
                placeholder='Ingresar Email'
                style={styles.input}
                onChangeText={(texto) => setemail(texto)}
            />
            <TextInput
                placeholder='Ingresar Telefono'
                style={styles.input}
                onChangeText={(texto) => settelefono(texto)}
            />
            <TextInput
                placeholder='Ingresar Contraseña'
                style={styles.input}
                onChangeText={(texto) => setcontrasenia(texto)}
            />
            <TextInput
                placeholder='Confirmar Contraseña'
                style={styles.input}
                onChangeText={(texto) => setconfirmarcontrasenia(texto)}
            />
            <Button title='Guardar' onPress={() => guardar()} />
            {/* ------------------------------------------------------------------------------------------------*/}
            <View style={styles.linea} />
            <Text style={styles.txt} >Ver datos</Text>
            <Switch
                value={activado}
                onValueChange={() => setactivado(!activado)}
            />
            <Text style={styles.txt} >Aceptar terminos y condiciones</Text>
            <View style={styles.linea} />
            {
                activado == true
                    ? <View>
                        <Text style={styles.txt} >Nombre: {datos.nombre}</Text>
                        <Text style={styles.txt} >Apellido: {datos.apellido}</Text>
                        <Text style={styles.txt} >Email: {datos.email}</Text>
                        <Text style={styles.txt} >Telefono: {datos.telefono}</Text>
                        <Text style={styles.txt} >Contraseña: {datos.contrasenia}</Text>
                        <Text style={styles.txt} >Confirmar Contraseña: {datos.confirmarcontrasenia}</Text>
                    </View>
                    : <Text style={styles.txt} >Alerta de Spoiler</Text>
            }

            <Divider style={{ width: "80%" }} />
            
        </View>
    )
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 18,
    color: "#222",
    marginVertical: 4,
  },
  linea: {
    backgroundColor: '#999',
    width: "70%",
    height: 1,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#f0faff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    fontSize: 18,
    backgroundColor: '#ffffffcc',
    width: "100%",
    marginVertical: 6,
    padding: 12,
    borderRadius: 10,
    color: '#333',
    elevation: 2,
  },
});