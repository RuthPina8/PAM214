import { View, StatusBar } from 'react-native';
import InsertUsuarioScreen from './screens/InsertUsuarioScreen';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <InsertUsuarioScreen />
    </View>
  );
}