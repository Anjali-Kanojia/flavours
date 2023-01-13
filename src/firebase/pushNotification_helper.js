import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    GetFCMToken()
  }
}


const GetFCMToken = async () =>{
    let fcmtoken= await AsyncStorage.getItem('fcmtoken')
    console.log('old fcmtoken ==========',fcmtoken);
    
    if (!fcmtoken){
        try {
            let fcmtoken = await messaging().getToken();
            if(fcmtoken){
                console.log('new fcmtoken',fcmtoken);
                await AsyncStorage.setItem('fcmtoken',fcmtoken)
            }
        } catch (error) {
            console.log('err in fcm token==', error);
        }
    }
}

export const NotificationListner = () =>{
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
        
      });
  
     
      messaging()
        .getInitialNotification()
        .then(remoteMessage => {
          if (remoteMessage) {
            console.log(
              'Notification caused app to open from quit state:',
              remoteMessage.notification,
            );
          }         
        });
        messaging().onMessage(async remoteMessage =>{
            console.log('notification 54 ====',remoteMessage);
        }) 
}