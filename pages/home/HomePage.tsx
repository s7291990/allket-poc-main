import { CommonHeader } from '@features/common/header';
import { Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomePage = () => {
  return (
    <SafeAreaView>
      <CommonHeader />
      <Text>Home Page</Text>
    </SafeAreaView>
  )
}

export default HomePage