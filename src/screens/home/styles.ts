import { Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../values/colors'
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: getBottomSpace() + 50,
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    image: {
        width: 100,
        height: 100
    },
    title: {
        color: colors.primaryBlack,
        fontSize: 30,
        textAlign: 'center',
        lineHeight: 50
    },
    forgotPassword: {
        fontSize: 15,
        margin: 20,
        color: colors.blue50
    },
    input: {
        paddingBottom: 10,
        height: 45,
        backgroundColor: colors.lightgray,
    },
    button: {
        height: 100,
        backgroundColor: colors.primaryBlack,
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentButton: {
        paddingHorizontal: 40,
        paddingTop: 15
    },

})