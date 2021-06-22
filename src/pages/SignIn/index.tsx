import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    ContainerForgotPassword,
    ContainerRegister,
    KeyboardAvoidingView,
    Text,
    ContainerLogo,
    TextLogo,
    Icon,
    TextInstruction,
} from './styles';
import { Alert, Platform, ScrollView, } from 'react-native';
import { useAuth } from '../../auth/auth';
import { useEffect } from 'react';

export default function SignIn() {
    const { signIn, loading } = useAuth();
  
    const navigation = useNavigation();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loadingButton, setLoadingButton] = useState<boolean>(false);

    async function handleSignin() {

        //let isValido = validateFormAuth(usuario, senha);

        // if (isValido) { 
        await signIn({
            email,
            password,
        }).catch((error) => {
            //Alert.alert('Atenção', error.response.data.data);

        });
    }

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
        >
            <ScrollView keyboardShouldPersistTaps="handled">

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
                        maxLength={40}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        name="email"
                        placeholder="E-mail"
                        onChangeText={setEmail}
                        value={email}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            // senhaRef.current?.focus();
                        }} />

                    <Input
                        maxLength={30}
                        secureTextEntry
                        name="senha"
                        placeholder="Senha"
                        onChangeText={setPassword}
                        value={password}
                        returnKeyType="send"
                        textContentType="newPassword"
                        onSubmitEditing={() => { handleSignin() }}
                    />

                    <Button
                        loading={loading}
                        onPress={() => { handleSignin() }}
                    >Entrar</Button>

                    <ContainerForgotPassword onPress={() => { navigation.navigate('ForgotPassword') }}>
                        <Text>Esqueci a senha.</Text>
                    </ContainerForgotPassword>
                    <ContainerRegister onPress={() => { navigation.navigate('SignUp') }}>
                        <Text>Não tem conta? Registre-se.</Text>
                    </ContainerRegister>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}