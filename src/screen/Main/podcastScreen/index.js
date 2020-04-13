import React from 'react'
import { createStackNavigator} from "@react-navigation/stack";
import { Text, View } from 'react-native';
import PodcastScreen from './PodcastScreen';
import PodcastDetail from './PodcastDetail';

const Page = createStackNavigator();

export default () => {
    return (
        <Page.Navigator headerMode="none" style={{backgroundColor: '#000'}}>
            <Page.Screen name="Podcast"   component={PodcastScreen} />
            <Page.Screen name="PodcastDetalhe"  component={PodcastDetail} />
        </Page.Navigator>
    );
}