import React from 'react'
import { createStackNavigator} from "@react-navigation/stack";
import { Text, View, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTemas, useLoading } from '../../../services/providers/AppProvider'

export default ({navigation}) => {
    const {loading} =   useLoading()
    const { temas } = useTemas()
    return (
        <View>
            { loading ? <ActivityIndicator /> : temas.map(res => <TouchableOpacity  key={res.id} onPressIn={() => navigation.navigate('pagina video detalhe', { id: res.id })}><Text>{res.tema}</Text></TouchableOpacity> )}
            
                <Text>component video screen</Text>
            
        </View>
    );
}