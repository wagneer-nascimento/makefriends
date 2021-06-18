import styled from 'styled-components/native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { Platform } from 'react-native';

export const Container = styled.View`
    flex: 1; 
    background: #381431;  
 
`;
export const ContainerImage = styled.TouchableOpacity` 
    margin-bottom: 10px;
`;
export const ContainerHeader = styled.View`
    align-items: center;
    margin-top: ${Platform.OS == "ios" ? 60 : 30}px;
    margin-bottom: 20px;
`;

export const Image = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px; 
    border-width: 2px;
    border-color: #DDB0D5;
`;
export const TextName = styled.Text`
    font-size: 25px;
    color: #FFF;
    font-family: 'Roboto-Bold';
`;
export const ContinerButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px; 

`;
export const ContainerIcon = styled.View`
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;   
    border-radius: 50px;
    background: #FFF;
    margin-right: 10px;
`;
export const Icon = styled(IconAntDesign)`
   font-size: 20px;
   color: #381431;
`;
export const Dividir = styled.View`
    width: 100%;
    border-width: 0.4px;
    border-color: #FFF;
    margin-bottom: 10px; 
`;

export const ContainerButton = styled.View`
    flex: 1;
    padding: 20px;
`;
export const Text = styled.Text`
    color: #FFF;
    font-family: 'Roboto-Bold';
`;