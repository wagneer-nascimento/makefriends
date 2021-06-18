import React from 'react';
import {
    TouchableOpacityProps,
    View,
    ActivityIndicator
} from 'react-native';
import {
    ButtonText,
    Container
} from './styles';

interface ButtonProps extends TouchableOpacityProps {
    children: string;
    loading?: boolean;
}

export default function Button({ children, loading, ...rest }: ButtonProps) {
    return (
        <Container {...rest}>
            {loading ?
                <View style={{ flex: 1, }}>
                    <ActivityIndicator size="large" color="#FFF" />
                </View> :
                <ButtonText>
                    {children}
                </ButtonText>}
        </Container>
    );
}