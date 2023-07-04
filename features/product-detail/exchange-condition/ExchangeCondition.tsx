import { Card, Text } from '@rneui/themed'
import { StyleSheet, View } from 'react-native'

const exchangeConditionStyle = StyleSheet.create({
  container: { padding: 20 },
  description: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000'
  },
  conditionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    columnGap: 4
  },
  condition: { 
    margin: 0,
    flexBasis: '24%'
  },
  conditionTitle: {
    fontSize: 12,
    color: '#777'
  },
  conditionContent: { 
    color: '#68af4f', 
    fontSize: 13, 
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: -0.5
  }
})

const ExchangeCondition = () => {

  const { container, description, conditionContainer, condition, conditionTitle, conditionContent } = exchangeConditionStyle

  return (
    <View style={ container }>
      <View>
        <Text style={ description }>선물받아서 1번 사용한 새것 같은 브라운 토스트 기입니다. 믹서기나 착즙기, 블렌더...</Text>
      </View>

      <View style={ conditionContainer }>
        <Card containerStyle={ condition }>
          <Card.Title style={ conditionTitle }>공유방법</Card.Title>
          <Card.Divider />
          <Text style={ conditionContent }>물물교환</Text>
        </Card>

        <Card containerStyle={ condition }>
          <Card.Title style={ conditionTitle }>공유수단</Card.Title>
          <Card.Divider />
          <Text style={ conditionContent }>직접 공유</Text>
        </Card>

        <Card containerStyle={ condition }>
          <Card.Title style={ conditionTitle }>공유거리</Card.Title>
          <Card.Divider />
          <Text style={ conditionContent }>집근처(3km이내)</Text>
        </Card>

        <Card containerStyle={ condition }>
          <Card.Title style={ conditionTitle }>공유기간</Card.Title>
          <Card.Divider />
          <Text style={ conditionContent }>3일 12시간 남음</Text>
        </Card>
      </View>
    </View>
  )
}

export default ExchangeCondition