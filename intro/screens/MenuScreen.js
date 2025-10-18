import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextInputScreen from './TextInputScreen'
import ImageBackgroundScreen from './ImageBackgroundScreen'
import ScrollViewScreen from './ScrollViewScreen'
import ActivityIndicatorScreen from './ActivityIndicatorScreen'
import FlatListScreen from './FlatListScreen'
import ModalScreen from './ModalScreen'
import BottomSheetScreen from './BottomSheetScreen'


export default function MenuScreen() {

    const[screen, setScreen]= useState('menu');
    switch(screen){
        case 'contador':
            return <ContadorScreen/>
        case 'botones':
            return <BotonesScreen/>
        case 'textInput':
            return <TextInputScreen/>
        case 'imageBackground':
            return <ImageBackgroundScreen/>
        case 'scrollView':
            return <ScrollViewScreen/>
        case 'activityIndicator':
            return <ActivityIndicatorScreen/>
        case 'flatList':
            return <FlatListScreen/>
        case 'modal':
            return <ModalScreen/>
        case 'bottomSheet':
            return <BottomSheetScreen/>
        case 'menu':
            default:
                 return (
      <View>
        <Text>Menu Practicas</Text>
        <Button onPress={()=>setScreen('contador')} title='Pract:Contador'/>
        <Button onPress={()=>setScreen('botones')} title='Pract:Buttons'/>
        <Button onPress={()=>setScreen('TextInput')} title='Pract:TextInput'/>
        <Button onPress={()=>setScreen('ImageBackground')} title='Pract:ImageBackground'/>
        <Button onPress={()=>setScreen('ScrollView')} title='Pract:ScrollView'/>
        <Button onPress={()=>setScreen('ActivityIndicator')} title='Pract:ActivityIndicator'/>
        <Button onPress={()=>setScreen('FlatList')} title='Pract:FlatList'/>
        <Button onPress={()=>setScreen('Modal')} title='Pract:Modal'/>
        <Button onPress={()=>setScreen('BottomSheet')} title='Pract:BottomSheet'/>
      </View>
         )
    }
   
    
  
}

const styles = StyleSheet.create({})