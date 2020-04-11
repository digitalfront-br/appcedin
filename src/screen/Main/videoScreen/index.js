import React from 'react'
import { createStackNavigator} from "@react-navigation/stack";
import { Text, View } from 'react-native';
import VideoScreen from './VideoScreen';
import VideoDetail from './VideoDetail';

const Page = createStackNavigator();

export default () => {
    return (
        <Page.Navigator>
            <Page.Screen name="pagina video"  component={VideoScreen} />
            <Page.Screen name="pagina video detalhe"  component={VideoDetail} />
        </Page.Navigator>
    );
}