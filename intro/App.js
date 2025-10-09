//1. imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, { useState } from 'react';
//2. Main: Zona de componentes que van a estar a la vista
export default function App() {
const[Contador,setContador]=useState(0);

  return (
    <View style={styles.container}>
      <Text>৻(  •̀ ᗜ •́  ৻)</Text>
      <Text>Contador:{Contador}</Text>
      <Button title='Agregar' onPress={()=>setContador(Contador+1)}/>
      <Button title='Quitar' onPress={()=>setContador(Contador-1)}/>
      <Button title='Reiniciar' onPress={()=>setContador(0)}/>
      <StatusBar style="auto" />
    </View>
  );
}
//3. Estilos: Zona estetica y de posicionamiento  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
