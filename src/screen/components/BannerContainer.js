import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from "react-native-vector-icons";
import Style from '../../construct/Style';

const BannerContainer = ({img, titulo}) => {
    return (
        <View style={Style.banner}>
            <Image source={{uri: img }} style={Style.bannerImg} />
            <LinearGradient colors={['rgba(0,0,0,0)',   'rgba(0,0,0,1)']} style={Style.gradientBanner}></LinearGradient>
    <Text style={Style.bannerTitulo}>{titulo}</Text>
            <TouchableOpacity style={Style.bannerButton}>
                <Text style={Style.textBtn}><Feather name="play" size={15} /> Play</Text>
            </TouchableOpacity>
        </View>
    );
  }

export default BannerContainer;
