import React from 'react'
import { createStackNavigator} from "@react-navigation/stack";
import { Text, View , Image, ScrollView} from 'react-native';
import Style from '../../../construct/Style';
import { useLoading } from '../../../services/providers/AppProvider';
import Loading from '../../components/Loading'
import Cosmetico from '../../components/Cosmetico'

export default ({navigation}) => {
    const { loading } = useLoading()
    return ( <>{ loading && loading 
        ? 
        <View style={Style.page}>
            <Loading />
        </View>
        : 
            (
                <>
                <ScrollView style={Style.container}>
                <View style={Style.profile}>
                    <Image style={Style.profileAvatar} source={{uri: 'https://randomuser.me/api/portraits/men/75.jpg'}} />
                    <Text style={Style.profileName}>Don Juan de Alcantra Ferreira</Text>
                    <Text style={Style.profileEmail}>djuan.ferreira@gmail.com</Text>
                </View>
                    <View style={{padding: 20}}>
                       <Text style={Style.profileText}>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                       </Text>
                    </View>
                </ScrollView>
                <Cosmetico back navigation={navigation} />
                </>
            )
        }</>);
    }