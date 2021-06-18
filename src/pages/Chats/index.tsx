import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Footer from '../../components/FooterTab';
import { Container, Title, ContainerChats, Image, Styles, Padding, TextNome, TextMessage, Icon, ContainerTitle } from './styles';

interface ChatsData {
    id: string;
    nome: string;
    imag: string;
    message: string;
}
export default function Chats() {
    const [chats, setChats] = useState<ChatsData[]>([]);
    const navigation = useNavigation();

    useEffect(() => {
        const data = [
            {
                id: '01',
                nome: 'Wagner tubaraão',
                imag: 'https://instagram.fcau4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/132793595_1567746556757469_2549049410670222755_n.jpg?tp=1&_nc_ht=instagram.fcau4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=FRXua4DETMEAX-YjwBC&edm=AP_V10EBAAAA&ccb=7-4&oh=0ab1cf94800bb0c9ffbd6b51499c0faf&oe=60CF5EEC&_nc_sid=4f375e',
                message: 'ultima messagem...'
            },
            {
                id: '02',
                nome: 'Felipe Donzelo',
                imag: 'https://instagram.fcau4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/132793595_1567746556757469_2549049410670222755_n.jpg?tp=1&_nc_ht=instagram.fcau4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=FRXua4DETMEAX-YjwBC&edm=AP_V10EBAAAA&ccb=7-4&oh=0ab1cf94800bb0c9ffbd6b51499c0faf&oe=60CF5EEC&_nc_sid=4f375e',
                message: 'ultima messagem...',
            },
            {
                id: '03',
                nome: 'Jonas Tabacudo',
                imag: 'https://instagram.fcau4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/132793595_1567746556757469_2549049410670222755_n.jpg?tp=1&_nc_ht=instagram.fcau4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=FRXua4DETMEAX-YjwBC&edm=AP_V10EBAAAA&ccb=7-4&oh=0ab1cf94800bb0c9ffbd6b51499c0faf&oe=60CF5EEC&_nc_sid=4f375e',
                message: 'ultima messagem...'
            }

        ]

        setChats(data);
    }, []);

    function navigationMessage() {
        navigation.navigate('Message');
    }

    return (
        <Container>
            <ContainerTitle>
                <Title>Chats</Title>
                <Icon name="wechat" />
            </ContainerTitle>

            <FlatList
                data={chats}
                keyExtractor={(item: ChatsData) => item.id}
                renderItem={({ item }: { item: ChatsData }) => (
                    <Padding>
                        <ContainerChats onPress={() => { navigationMessage() }}
                             >
                            <Image source={{ uri: item.imag }} />
                            <View>
                                <TextNome>{item.nome}</TextNome>
                                <TextMessage>{item.message}</TextMessage>
                            </View>
                        </ContainerChats>
                    </Padding>
                )}
            />

            <Footer home={false} perfil={false} message={true} />
        </Container>
    )
}