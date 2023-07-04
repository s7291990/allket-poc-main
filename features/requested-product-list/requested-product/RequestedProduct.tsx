import { View, StyleSheet, useWindowDimensions } from "react-native";
import { ListItem, Image, Text, Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { routeAndPath } from "config";
import { sendPushNotification } from "@features/common";
import useNotificationToken from "@features/common/notifications/store/notificaitonStore";

const requestedProductStyle = StyleSheet.create({
  requestedProductContainer: {
    flex: 1,
    alignItems: "center"
  },
  productContainer: {
    flex: 1,
    flexDirection: "row"
  },
  description: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
    color: "#000",
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  customerInfo: { 
    flex: 1,
    fontSize: 10,
    paddingHorizontal: 16,
    paddingVertical: 4
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: '#d3d3d3',
    marginTop: 4
  },
  buttonText: {
    color: 'black',
    fontSize: 15
  }
});

const RequestedProduct = () => {
  const {
    requestedProductContainer,
    productContainer,
    description,
    customerInfo,
    buttonContainer,
    buttonText
  } = requestedProductStyle;
  const notificationToken = useNotificationToken(state => state.notificationToken)
  
  const navigation = useNavigation();

  const window = useWindowDimensions();
  const screenWidth = window.width; // SafeAreaView에 의해 조정된 실제 화면 너비
  const imageHeightAndWidth = screenWidth / 2 - 28; // 가로 너비 / 2 - ListItem 기본 padding 14 => 14 * 2 = 28

  return (
    <ListItem>
      <ListItem.Content style={ requestedProductContainer }>
        <View style={ productContainer }>
          <Image
            source={ require("../../../assets/images/toaster.png") }
            alt="toaster image"
            style={{ width: imageHeightAndWidth, height: imageHeightAndWidth }}
            resizeMode="cover"
          />
          <View style={{ flex: 1 }}>
            <Text style={ description }>
              1번 사용한 새것같은 믹서기를 토스트기와 교환 원합니다.
            </Text>
            <Text style={ customerInfo }>
              닉네임 { "\n" }
              경기도 고양시 일산동구 중산동 { "\n" }
              신청일: YYYY-MM-DD
            </Text>
          </View>
        </View>
        <View style={ buttonContainer }>
          <Button
            title="승인"
            titleStyle={ buttonText }
            type='clear'
            onPress={ () => sendPushNotification(notificationToken, "요청하신 [카테고리]에 대한", "물물교환(무료나눔) 신청이 승인(매칭) 되었어요!").then(() => navigation.navigate(routeAndPath.Home)) }
          />
        </View>
      </ListItem.Content>
    </ListItem>
  );
};

export default RequestedProduct;
