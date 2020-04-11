import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  { Feather } from "react-native-vector-icons";
import VideoScreen from './videoScreen/index';
import PodcastScreen from "./podcastScreen/index";
import PerfilScreen from "./perfilScreen/index";

const Abas  =   createBottomTabNavigator();

export default () => {
    return (
        <Abas.Navigator
            tabBarOptions={{
                showLabel: false,
                activeTintColor: "green",
                style: {
                    backgroundColor: "#000",
                    marginBottom: -1
                }
            }}
            >
            <Abas.Screen 
                name="Videos" 
                component={VideoScreen} 
                options={{
                    tabBarIcon:({color, size}) => <Feather name="home" color={color} size={size} />
                }}/>
            <Abas.Screen 
                name="Podcasts" 
                component={PodcastScreen} 
                options={{
                    tabBarIcon:({color, size}) => <Feather name="mic" color={color} size={size} />
                }}/>
            <Abas.Screen 
                name="Perfil" 
                component={PerfilScreen} 
                options={{
                    tabBarIcon:({color, size}) => <Feather name="user" color={color} size={size} />
                }}/>
        </Abas.Navigator>
  )};