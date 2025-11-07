import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import PerfilPersonalScreen  from './PerfilPersonalScreen'


export default function MenuScreen() {

    const[screen, setScreen]= useState('menu');
    switch(screen){
        
        case 'perfilPersonal':
            return <PerfilPersonalScreen/>
    case 'menu':
        default:
            return (
      <View>
        <Text>Menu Practicas</Text>
        <Button onPress={()=>setScreen('perfilPersonal')} title='PRACT.PERFILPERSONAL'/>
      </View>
            )
    }
}

const styles = StyleSheet.create({
    
})


