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
  
  return (
    <Animated.View style={ [ buttonContainer, { transform: [{ translateY: animation }]}] }>
      <Button 
        type='clear'
        title='신청하기' 
        titleStyle={ buttonText }
        onPress={ () => navigation.navigate(routeAndPath.ExchangeRequestProductList) } 
      />
    </Animated.View>
  )
}

export default ExchangeRequestButton