import React from 'react'
import { createStackNavigator} from "@react-navigation/stack";
import { Text, View } from 'react-native';
import VideoScreen from './VideoScreen';
import VideoDetail from './VideoDetail';

const Page = createStackNavigator();

export default () => {
    return (
        <Page.Navigator headerMode="none" style={{backgroundColor: '#000'}}>
            <Page.Screen name="Video"   component={VideoScreen} />
            <Page.Screen name="VideoDetalhe"  component={VideoDetail} />
        </Page.Navigator>
    );
}