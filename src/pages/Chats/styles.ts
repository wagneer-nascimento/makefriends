import { Platform, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
    flex: 1; 
    background: #381431;  
`;

export const Title = styled.Text` 
    font-size: 18px;
    color: #FFF; 
    font-family: 'Roboto-Bold';
`;
export const TextMessage = styled.Text`
    font-size: 15px;
    color: #FFF; 
    font-family: 'Roboto-Regular';
`;
export const TextNome = styled.Text`
    font-size: 16px;
    color: #FFF; 
    font-family: 'Roboto-Bold';
`;
export const ContainerChats = styled.TouchableOpacity`
    align-items: center;
    flex-direction: row;
    background: #73536d;
    border-radius: 20px; 
    padding: 10px;
`;

export const Image = styled.Image`
    width: 54px;
    height: 54px;
    border-radius: 50px;  
    margin-right: 20px;
`;

export const Icon = styled(IconAntDesign)`
    color: #FFF;
    font-size: 25px; 
`;
export const ContainerTitle = styled.View`
    padding: 15px 7.5%; 
    flex-direction: row; 
    align-items: center;
    justify-content: space-between; 

    margin-top: ${Platform.OS == "ios" ? 20 : 0}px;
`;
export const Styles = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.32,
        shadowRadius: 4.46,

        elevation: 13,
    },
})

export const Padding = styled.View`
    padding: 10px 7%;
`;