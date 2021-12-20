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
        <ScrollView>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
            <LargeButton title="Press" icon="user" pressButton={() => { console.log('oi') }} />
            <Text>Open up App.tsx to start working on your app!</Text>
        </ScrollView>
    );
}
