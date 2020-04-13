import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import Style from '../../construct/Style';
import { Feather } from 'react-native-vector-icons'

const ActionItem = ({ icon, text }) => {
    return (
        <View style={Style.actionsItem}>
            <TouchableOpacity style={{ alignItems: 'center' }}>
                <Feather name={icon} color="rgba(255,255,255,0.7)" size={30} />
                <Text style={Style.actionsText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ActionItem;
