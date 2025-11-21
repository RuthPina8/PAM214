import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Detalle() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del Usuario</Text>
      <Text style={styles.subtitle}>Usando Navegación Stack</Text>

      <Button title="Regresar a Perfil" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue',
  },
});
