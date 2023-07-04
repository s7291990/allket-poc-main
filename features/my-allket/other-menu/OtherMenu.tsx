import { Button, Icon } from "@rneui/themed"
import { View, StyleSheet } from 'react-native';

const otherMenuStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonContainer: {
    width: '50%',
    height: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#ddd',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  button: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: '100%', 
    height: '100%', 
    paddingHorizontal: 40 
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500'
  },
  icon: { marginRight: 8 }
});

const OtherMenu = () => {

  const { container, buttonContainer, button, buttonText, icon } = otherMenuStyle
  return (
    <View style={ container }>
      {
        Array.from(Array(6)).map((_, idx) => (
          <View 
            key={ idx } 
            style={ [
              buttonContainer, 
              (idx + 1) % 2 === 0 && { borderRightWidth: 0 },
              idx >= 6 - 2 && { borderBottomWidth: 0 }
            ] }
          >
            <View style={ button }>
              <Icon name="cloud" type='font-awesome' style={ icon } />
              <Button type="clear" title='Save' titleStyle={ buttonText } />
            </View>
          </View>
        ))
      }
    </View>
  )
}

export default OtherMenu