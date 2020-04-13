import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, ActivityIndicator, Image, StatusBar } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { useLoading, useTema, usePodcasts } from '../../../services/providers/AppProvider'
import CardContainer from '../../components/CardContainer'
import BannerContainer from '../../components/BannerContainer'
import CardItem from '../../components/CardItem'
import Style from '../../../construct/Style';
import Cosmetico from '../../components/Cosmetico';
import Loading from '../../components/Loading';

export default ({ route, navigation }) => {
    const { loading } = useLoading()
    const { podcasts } = usePodcasts()
    const { item }    =   useTema('6')
    return (
        <View style={Style.page}>
            {loading ?
                <Loading /> :
                <>
                    <ScrollView style={Style.container}>
                        {item && 
                            <BannerContainer img={item.media.img.capa} />
                        }
                        <View>
                            <View>
                                {podcasts && podcasts.map(res => res.itens && res.itens == '' ? <Text style={{ position: 'absolute', bottom: 0, height: 0, width: 0, borderWidth: 0 }} key={res.id}></Text> :
                                    <CardContainer key={res.id} title={res.nome}>
                                        {res.itens && res.itens.map(item =>
                                            <CardItem 
                                                route={route} 
                                                navigation={navigation} 
                                                key={item.id + '-podcast'} 
                                                id={item.id} 
                                                type={item.tipo}
                                                img={item.media.img.mini} 
                                                title={item.titulo} />
                                        )}
                                    </CardContainer>
                                )}
                            </View>

                        </View>

                    </ScrollView>
                    <Cosmetico />
                </>
            }
        </View>
    );
}