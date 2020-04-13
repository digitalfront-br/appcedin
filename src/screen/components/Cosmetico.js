import React from 'react';
import { View, StatusBar, Image, Text, TouchableOpacity } from 'react-native';
import Style from '../../construct/Style';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from 'react-native-vector-icons';

const Cosmetico = ({ navigation, back, route }) => {
    return (
        <>
            <StatusBar />
            <View style={Style.gradientTop}>
                <LinearGradient colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']} style={Style.gradientTop}>
                    <Image source={require('../../../assets/img/logo-branca.png')} style={Style.logoApp} />
                </LinearGradient>
                { back && back ?
                    <TouchableOpacity onPress={() => navigation.goBack() } style={{position: 'absolute', top: 25, left: 10}}>
                        <Feather name="chevron-left" size={40} color="rgba(255,255,255,0.7)" />
                    </TouchableOpacity>
                    :
                    null
                }
            </View>
            <View style={Style.gradientBottom}>
                <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={Style.gradientBottom}></LinearGradient>
            </View>

        </>
    );
}

export default Cosmetico;
