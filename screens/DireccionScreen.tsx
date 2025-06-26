import React, { useState } from 'react';
import { View, TextInput, Text, Button, Switch, Alert, StyleSheet } from 'react-native';

export default function FormularioDireccionScreen() {
  const [calle, setCalle] = useState('');
  const [numeroExterior, setNumeroExterior] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [referencias, setReferencias] = useState('');
  const [esFiscal, setEsFiscal] = useState(false);

  const validarFormulario = () => {
    if (!calle.trim() || !numeroExterior.trim() || !ciudad.trim()) { //TRIM: Se utiliza para eliminar los espacios en blanco
      Alert.alert('Error', 'Todos los campos son obligatorios excepto Referencias.');
      return;
    }

    if (isNaN(Number(numeroExterior))) { // ISNAN:devuelve un valor si no es valido
      Alert.alert('Error', 'El Número Exterior debe ser numérico.');
      return;
    }

    // Si todo está bien
    Alert.alert('Éxito', 'Formulario enviado correctamente.'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Calle:</Text>
      <TextInput style={styles.input} value={calle} onChangeText={setCalle} placeholder="Ej. Av. Siempre Viva" />

      <Text style={styles.label}>Número Exterior:</Text>
      <TextInput
        style={styles.input}
        value={numeroExterior}
        onChangeText={setNumeroExterior}
        placeholder="Ej. 742"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Ciudad:</Text>
      <TextInput style={styles.input} value={ciudad} onChangeText={setCiudad} placeholder="Ej. Springfield" />

      <Text style={styles.label}>Referencias (opcional):</Text>
      <TextInput
        style={styles.input}
        value={referencias}
        onChangeText={setReferencias}
        placeholder="Ej. cerca del parque"
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>¿Es dirección fiscal?</Text>
        <Switch value={esFiscal} onValueChange={setEsFiscal} />
      </View>

      <Button title="Enviar" onPress={validarFormulario} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#c9f03d',
    borderRadius: 6,
    padding: 8,
    marginTop: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});
