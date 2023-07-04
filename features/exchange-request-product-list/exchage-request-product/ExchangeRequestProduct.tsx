import { useCallback } from 'react';
import { TouchableOpacity, StyleSheet, useWindowDimensions, View } from 'react-native';
import { Image, Text } from "@rneui/themed"

interface ExchangeRequestProductProps {
    onPress: () => void,
    isSelected: boolean
}

const exchangeRequestProductStyle = StyleSheet.create({
  exchangeRequestProductContainer: {
    flex: 1, 
    alignItems: 'center',
    borderTopColor: '#e4dbde',
    borderTopWidth: 1,
    borderBottomColor: '#e4dbde',
    borderBottomWidth: 1,
    borderLeftColor: '#e4dbde',
    borderLeftWidth: 1,
    borderRightColor: '#e4dbde',
    borderRightWidth: 1,
    paddingBottom: 8
  },
  exchangeRequestProductIsSelectedContainer: {
    flex: 1, 
    alignItems: 'center',
    borderTopColor: 'red',
    borderTopWidth: 1,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    borderLeftColor: 'red',
    borderLeftWidth: 1,
    borderRightColor: 'red',
    borderRightWidth: 1,
    paddingBottom: 8
  },
  description: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  wishListContainer: {
    width: '100%',
    backgroundColor: '#ebebeb',
    paddingVertical: 8,
    paddingHorizontal: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  wishList: {
    fontSize: 13,
    color: '#000'
  },
  wishPeople: {
    fontSize: 13,
    color: '#000',
    fontWeight: '400'
  }
})

const ExchangeRequestProduct = ({ onPress, isSelected }: ExchangeRequestProductProps) => {

  const handleItemPress = useCallback(() => onPress(), [onPress])

  const { exchangeRequestProductContainer, exchangeRequestProductIsSelectedContainer, description, wishListContainer, wishList, wishPeople } = exchangeRequestProductStyle
  
  const window = useWindowDimensions();
  const screenWidth = window.width            // SafeAreaView에 의해 조정된 실제 화면 너비
  const imageWidth = screenWidth - 28;        // ListItem 기본 padding 14 => 14 * 2 = 28
  const imageHeight = imageWidth / 1.5756302  // =>> 이미지 원래 크기 750 / 476 = 1.5756302

  return (
    <TouchableOpacity onPress={ () => handleItemPress() }>
      <View style={ isSelected ? exchangeRequestProductIsSelectedContainer : exchangeRequestProductContainer }>
        <Image 
          source={ require('../../../assets/images/toaster.png') } 
          alt='toaster image'
          style={{ width: imageWidth, height: imageHeight }}
          resizeMode='cover'
        />
        <Text style={ description }>선물받아서 1번 사용한 새것 같은 브라운 토스트 기입니다. 기부할테니 빨리 가져가세요~~</Text>

        <View style={ wishListContainer }>
          <Text style={ wishList }>위시리스트: 믹서기, 블렌더, 착즙기</Text>
          <Text style={ wishPeople }>신청현황 10명</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ExchangeRequestProduct;
