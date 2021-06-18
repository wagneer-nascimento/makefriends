import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
    Container,
    ContainerSignIn,
    SafeAreaView,
    Text,
    ContainerLogo,
    TextLogo,
    Icon,
    TextInstruction,
} from './styles';

export default function SignUp() {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Container>
                <ContainerLogo>
                    <TextLogo>
                        Make Friends <Icon name="wechat" />
                    </TextLogo>
                </ContainerLogo>
                <TextInstruction>
                    Bem vindo ao App,{"\n"}
                    Faça o seu registro para continuar.
                </TextInstruction>
                <Input
                    placeholder="Nome"
                    name="name" />
                <Input
                    placeholder="E-mail"
                    name="email" />
                <Input
                    placeholder="Senha"
                    name="password" />
                <Button>Registrar</Button>

                <ContainerSignIn onPress={() => { navigation.navigate('SignIn') }}>
                    <Text>Já tem conta? Faça o login.</Text>
                </ContainerSignIn>
            </Container>
        </SafeAreaView>
    )
}