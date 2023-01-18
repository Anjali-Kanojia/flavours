import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'

const NetInfoCard = () => {
    useEffect(() => {
        // check the status subscribe to network state changes
        //   const unsubscribe = NetInfo.addEventListener(networkState => {
        //         console.log("Connection type - ", networkState.type);
        //         console.log("Is connected? - ", networkState.isConnected);
        //       });

        //       return () => {
        //         unsubscribe()
        //       }

        // to check active network state only once
        // mostly used
        NetInfo.fetch().then(networkState => {
            console.log("Connection type - ", networkState.type);
            console.log("Is connected? - ", networkState.isConnected);
        });
    }, [])
    return (
        <View>
            <Text>testing</Text>
            <Text style={{ lineHeight: 30 }}>Line height is for margin vertical between parallel lines</Text>
            <Text>testing</Text>
            <Text>testing</Text>
        </View>
    )
}

export default NetInfoCard

const styles = StyleSheet.create({

})
