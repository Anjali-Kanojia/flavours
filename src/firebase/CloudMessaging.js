import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NotificationListner, requestUserPermission } from './pushNotification_helper'

const CloudMessaging = () => {
    useEffect(() => {
        requestUserPermission();
        NotificationListner();
    }, [])
    return (
        <View>
            <Text>CloudMessaging</Text>
        </View>
    )
}

export default CloudMessaging

const styles = StyleSheet.create({})