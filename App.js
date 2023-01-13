import { View, Text } from 'react-native'
import React from 'react'
import Config from 'react-native-config'
import { mainColor } from './config/final'
import CloudMessaging from './src/firebase/CloudMessaging'

// import Config from 'react-native-config';

const App = () => {
  const environment = Config
  const env = environment === 'qa'
  // console.log('environment--' , environment,'-----ENV-----------',env);
  return (
    // <View style={{backgroundColor:mainColor.RED,justifyContent:'center',alignItems:'center',flex:1}}>
    //   {/* <Text>{environment}</Text> */}
    //   <Text>TESTING</Text>
    // </View>
    <CloudMessaging/>
  )
}

export default App