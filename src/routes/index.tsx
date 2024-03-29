import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../values/colors';
import { Home } from '../screens/home';
const { Navigator, Screen } = createStackNavigator();
export function Routes() {

    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <NavigationContainer>
                <Navigator
                    screenOptions={{
                        cardStyle: {
                            backgroundColor: colors.backgroundPrimary
                        }
                    }}
                >
                    <Screen
                        name="Home"
                        component={Home}
                        options={{
                            headerTitle: 'Menu',
                            headerTintColor: colors.textOutlineInput
                        }}
                    />
                </Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}
