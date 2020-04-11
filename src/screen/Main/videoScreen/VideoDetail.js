import React from 'react'
import { Text, View, ActivityIndicator, Image } from 'react-native';
import { useTema, useLoading } from '../../../services/providers/AppProvider';

export default ({navigation, route}) => { 
    const  id   = route.params.id
    const { videos } = useTema(id)
    const { loading } = useLoading()
    return (
        <View> 
            { loading ? <ActivityIndicator /> : 
                <View>
                    <Text>{ videos && videos.id }</Text> 
                    <Text>{ videos && videos.tema }</Text> 
                    { videos &&  videos.itens.map( res => <View>
                        <Image source={{uri: res.img.mini }} style={{width: 300, height: 200}} />
                        <Text key={res.id}>{ res.titulo }</Text>
                        </View>)}
                </View>
            }
        </View>
    );
}