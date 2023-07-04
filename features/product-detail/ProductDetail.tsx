import { Animated, View } from "react-native"
import ProductDetailHeader from "./header/ProductDetailHeader"
import ProductImage from "./product-image/ProductImage"
import ExchangeCondition from "./exchange-condition/ExchangeCondition"
import SellerInfo from "./seller-info/SellerInfo"
import WishList from "./wish-list/WishList"
import ExchangeRequestButton from "./exchange-request-button/ExchangeRequestButton"
import { useRef, useEffect } from "react"

const ProductDetail = () => {

  const scrollY = useRef(new Animated.Value(0)).current;

  const buttonTranslateY = scrollY.interpolate({
    inputRange: [ 0, 1 ],
    outputRange: [ 0, 60 ],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    return () => scrollY.removeAllListeners();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ProductDetailHeader />
      <Animated.ScrollView 
        scrollEventThrottle={ 16 }
        onScroll={ Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY }}}],
          { useNativeDriver: true },
        ) }
        style={{ flex: 1 }}
      >
        <ProductImage />
        <ExchangeCondition />
        <SellerInfo />
        <WishList />
      </Animated.ScrollView>
      <ExchangeRequestButton animation={ buttonTranslateY } />
    </View>
  )
}

export default ProductDetail