import { Alert, Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Divider, Snackbar } from 'react-native-paper'

export default function RegistroScreen() {

    const [contacto, setcontacto] = useState("")
    const [recomendacion, setrecomendacion] = useState("")
    const [valoracion, setvaloracion] = useState("")

    const [datos, setdatos] = useState({ "contacto": "", "recomendacion": "", "valoracion": ""})
    const [activado, setactivado] = useState(false)

    function guardar() {
        if (contacto.trim() != "" && recomendacion.trim() != "" && valoracion.trim() != "") {
            setdatos(
                {
                    "contacto": contacto.trim(),
                    "recomendacion": recomendacion.trim(),
                    "valoracion": valoracion.trim(),
                }
            )
            Alert.alert("Mensaje", "Los datos se han guardado correctamente")
        } else {
            Alert.alert("Error", "NO se permiten campos en blanco")
        }
    }

    return (
        <View style={styles.container} >
            <Text style={{ fontSize: 30 }} >Encuesta de Satisfaccion</Text>
            <TextInput
                placeholder='Ingresar Contacto'
                style={styles.input}
                onChangeText={(texto) => setcontacto(texto)}
            />
            
            
            <Button title='Guardar' onPress={() => guardar()} />
            {/* ------------------------------------------------------------------------------------------------*/}
            <View style={styles.linea} />
            <Text style={styles.txt} >Ver datos</Text>
            <Switch
                value={activado}
                onValueChange={() => setactivado(!activado)}
            />
            <Text style={styles.txt} >Es direccion fiscal ?</Text>
            <View style={styles.linea} />
            {
                activado == true
                    ? <View>
                        <Text style={styles.txt} >Calle: {datos.contacto}</Text>
                    </View>
                    : <Text style={styles.txt} >Alerta de Spoiler</Text>
            }

            <Divider style={{ width: "80%" }} />
            {/* <Snackbar
                visible={activado}
                onDismiss={() => setactivado(!activado)}
                action={{
                    label: 'Cerrar',
                    onPress: () => {
                        // Do something
                    },
                }}>
                Hey there! I'm a Snackbar.
            </Snackbar> */}
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  txt: {
    fontSize: 22,
    color: '#333',
    fontWeight: '600',
    marginVertical: 10,
  },

  linea: {
    backgroundColor: '#333',
    width: 180,
    height: 2,
    marginVertical: 15,
    borderRadius: 1,
  },

  input: {
    fontSize: 18,
    backgroundColor: '#ffffff',
    width: '85%',
    marginVertical: 6,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#333',
    elevation: 2, // sombra en Android
    shadowColor: '#000', // sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
