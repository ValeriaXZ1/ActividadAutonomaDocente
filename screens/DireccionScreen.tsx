import React, { useState } from 'react';
import { View, TextInput, Text, Button, Switch, Alert, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function FormularioDireccionScreen() {
  // ---------- Estados ----------
  const [calle, setCalle] = useState('');
  const [numeroExterior, setNumeroExterior] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [referencias, setReferencias] = useState('');
  const [esFiscal, setEsFiscal] = useState(false);

  // ---------- Validación ----------
  const validarFormulario = () => {
    if (!calle.trim() || !numeroExterior.trim() || !ciudad.trim()) {
      Alert.alert('Error', 'Todos los campos son obligatorios excepto Referencias.');
      return;
    }
    if (isNaN(Number(numeroExterior))) {
      Alert.alert('Error', 'El Número Exterior debe ser numérico.');
      return;
    }
    Alert.alert('Éxito', 'Formulario enviado correctamente.');
  };

  // ---------- Render ----------
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.titulo}>Formulario de Dirección</Text>

        <Text style={styles.label}>Calle</Text>
        <TextInput
          style={styles.input}
          value={calle}
          onChangeText={setCalle}
          placeholder="Ej. Av. Siempre Viva"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Número Exterior</Text>
        <TextInput
          style={styles.input}
          value={numeroExterior}
          onChangeText={setNumeroExterior}
          placeholder="Ej. 742"
          keyboardType="numeric"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Ciudad</Text>
        <TextInput
          style={styles.input}
          value={ciudad}
          onChangeText={setCiudad}
          placeholder="Ej. Springfield"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Referencias (opcional)</Text>
        <TextInput
          style={[styles.input, styles.inputAlto]}
          value={referencias}
          onChangeText={setReferencias}
          placeholder="Ej. cerca del parque"
          placeholderTextColor="#999"
          multiline
        />

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>¿Es dirección fiscal?</Text>
          <Switch value={esFiscal} onValueChange={setEsFiscal} />
        </View>

        <Button title="Enviar" onPress={validarFormulario} color="#4CAF50" />
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------- ESTILOS BONITOS ----------
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f5f6fa',     // gris muy claro de fondo
  },
  container: {
    padding: 24,
    gap: 18,                        // separación vertical (RN ≥0.71)
  },
  titulo: {
    fontSize: 26,
    fontWeight: '700',
    color: '#4a0d0d',
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  input: {
    marginTop: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#333',
    backgroundColor: '#ffffffee',   // blanco translúcido
    borderWidth: 1,
    borderColor: '#c9f03d',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  inputAlto: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 14,
    backgroundColor: '#eef7ff',
    borderRadius: 12,
    elevation: 1,
  },
  switchLabel: {
    fontSize: 15,
    color: '#374151',
  },
});