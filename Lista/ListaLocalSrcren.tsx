import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

export default function ListaLocalScreen() {

    let datos = [
        {
            "cedula": "1726600362",
            "nombre": "Leslie Chamorro",
            "edad": 22
        },
        {
            "cedula": "1712925542",
            "nombre": "Dayra Quispe",
            "edad": 23
        },
        {
            "cedula": "127672912",
            "nombre": "Mónica Cruz",
            "edad": 24
        }
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista Local</Text>
            <FlatList
                data={datos}
                keyExtractor={(item) => item.cedula}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.texto}>👤 Nombre: {item.nombre}</Text>
                        <Text style={styles.texto}>🎂 Edad: {item.edad}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fbb6f3'
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333'
    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 12,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3
    },
    texto: {
        fontSize: 18,
        color: '#555',
        marginBottom: 4
    }
})
