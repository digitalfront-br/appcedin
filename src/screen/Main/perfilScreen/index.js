import React from 'react'
import { createStackNavigator} from "@react-navigation/stack";
import { Text, View } from 'react-native';
import PerfilScreen from './PerfilScreen';
import PerfilDetail from './PerfilDetail';

const Page = createStackNavigator();

export default () => {
    return (
        <Page.Navigator headerMode="none" style={{backgroundColor: '#000'}}>
            <Page.Screen name="Perfil"   component={PerfilScreen} />
            {/* <Page.Screen name="PerfilDetalhe"  component={PerfilDetail} /> */}
        </Page.Navigator>
    );
}