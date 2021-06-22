
import React, { useEffect, useState } from 'react';
import { Container, Image, Icon, ContainerCallout, TextCallout } from './styles';
import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import Footer from '../../components/FooterTab';
import api from '../../services/api';
import { useAuth } from '../../auth/auth';

interface Pessoas {
    nome: string;
    imag: string;
    lat: number;
    long: number;
    online: boolean;
}

export default function Home() {
    const { user } = useAuth();
    const [latitude, setLatitude] = useState<number>(-8.124919429076751);
    const [longitude, setLongitude] = useState<number>(-34.939161429807925);
    const [pessoas, setPessoas] = useState<Pessoas[]>([]);
 
    useEffect(() => {
        const data = [
            {
                nome: 'Wagner',
                imag: 'https://instagram.fcau4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/132793595_1567746556757469_2549049410670222755_n.jpg?tp=1&_nc_ht=instagram.fcau4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=FRXua4DETMEAX-YjwBC&edm=AP_V10EBAAAA&ccb=7-4&oh=0ab1cf94800bb0c9ffbd6b51499c0faf&oe=60CF5EEC&_nc_sid=4f375e',
                lat: -8.124709907818316,
                long: -34.93792433160196,
                online: true,
            },
            {
                nome: 'Felipe',
                imag: 'https://instagram.fcau4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/132793595_1567746556757469_2549049410670222755_n.jpg?tp=1&_nc_ht=instagram.fcau4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=FRXua4DETMEAX-YjwBC&edm=AP_V10EBAAAA&ccb=7-4&oh=0ab1cf94800bb0c9ffbd6b51499c0faf&oe=60CF5EEC&_nc_sid=4f375e',
                lat: -8.124773634703054,
                long: -34.93835348500529,
                online: false,
            },
            {
                nome: 'Jonas',
                imag: 'https://instagram.fcau4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/132793595_1567746556757469_2549049410670222755_n.jpg?tp=1&_nc_ht=instagram.fcau4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=FRXua4DETMEAX-YjwBC&edm=AP_V10EBAAAA&ccb=7-4&oh=0ab1cf94800bb0c9ffbd6b51499c0faf&oe=60CF5EEC&_nc_sid=4f375e',
                lat: -8.125495872027791,
                long: -34.93831056966411,
                online: true,
            }
        ]

        setPessoas(data)
    }, [])

    async function fetchPessoas() {

        try {
            const response = await api.get('users');
            setPessoas(response.data);
        } catch (error) {

        }

    }

    return (
        <Container>
            <MapView
                initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008
                }}
                style={{ flex: 1 }}
                rotateEnabled={false}
                scrollEnabled={true}
                zoomEnabled={true}
                showsPointsOfInterest={false}
                showsBuildings={false}
                loadingEnabled
            >

                {pessoas.map((item) => (
                    <Marker
                        key={item.lat}
                        coordinate={{
                            latitude: item.lat,
                            longitude: item.long
                        }}>

                        <Image source={{ uri: item.imag }} />

                        <Callout tooltip onPress={() => { console.log(item.nome) }}>
                            <ContainerCallout>
                                <Icon name="aliwangwang-o1" />
                                <TextCallout>{`Conversar com ${item.nome}`}</TextCallout>
                                <Icon name="wechat" />
                            </ContainerCallout>
                        </Callout>

                    </Marker>
                ))}
            </MapView>

            <Footer home={true} perfil={false} message={false} />

        </Container>
    );
};
