//1. imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, { useState } from 'react';
//2. Main: Zona de componentes que van a estar a la vista
export default function App() {
const[Contador,setContador]=useState(0);

  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Contador: </Text>
      <Text style={styles.texto2}>৻(  •̀ ᗜ •́  ৻) {Contador}</Text>
      
       <View style={styles.contenedorBotones}>
      <Button  color ="#B0E0E6"title='Agregar' onPress={()=>setContador(Contador+1)}/>
      <Button color ="#B0C4DE" title='Quitar' onPress={()=>setContador(Contador-1)}/>
      <Button color = "#ADD8E6"title='Reiniciar' onPress={()=>setContador(0)}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
//3. Estilos: Zona estetica y de posicionamiento  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
   color:'#9370DB',
   fontSize: '50',
   fontFamily: 'Time New Roman',
   fontWeight: 'bold',
   fontStyle:'italic',
   textDecorationLine: 'line-througth',
  },
  texto2:{
   color:'#008080',
   fontSize: '40',
   fontFamily: 'Arial',
   fontWeight: '900',
   fontStyle:'italic',
   textDecorationLine: 'underline',
  },
  contenedorBotones:{
    marginTop:'14',
    flexDirection:'row',
    gap:15
  },
});
