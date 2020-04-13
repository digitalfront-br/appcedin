import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Style from '../../construct/Style';
import ActionItem from './ActionItem';

const ActionContainer = ({img, titulo}) => {
    return (
        <View style={Style.actions}>
            <ActionItem icon="heart" text="gostei" />
            <ActionItem icon="share" text="compartilhar" />
            <ActionItem icon="plus" text="adicionar" />
        </View>
    );
  }

export default ActionContainer;
