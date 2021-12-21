import { StyleSheet } from 'react-native';
import { colors } from '../../values/colors';

export const style = StyleSheet.create({
    container: {
        width: '100%',
        padding: 5,
        height: 100,
        alignItems: 'center',
        marginVertical: 5
    },
    title: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: 'white'
    },
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 30,
        height: 20
    }
});