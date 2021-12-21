import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BottomNavigation, Button } from 'react-native-paper';
import { LargeButton } from '../../components/largeButton';
import { colors } from '../../values/colors';
import { styles } from './styles';


export function Home() {
    const navigation = useNavigation();
    const { primaryBlack, blue50, secundaryRed } = colors;

    return (
        <ScrollView style={{
            marginHorizontal: 5
        }}>
            <LargeButton title="Produtos" icon="food" color={colors.buttonYellow} pressButton={() => { console.log('oi') }} />
            <LargeButton title="Pessoas" icon="account-supervisor" color={colors.buttonGreen} pressButton={() => { console.log('oi') }} />
            <LargeButton title="Compras" icon="basket" color={colors.skyBlue} pressButton={() => { console.log('oi') }} />
            <LargeButton title="Contas a Pagar" icon="calendar-month" color={colors.buttonRed} pressButton={() => { console.log('oi') }} />
            <LargeButton title="Contas Pagas" icon="charity" pressButton={() => { console.log('oi') }} />
        </ScrollView>
    );
}
