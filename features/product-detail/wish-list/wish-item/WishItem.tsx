import { Text } from "@rneui/themed"
import { StyleSheet, View } from "react-native"

const wishItemStyle = StyleSheet.create({
  container: {
    padding: 20,
    borderTopColor: '#ddd',
    borderTopWidth: 1
  },
  category: {
    color: '#49b13e',
    fontSize: 16
  },
  description: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '300',
    color: '#000'
  }
})

const WishItem = () => {
  const { container, category, description } = wishItemStyle
  return (
    <View style={ container }>
      <Text style={ category }>{ '1. 가전 > 주방용품 > 믹서기' }</Text>
      <Text numberOfLines={ 2 } ellipsizeMode="tail" style={ description }>
        초고속블렌더 2,000ML+분쇄기 600ML를&nbsp;
        하나로 사용할수 있는 제품 입니다.&nbsp;
        유리바디와 스테인리스 바디로 위생적이고&nbsp;
        오래오래 사용 가능하세요!!^^&nbsp;
        ☝️2in1 믹서기와 분쇄기 더블액션&nbsp;
        ☝️800w초강력모터, 30,000RPM초고속 블랜더&nbsp;
        ☝️냄새 색깔배임N0(위생적인 유리 믹서용기)&nbsp;
        ☝️스크레치걱정 No(스테인리스 분쇄용기)&nbsp;
        ☝️믹서기&분쇄기 All스테인리스 칼날&nbsp;
        ☝️초간편작동(3단계 다이얼방식)
      </Text>
    </View>
  )
}

export default WishItem