export async function sendPushNotification(token: string | undefined, title: string, message: string ) {
  const notificaitonBody = {
    to: token,
    sound: 'default',
    title: title,
    body: message,
    // data: { someData: 'goes here' },
  };
    /* 로그인 기능에 백엔드가 필요함 */
  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(notificaitonBody),
  });
  
  /* FCM 방식 */
  // const result = await fetch('https://fcm.googleapis.com/fcm/send', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `key=${ firbaseKey }`,
  //   },
  //   body: JSON.stringify({
  //     to: token,
  //     priority: 'normal',
  //     data: {
  //       experienceId: '@qoddn987/com-allcat',
  //       scopeKey: '@qoddn987/com-allcat',
  //       title: "📧 You've got mail",
  //       message: 'Hello world! 🌐',
  //     },
  //   }),
  // });
}