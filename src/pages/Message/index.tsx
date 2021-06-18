import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, ButtonIcon, HeaderTitle, ContainerChats, Image, Styles, Padding, TextNome, TextMessage, Icon, ContainerHeader } from './styles';
import { View } from 'react-native';

export default function Message() {
    const navigation = useNavigation();

    function navigationChats() {
        navigation.navigate('Chats');
    }

    return (
        <Container>
            <ContainerHeader>
                <ButtonIcon onPress={() => { navigationChats() }}>
                    <Icon name="left" />
                </ButtonIcon>
                <HeaderTitle>Wagner Nascimento</HeaderTitle>
                 <View />
            </ContainerHeader>

        </Container>
    )
}