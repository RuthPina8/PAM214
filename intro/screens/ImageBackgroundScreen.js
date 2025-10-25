import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';

export default function ImageBackgroundScreen() {
  const [showsplash, setShowsplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowsplash(false);
    }, 2000);
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
          uri: 'https://wallpapercave.com/wp/wp3850825.jpg',
        }}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Bienvenido!</Text>
        </View>
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