import styled,{css} from 'styled-components/native';
import { StyleSheet } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

interface PropsIcon {
    selected: boolean;
}

export const Container = styled.View`
    background: #FFF;
    height: 60px;
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 32px;
    border-radius: 30px;

    flex-direction: row;
    justify-content: space-around;
    align-items: center;

`;
export const Icon = styled(IconAntDesign)`
    color: #A36D98;
    font-size: 22px;  
`;

export const ButtonIcon = styled.TouchableOpacity<PropsIcon>`
    border-radius: 50px;
    
    ${props => props.selected && 
    css`
        border-width: 10px;
        border-color: #DDB0D5;
        padding: 3px;
    `} 
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
