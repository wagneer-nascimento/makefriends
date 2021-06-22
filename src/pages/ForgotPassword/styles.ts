import styled from 'styled-components/native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { Platform } from 'react-native';

export const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    background: #DDB0D5;     
    
`;
export const ContainerLogo = styled.View` 
    margin-bottom: 20px;
`; 
 
export const TextInstruction = styled.Text`
    font-size: 20px;
    color: #FFF;
    font-family: 'Roboto-Bold';
    margin-bottom: 40px;
`;

export const Container = styled.View` 
    margin-top: 30px;
    padding: 0 20px;
 `;
  
export const Icon = styled(IconAntDesign)`
    color: #FFF;
    font-size: 22px; 
`;
export const ButtonIcon = styled.TouchableOpacity``;