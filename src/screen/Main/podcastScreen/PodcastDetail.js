import React from 'react'
import { Text, View, ActivityIndicator, Image, ScrollView } from 'react-native';
import { useTema, useLoading } from '../../../services/providers/AppProvider';
import Style from '../../../construct/Style'
import Cosmetico from '../../components/Cosmetico'
import BannerContainer from '../../components/BannerContainer'
import ActionContainer from '../../components/ActionsContainer';
import Loading from '../../components/Loading';

export default ({ navigation, route }) => {
    const id = route.params.id
    const { item } = useTema(id)
    const { loading } = useLoading()
    return (
        <View style={Style.page}>
            {loading
                ? <Loading /> :
                <>
                    <ScrollView style={Style.container}>
                        <BannerContainer titulo={item && item.titulo} img={item && item.media.img.capa} />
                        <ActionContainer />
                        <View style={Style.content}>
                            <Text style={Style.contentLabel}>Descrição</Text>
                            <Text style={Style.contentText}>{item && item.content}</Text>
                        </View>
                    </ScrollView>
                    <Cosmetico back navigation={navigation} />
                </>
            }
        </View>
    );
}