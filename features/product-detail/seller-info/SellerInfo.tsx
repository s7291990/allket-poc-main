import { StyleSheet, View } from "react-native"
import { Button, Icon, Text } from '@rneui/themed';

const sellerInfoStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f6f6f6',
    flexDirection: 'row',
    alignItems: 'center'
  },
  locationContainer: { marginLeft: 6 },
  locationText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '400'
  },
  inquiryButtonContainer: { flex: 1 }, 
  inquiryButton: {
    borderRadius: 5,
    width: 80,
    height: 40,
    marginLeft: 'auto',
    justifyContent: 'center',
  }
})

const SellerInfo = () => {
  const { container, locationContainer, locationText, inquiryButtonContainer, inquiryButton } = sellerInfoStyle
  return (
    <View style={ container }>
      <Icon name='user' type='font-awesome' size={ 20 } raised />
      <View style={ locationContainer }>
        <Text style={ locationText }>당근이</Text>
        <Text style={ locationText }>경기도 고양시 일산동구 중산</Text>
      </View>

      <View style={ inquiryButtonContainer }>
        <Button color='#70177b' containerStyle={ inquiryButton } title='문의하기' titleStyle={{ fontSize: 14 }} />
      </View>
    </View>
  )
}

export default SellerInfo