import { useEffect, useRef, useState } from 'react';
import { View, Animated } from 'react-native';
import { Text } from "@rneui/themed"
import ExchangeRequestProduct from './exchage-request-product/ExchangeRequestProduct';
import ExchangeRequestButton from './exchange-request-button/ExchangeRequestButton';
import ExchangeRequestProductListHeader from './header/ExchangeRequestProductListHeader';

const ExchangeRequestProductList = () => {
  const [ selectedItems, setSelectedItems ] = useState<number[]>([]);

  const scrollY = useRef(new Animated.Value(0)).current;

  const buttonTranslateY = scrollY.interpolate({
    inputRange: [ 0, 1 ],
    outputRange: [ 0, 60 ],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    return () => scrollY.removeAllListeners();
  }, []);

  const handleItemPress = (itemId: number): void => {
    if (selectedItems.includes(itemId)) {
      // 이미 선택된 상품인 경우 선택 해제
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    } else {
      // 새로운 상품 선택
      setSelectedItems([ ...selectedItems, itemId ]);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ExchangeRequestProductListHeader />
      <Animated.ScrollView
        scrollEventThrottle={ 16 }
        onScroll={ Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY }}}],
          { useNativeDriver: true },
        ) } 
        style={{ flex: 1 }}
      >
        <Text style={{ fontSize: 13, color: '#000', paddingBottom: 8 }}> ➡️ 공유하실 자원을 선택하세요 (복수선택이 가능합니다.)</Text>
        {
          Array.from(Array(3)).map((_, idx) => <ExchangeRequestProduct key={ idx } onPress={ () => handleItemPress(idx) } isSelected={ selectedItems.includes(idx) } />)
        }
      </Animated.ScrollView>
      <ExchangeRequestButton animation={ buttonTranslateY } />
    </View>
  );
};

export default ExchangeRequestProductList;
