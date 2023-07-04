import { sendPushNotification } from "@features/common"
import useNotificationToken from "@features/common/notifications/store/notificaitonStore"
import { useNavigation } from "@react-navigation/native"
import { Button } from "@rneui/themed"
import { routeAndPath } from "config"
import { Animated, StyleSheet } from "react-native"

interface ExchangeRequestButtonProps {
  animation: Animated.AnimatedInterpolation<string | number>
}

const requestBtnStyle = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#49b13e',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 15, 
  }
})

const ExchangeRequestButton = ({ animation }: ExchangeRequestButtonProps) => {

  const { buttonContainer, buttonText } = requestBtnStyle

  const navigation = useNavigation();

  const notificationToken = useNotificationToken(state => state.notificationToken)

  return (
    <Animated.View style={ [ buttonContainer, { transform: [{ translateY: animation }]}] }>
      <Button 
        type='clear'
        title='확인' 
        titleStyle={ buttonText }
        onPress={ () => sendPushNotification(notificationToken, "교환신청이 왔습니다.", "물품 제목이 2줄까지 노출됩니다. 길어지면....으로 처리합니다.").then(() => navigation.navigate(routeAndPath.Home)) } 
      />
    </Animated.View>
  )
}

export default ExchangeRequestButton