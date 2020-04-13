import React, { Children } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Style from '../../construct/Style';

export const CardContainer = ({children, title}) => {
    return (
      <View style={Style.cardContainer}>
        <Text style={Style.cardLabel}>{title}</Text>
        <ScrollView horizontal canCancelContentTouches={true} >
          <View style={Style.scrollHorizontal} >
            {children}
          </View>
        </ScrollView>
      </View>
    );
  }

export default CardContainer