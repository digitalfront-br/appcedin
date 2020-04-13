import React, { Children } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Style from '../../construct/Style'
import { TouchableHighlight } from 'react-native-gesture-handler';

export const CardContainer = ({img, title, type, id, route, navigation}) => {
    return (
        <View style={Style.card}>
            <TouchableHighlight onPress={() => navigation.navigate(`${type}Detalhe`, { id: id })}>
                <View>
                <Image style={Style.cardImage} source={{uri: img || 'https://placehold.it/300/300'}} />
                <Text style={Style.cardTitle}> { title || 'titulo' }</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
  }

export default CardContainer