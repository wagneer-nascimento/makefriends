import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
    name: string;
}
export default function Input ({ name, ...rest }: InputProps) {

    return (
        <Container>
            <TextInput
                keyboardAppearance="default"
                placeholderTextColor="#666360" 
                {...rest}
            />
        </Container>)
}
