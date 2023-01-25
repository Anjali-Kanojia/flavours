import * as React from 'react';
import { Text, View } from 'react-native';


export function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink' }}>
            <Text>Home Screen!</Text>
        </View>
    );
}

export function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
            <Text>Settings Screen!</Text>
        </View>
    );
}

export function ContactScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
            <Text>Contact Screen!</Text>
        </View>
    );
}

