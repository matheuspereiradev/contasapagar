import { StyleSheet } from 'react-native';
import { colors } from '../../values/colors';

export const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: colors.blue50,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        fontSize: 15,
        textAlign: 'center',
        color: 'white'
    },
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1
    },
    icon: {
        width: 24,
        height: 18
    }
});