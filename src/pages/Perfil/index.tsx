import React from 'react';
import { useState } from 'react';
import {ScrollView} from 'react-native';
import Footer from '../../components/FooterTab';
import {
    Container,
    ContainerImage,
    Image,
    TextName,
    ContainerHeader,
    ContinerButton,
    ContainerIcon,
    Dividir,
    Icon,
    ContainerButton,
    Text,
} from './styles';

export default function Perfil() {
    const [user, setUser] = useState(
        {
            nome: 'Wagner Nascimento',
            imag: 'https://instagram.fcau4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/132793595_1567746556757469_2549049410670222755_n.jpg?tp=1&_nc_ht=instagram.fcau4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=FRXua4DETMEAX-YjwBC&edm=AP_V10EBAAAA&ccb=7-4&oh=0ab1cf94800bb0c9ffbd6b51499c0faf&oe=60CF5EEC&_nc_sid=4f375e',
        }
    )
    return (
        <Container>

            <ContainerHeader>
                <ContainerImage>
                    <Image source={{ uri: user.imag }} />
                </ContainerImage>
                <TextName>{user.nome}</TextName>
            </ContainerHeader>
            <ContainerButton>
                <ScrollView>
                    <ContinerButton onPress={() => { }}>
                        <ContainerIcon>
                            <Icon name="lock1" />
                        </ContainerIcon>
                        <Text>Alterar senha</Text>
                    </ContinerButton>
                    <Dividir />

                    <ContinerButton onPress={() => { }}>
                        <ContainerIcon>
                            <Icon name="setting" />
                        </ContainerIcon>
                        <Text>Suporte</Text>
                    </ContinerButton>
                    <Dividir />

                    <ContinerButton onPress={() => { }}>
                        <ContainerIcon>
                            <Icon name="logout" />
                        </ContainerIcon>
                        <Text>Sair</Text>
                    </ContinerButton>
                    <Dividir />
                </ScrollView>
            </ContainerButton>
            <Footer home={false} perfil={true} message={false} />
        </Container>
    )
}