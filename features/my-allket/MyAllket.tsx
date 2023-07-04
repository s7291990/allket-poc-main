import { View } from "react-native"
import MyAllketHeader from "./header/MyAllketHeader"
import MyImage from "./my-image/MyImage"
import Management from "./management/Management"
import OtherMenu from "./other-menu/OtherMenu"

const MyAllket = () => {
  return (
    <View style={{ flex: 1 }}>
      <MyAllketHeader />
      <MyImage />
      <Management />
      <OtherMenu />
    </View>
  )
}

export default MyAllket