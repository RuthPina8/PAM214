import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Switch, TextInput, Button, Alert, ImageBackground, SafeAreaView } from 'react-native';

export default function RepasoPractica11() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [showsplash, setShowsplash] = useState(true);
  const [accion, setAccion] = useState('nada');
  const [isDisabled, setDisabled] = useState(false);

  const mostrarAlerta = () => {
    if ([nombre.trim(), correo.trim()].includes('')) {
      Alert.alert('Error', 'Por favor rellena todos los campos');
    } else {
      Alert.alert(
        'Registro exitoso', `Hola, ${nombre}! Tus datos han sido registrados con éxito. Tu correo es: ${correo}` ); setNombre(''); setCorreo('');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowsplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showsplash) {
    return (
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/originals/f9/0b/f5/f90bf5a97b6448b6cbd71cfa1c134b07.jpg',
        }}
        style={styles.background}
      >
        <View style={styles.splashContainer}>
          <Text style={styles.splashText}>¡Hola, por favor espera un momento!</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: 'https://wallpapercave.com/wp/wp3850825.jpg',
        }}
        style={styles.background}
      >
        <View style={styles.container}>
          <Text>Activado:</Text>

          <Switch onValueChange={() => setDisabled(!isDisabled)} value={isDisabled} />

          <Text>{accion}</Text>

          <View style={styles.container}>
            <Text style={styles.label}>Registro de Usuario</Text>

            <TextInput
              style={styles.input}
              placeholder="Ej. Ruth Verónica Galarza Piña"
              value={nombre}
              onChangeText={setNombre}
              keyboardType="default"
              autoCapitalize="words"
            />
            <TextInput
              style={styles.input}
              value={correo}
              onChangeText={setCorreo}
              placeholder="Ej. pinaruth25@gmail.com"
              keyboardType="email-address"
            />

            <Button title="Registrarse" onPress={mostrarAlerta} color="#486d5e" />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '',
  },
  card: {
    width: 200,
    height: 250,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 8,
    margin: 15,
  },
  mockImage: {
    flex: 1,
    backgroundColor: 'gray',
    marginBottom: 8,
    borderRadius: 8,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  splashContainer: {
    flex: 1,
    backgroundColor: '',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 24,
    color: '#fff',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
});
