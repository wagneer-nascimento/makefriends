import React from 'react';
import { useNavigation } from '@react-navigation/core';
import {
    Container,
    Styles,
    Icon,
    ButtonIcon,
} from './styles';

interface FooterTabProps {
    home: boolean;
    perfil: boolean;
    message: boolean;
}

export default function Footer({ home, perfil, message }: FooterTabProps) {
    const navigation = useNavigation();

    function navigationHome() {
        navigation.navigate('Home');
    }

    function navigationMessage() {
        navigation.navigate('Chats');
    }

    function navigationUser() {
        navigation.navigate('Perfil');
    }

    return (
        <Container style={Styles.container}>
            <ButtonIcon selected={home} onPress={() => { navigationHome() }}>
                <Icon name="home" />
            </ButtonIcon>

            <ButtonIcon selected={message} onPress={() => { navigationMessage() }}>
                <Icon name="message1" />
            </ButtonIcon>

            <ButtonIcon selected={perfil} onPress={() => { navigationUser() }}>
                <Icon name="user" />
            </ButtonIcon>
        </Container>
    )
}

