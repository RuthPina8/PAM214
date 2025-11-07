import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function PerfilPersonalScreen() {
  const [showsplash, setShowsplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowsplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (showsplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>¡Bienvenido a la app!</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQombiDFrHU0xt350LrR-Av7rfUjutEuk1aww&s',
        }}
        style={styles.background}
      >
        <ScrollView>
        <View style={styles.header}>
          <Text style={styles.nombre}> Perfil Personal</Text>
          <Text style={styles.descripcion}> Información del usuario</Text>
          <Text style={styles.descripcion}> Nombre: Ruth Veronica Galarza Piña</Text>
          <Text style={styles.descripcion}> Profesión: Estudiante de Ingeniería</Text>
          <Text style={styles.descripcion}> Descripción: Estudiante de ingenieria que actualmente cursa el 4to cuatrimestre</Text>
          <Text style={styles.descripcion}> Teléfono: 4421237271</Text>
        </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#000000ff',
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
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
});