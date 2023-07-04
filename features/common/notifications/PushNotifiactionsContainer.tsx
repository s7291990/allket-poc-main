import { useEffect, useRef, ReactNode } from 'react';
import { Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import useNotificationToken from './store/notificaitonStore';

interface Props {
  children: ReactNode
}

// const firbaseKey = "AAAA_tErRoU:APA91bHXjuvObzSHD3wNK9GzwPBMH-6XhJsQMgntfjr-F-uVcMucypl09pFq6O4YoUepsjyz22qCsFf8MBH1nXt1mArLBPtxm2qZsKL1HxdcjfNxz1wCUWf5oFs4oTe1PxaMsG4PMi0s"
const projectId = "f5ec67bc-2224-40c3-a42c-49884041bbe7"

Notifications.setNotificationHandler({
  handleNotification: async () => new Promise(resolve =>
    resolve({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    })
  ),
});


async function registerForPushNotificationsAsync() {
  let token = '';
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('푸쉬 알림에 대한 권한이 없습니다.');
      return '';
    }
    token = (await Notifications.getExpoPushTokenAsync({ projectId: projectId })).data;
    /* FCM 방식 */
    // token = (await Notifications.getDevicePushTokenAsync()).data as string;
    console.log("token: ", token);
  } else {
    alert('기기에서만 정상 작동합니다.');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [ 0, 250, 250, 250 ],
      lightColor: '#FF231F7C',
    });
  }

  //setting notificaitonToken

  return token;
}

function PushNotificationContainer({ children }: Props) {
  // const [ notification, setNotification ] = useState<Notifications.Notification>();
  const setNotificationToken = useNotificationToken(state => state.setNotificationToken)

  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    //token 생성 후 백엔드에 저장
    registerForPushNotificationsAsync().then(token => setNotificationToken(token));
    /* 알림톡을 보냈을 때 작동하는 Listener */
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log('request: ', notification);
    });
    /* 받은 알림톡을 클릭 했을 때 작동하는 Listener */
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log("response: ", response);
    });

    return () => {
      if (typeof notificationListener.current !== 'undefined' && typeof responseListener.current !== 'undefined') {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  return (
    <>
      { children }
    </>
  );
}

export default PushNotificationContainer