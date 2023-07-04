import { useNavigation } from "@react-navigation/native";
import { Text, Icon } from "@rneui/themed";
import { GestureResponderEvent, StyleSheet, View } from "react-native"

export type Icon = {
  iconName: string,
  onPress?: (event: GestureResponderEvent) => void
}

interface headerWithBackButtonStyleProp { title: string, icons?: Icon[] }

const headerWithBackButtonStyle = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    height: 64,
    backgroundColor: 'white'
  },
  moveBackContainer: {
    flex: 1,
    alignItems: 'flex-start'
  },
  textContainer: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    color: '#49b13e',
    fontSize: 18,
    fontWeight: '400'
  },
  otherIconsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    columnGap: 10
  }
})

const HeaderWithBackButton = ({ title, icons = []}: headerWithBackButtonStyleProp) => {

  const { header, moveBackContainer, textContainer, text, otherIconsContainer } = headerWithBackButtonStyle
  const navigation = useNavigation();
  
  return (
    <View style={ header }>
      <View style={ moveBackContainer }>
        <Icon name='chevron-left' type='font-awesome' onPress={ () => navigation.goBack() } />
      </View>

      <View style={ textContainer }>
        <Text style={ text }>{ title }</Text>
      </View>

      <View style={ otherIconsContainer }>
        {
          icons.map(({ iconName, onPress }) => <Icon key={ iconName } name={ iconName } type='font-awesome' onPress={ onPress } /> )
        }
      </View>
    </View>
  )
}

export default HeaderWithBackButton