import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Config from 'react-native-config'
import { mainColor } from './config/final'
import CloudMessaging from './src/firebase/CloudMessaging'
import NetInfoCard from './src/NetInfo/netInfo'
import TabStack from './src/TabNavigation/tabNavigation'

// import Config from 'react-native-config';

const App = () => {
  const environment = Config.ENV
  const env = environment === 'qa'
  // console.log('-----ENV-----------',env,environment);
  const backgroundcolor = environment === 'prod' ? 'green' : mainColor.RED
  return (
    // <View style={{backgroundColor:backgroundcolor,justifyContent:'center',alignItems:'center',flex:1}}>
    //   {/* <Text>{environment}</Text> */}
    //   <Text style={{fontSize:30,fontWeight:'bold',color:'black'}}>{env ? 'QA' : environment === 'dev' ? 'DEV' : 'PROD'}</Text>
    // </View>
    // <CloudMessaging />
    // <NetInfoCard/>
    <TabStack/>
  )
}

export default App



const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black'
  },
  container: {
    flex: 2.5,
    backgroundColor: 'white',
    // marginTop:250,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderLeftWidth: 200,
    borderRightWidth: 200,
    borderBottomWidth: 150,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "red",
    position: 'relative'
    // borderRadius:20,
  },
})