import { View, StyleSheet } from 'react-native'
import { Text, LinearProgress } from "@rneui/themed"

const remainPeriodStyle = StyleSheet.create({
  progressBar: {
    borderRadius: 3,
    height: 5,
    marginVertical: 10,
    width: '90%'
  },
  remainPeriodContainer: {
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    paddingRight: 8
  },
  exchangeAvailablePeriod: { fontSize: 13, color: '#5e5e5e', marginRight: 10 },
  exchangeAvailablePeriodValue: { fontSize: 13, color: '#49b13e', fontWeight: '400' }
})

const ExchangeAvailablePeriod = () => {

  const { progressBar, exchangeAvailablePeriod, exchangeAvailablePeriodValue } = remainPeriodStyle

  return (
    <>
      <LinearProgress variant='determinate' value={ 0.5 } color='#2fcc95' trackColor='#f0f0f0' style={ progressBar } />

      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 8 }}>
        <Text style={ exchangeAvailablePeriod }>신청가능기간</Text>
        <Text style={ exchangeAvailablePeriodValue }>2023년 5월 1일</Text>
      </View>
    </>
  )
}

export default ExchangeAvailablePeriod