import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Tarjeta(props: any) {
    function mostrarDtos(dato: any) {
        // Alert.alert(dato.name.last, "EL USUARIO PROVIENE DE " + dato.homePlanet); // Asegúrate de que homePlanet exista en tus datos si lo usas
    }

    return (
        <TouchableOpacity style={styles.Tarjeta} onPress={() => mostrarDtos(props.informacion)}>
            <View style={styles.container}>
                
                <Text style={styles.Titulo}>Detalles del Personaje</Text>
            </View>

            <View style={styles.contentContainer}>
                <View style={styles.textColumn}>
                    <Text style={styles.nameText}>{props.informacion.name.first} {props.informacion.name.last}</Text>
                    <Text style={styles.detailText}>Ocupación: {props.informacion.ocupation}</Text>
                    <Text style={styles.detailText}>Edad: {props.informacion.age}</Text>
                </View>

                
                <View>
                    <Image
                        source={{ uri: props.informacion.images.main }}
                        style={styles.imagenes}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Tarjeta: {
        backgroundColor: "#98a0ec",
        margin: 10, 
        padding: 15, 
        borderRadius: 20,
    },
    container: {
        width: '100%',
        alignItems: 'center', 
        marginBottom: 10, 
    },
    Titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333', 
    },
    contentContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
    },
    textColumn: {
        flex: 1, 
        marginRight: 10, 
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#000',
    },
    detailText: {
        fontSize: 14,
        color: '#555',
    },
    
    imagenes: {
        height: 100, 
        width: 55, 
        
    },
});