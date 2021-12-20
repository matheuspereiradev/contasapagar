import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Surface } from 'react-native-paper';
import { style } from './style';

type Props = RectButtonProps & {
    title: string;
    icon?: string;
    pressButton: () => void;
}

export function LargeButton({ title, icon, pressButton, ...rest }: Props) {
    return (
        <Surface>
            <RectButton
                onPress={pressButton}
                style={style.container}
                {...rest}
            >
                <View style={style.iconWrapper}>
                    <FontAwesome5
                        name={icon}
                        size={24}
                        color={"white"}
                    />
                </View>

                <Text style={style.title}>
                    {title}
                </Text>
            </RectButton>
        </Surface>
    );
}