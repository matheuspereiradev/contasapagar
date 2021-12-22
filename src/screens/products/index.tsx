import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, DataTable, FAB, IconButton } from 'react-native-paper';
import { colors } from '../../values/colors';
import { styles } from './styles';
import * as SQLite from 'expo-sqlite';

export function Products() {
    const navigation = useNavigation();
    const { primaryBlack, blue50, secundaryRed } = colors;
    const db = SQLite.openDatabase('dbName');

    db.exec([{
        sql: `CREATE TABLE IF NOT EXISTS produtos (
        produtos_id INTEGER PRIMARY KEY,
        nome TEXT NOT NULL,
        unidade TEXT NOT NULL);`
        , args: []
    }], false, () =>
        console.log('table create')
    );
    db.exec([{
        sql: `INSERT INTO produtos (
        name, unidade) values ('leite','kg');`
        , args: []
    }], false, () =>
        console.log('insert')
    );
    db.exec([{
        sql: `select * from produtos;`
        , args: []
    }], false, () =>
        console.log('table create')
    );


    return (
        <>
            <ScrollView style={{
                marginHorizontal: 5
            }}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Produto</DataTable.Title>
                        <DataTable.Title>Und.</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row onPress={() => { console.log('abaxai') }}>
                        <DataTable.Cell>Ice cream sanduiche</DataTable.Cell>
                        <DataTable.Cell>Kg</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row onPress={() => { console.log('abaxai') }}>
                        <DataTable.Cell>Ice cream sanduiche</DataTable.Cell>
                        <DataTable.Cell>Kg</DataTable.Cell>
                    </DataTable.Row>

                </DataTable>
            </ScrollView>
            <FAB
                style={{
                    position: 'absolute',
                    margin: 16,
                    right: 0,
                    bottom: 0,
                }}
                small
                icon="plus"
                onPress={() => console.log('Pressed')}
            />
        </>
    );
}
