import styled from 'styled-components/native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
    flex: 1;
`;

export const Image = styled.Image`
    width: 54px;
    height: 54px;
    border-radius: 50px; 
    border-width: 4px;
    border-color: #DDB0D5;
    
`;
export const Icon = styled(IconAntDesign)`
    color: #FFF;
    font-size: 18px; 
`;
export const TextCallout = styled.Text`
    color: #FFF;
    font-size: 15px;
    font-family: 'Roboto-Bold';
`;

export const ContainerCallout = styled.TouchableOpacity`
    width: 250px;
    height: 35px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 16px;
    background-color: #381431;
`;