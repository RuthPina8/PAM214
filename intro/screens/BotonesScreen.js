import { Text, StyleSheet, View, Pressable, TouchableOpacity, TouchableWithoutFeedback, Switch} from 'react-native'
import { useState } from 'react';

export default function BotonesScreen() {
  const [accion , setAccion] = useState( 'nada');
  const [isDisabled, setDisabled] = useState(false)

    return (
      <View style={styles.container}>

        <text>
         Activado:
      
        </text>

        <Switch

        onValueChange={() => setDisabled(!isDisabled)}
        value={isDisabled}
        
        
        />



<text>
        { accion}
      
</text>
      <Pressable
        onPressIn={()=> setAccion('Pressable In')}
        onPressOut={()=> setAccion('Pressable Out')}
        onPressPress={()=> setAccion('Pressable Long')}
        disabled={!isDisabled}
        >
          {({pressed}) => (
            <View style={[styles.card, !pressed && styles.shadow]}>
            <View style={styles.mockImage}/>
        <text>
         {pressed ? 'Tarjeta presionada' : 'Tarjeta no presionada'}
        </text>
       
        </View>

          )}
        
      </Pressable>
  <TouchableOpacity
  disabled={!isDisabled}
  activeOpacity={0.2}
  onPress={() => setAccion('Opacity')}
  >
<View style={[styles.card, styles.shadow]}>
  <View style={styles.mockImage} />
  <text>
    Esta es una tarjeta
  </text>

</View>

  </TouchableOpacity>
  <TouchableWithoutFeedback
  disabled={!isDisabled}
  onPress={() => setAccion('Withot Feedback')}
  >
  <View style={[styles.card, styles.shadow]}>
  <View style={styles.mockImage}/>
  <text>
    Esta es una tarjeta
  </text>

  </View>
  </TouchableWithoutFeedback>

      </View>
    )
  
}

const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: 200,
        height: 250,
        padding: 20,
        display: "flex",
        flexDirection: 'column',
        borderRadius: 8,
        margin: 15
    },
    mockImage: {
        flex: 1,
        backgroundColor: 'gray',
        marginBottom: 8,
        borderRadius: 8
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 10,
    },
});