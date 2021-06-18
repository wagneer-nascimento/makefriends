import styled from 'styled-components/native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

export const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    background: #DDB0D5;    
    justify-content: center;
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
