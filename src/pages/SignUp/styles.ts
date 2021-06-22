import styled from 'styled-components/native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { Platform } from 'react-native';

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    flex: 1;
    background: #DDB0D5;     
    
`;
export const ContainerLogo = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 30px;
`;

export const TextLogo = styled.Text`
    font-size: 23px;
    color: #381431;
    font-family: 'Roboto-Bold'; 
`;
export const TextInstruction = styled.Text`
    font-size: 20px;
    color: #FFF;
    font-family: 'Roboto-Bold';
    margin-bottom: 40px;
`;

export const Container = styled.View`  
    margin-top: ${Platform.OS == 'android' ? 20 : 40}px;
    padding: 0 20px;
`;

export const Text = styled.Text`
    color: #FFF;
    font-family: 'Roboto-Bold';
    font-size: 16px;
`;

export const ContainerSignIn = styled.TouchableOpacity`
    align-items: flex-end;
    margin-bottom: 40px;
    margin-top: 40px;
`;
export const Icon = styled(IconAntDesign)`
    color: #FFF;
    font-size: 60px; 
`;
