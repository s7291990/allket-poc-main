import { Text } from "@rneui/themed"
import { StyleSheet, View } from "react-native"
import WishItem from "./wish-item/WishItem"

const wishListStyle = StyleSheet.create({
  container: { marginTop: 20 },
  titleContainer: {
    backgroundColor: '#f1f1f1',
    padding: 20,
    borderTopColor: '#ddd',
    borderBottomColor: '#ddd',
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000'
  }
})

const WishList = () => {
  const { container, titleContainer, title } = wishListStyle
  return (
    <View style={ container }>
      <View style={ titleContainer }>
        <Text style={ title }>위시리스트</Text>
      </View>
      
      {
        Array.from(Array(3)).map((_, idx) => <WishItem key={ idx } />)
      }
    </View>
  )
}

export default WishList