import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Geolocation from '@react-native-community/geolocation';
import { Alert, PermissionsAndroid, Platform, ScrollView } from 'react-native';
import {
    Container,
    ContainerSignIn,
    KeyboardAvoidingView,
    Text,
    ContainerLogo,
    TextLogo,
    Icon,
    TextInstruction,
} from './styles';
import api from '../../services/api';
import { useAuth } from '../../auth/auth';

interface SignUpData {
    name: string;
    email: string;
    password: string;
    latitude: number;
    longitude: number;
}


export default function SignUp() {
    const { signIn, loading } = useAuth();
    const navigation = useNavigation();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [longitude, setLongitude] = useState<number>(0);
    const [latitude, setLatitude] = useState<number>(0);

    useEffect(() => {
        locationUser();

    }, []);

    function locationUser() {
        Geolocation.getCurrentPosition(
            (position) => {
                setLongitude(position.coords.longitude)
                setLatitude(position.coords.latitude)
            }, (error) => {
                console.log(error.message)
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 })

    }

    async function handleSignUp() {
        if (latitude == 0 || longitude == 0) {
            Alert.alert(
                'Atenção',
                'Não podemos concluir o registro no app sem a localização, Por favor, verificar nas configurações do aparelho.')
            return;
        }
        const data: SignUpData = {
            name,
            email,
            password,
            latitude,
            longitude,
        }
        locationUser();

        console.log(data);
        /*

        await api.post('/users', data).then(response => {
            signIn({
                email: email,
                password: password,
            })
        }).catch((err) => {
            //error
        });*/

    }

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled">
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
                        maxLength={40}
                        placeholder="Nome"
                        name="name"
                        onChangeText={setName}
                        value={name}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            // senhaRef.current?.focus();
                        }} />
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
                        onSubmitEditing={() => { handleSignUp() }}
                    />

                    <Button
                        loading={loading}
                        onPress={() => { handleSignUp() }}
                    >Registre</Button>

                    <ContainerSignIn onPress={() => { navigation.navigate('SignIn') }}>
                        <Text>Já tem conta? Faça o login.</Text>
                    </ContainerSignIn>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>

    )
}