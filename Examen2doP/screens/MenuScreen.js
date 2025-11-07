import PerfilPersonalScreen from "./PerfilPersonalScreen";


export default function MenuScreen() {
   const[screen, setScreen]= useState('menu'); 
    
        switch(screen){
            case 'perfilPersonal':
                return <PerfilPersonalScreen/>;
            case 'menu':
            default:
                return (
            <View>
                <Text>Menu Practicas</Text>
                <Button onPress={()=>setScreen('perfilPersonal')} title='PANTALLA PERFIL PERSONAL'/>
            </View>
                )
                
                

        }
    
}

const styles = StyleSheet.create({})




