import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {TelaInicial} from './componentes/TelaInicial/TelaInicial';
import ScanQR from './componentes/ScanQR/ScanQR';
import Historico from './componentes/Historico/Historico';
import Pesquisar from './componentes/Pesquisar/Pesquisar';
import Dashboard from './componentes/Dashboards/Dashboard';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Tela Inicial">
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component={TelaInicial} options={{headerShown:false}}/>
        <Stack.Screen name="Scan QR" component={ScanQR} />
        <Stack.Screen name="Pesquisar" component={Pesquisar}/>
        <Stack.Screen name="Historico" component={Historico}/>  
        <Stack.Screen name="Dashboard" component={Dashboard}/>  
      </Stack.Navigator>
    </NavigationContainer>

  );
}


