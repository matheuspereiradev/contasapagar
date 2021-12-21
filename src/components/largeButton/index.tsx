import { LightenDarkenColor } from 'lighten-darken-color';
import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Avatar, Surface } from 'react-native-paper';
import { colors } from '../../values/colors';
import { style } from './style';

type Props = RectButtonProps & {
    title: string;
    icon?: string;
    color?: string;
    pressButton: () => void;
}

export function LargeButton({ title, icon, color, pressButton, ...rest }: Props) {
    return (
        <Surface>
            <RectButton
                onPress={pressButton}
                style={[style.container, {
                    backgroundColor: color || colors.blue50,
                }]}
                {...rest}
            >
                <View style={style.iconWrapper}>
                    <Avatar.Icon size={50} icon={icon || 'account'} color="white" style={{ backgroundColor: LightenDarkenColor(color || colors.blue50, 20) }} />
                </View>

                <Text style={style.title}>
                    {title}
                </Text>
            </RectButton>
        </Surface>
    );
}