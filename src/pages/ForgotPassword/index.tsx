import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../auth/auth';
import {
    Container,
    SafeAreaView,
    ContainerLogo, 
    Icon,
    TextInstruction,
    ButtonIcon,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword() {
    const navigation = useNavigation();
    const { signIn, loading } = useAuth();
    const [email, setEmail] = useState<string>('');
    const [loadingButton, setLoadingButton] = useState<boolean>(false);

    async function handleForgotPassword() {

    }

    return (

        <SafeAreaView>
            <Container>  

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

                <Button
                    loading={loading}
                    onPress={() => { handleForgotPassword() }}
                >Recuperar</Button>
            </Container>
        </SafeAreaView>
    )
}