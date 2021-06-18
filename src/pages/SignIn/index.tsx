import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Container,
    ContainerForgotPassword,
    ContainerRegister,
    SafeAreaView,
    Text,
    ContainerLogo,
    TextLogo,
    Icon,
    TextInstruction,
} from './styles';
import { Dimensions, Platform, ScrollView } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Routes from '../../routes';
import { useEffect } from 'react';

export default function SignIn() {
    const navigation = useNavigation();

    useEffect(() => {
        if (Platform.OS == 'ios') { 

            console.log('height: ', Dimensions.get('screen').height)
            console.log('width: ', Dimensions.get('screen').width)

        }
    }, [])

    function login() {

    }
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
                    Faça o seu login para continuar.
                </TextInstruction>
                <Input
                    placeholder="E-mail"
                    name="email" />
                <Input
                    placeholder="Senha"
                    name="password" />
                <Button
                    onPress={() => { login() }}
                >Entrar</Button>

                <ContainerForgotPassword>
                    <Text>Esqueci a senha.</Text>
                </ContainerForgotPassword>
                <ContainerRegister onPress={() => { navigation.navigate('SignUp') }}>
                    <Text>Não tem conta? Registre-se.</Text>
                </ContainerRegister>
            </Container>

        </SafeAreaView>
    )
}