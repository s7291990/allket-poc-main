import { Dispatch, SetStateAction } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { ListItem, Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { routeAndName } from '../../../../config';

interface MenuProps { setIsVisible: Dispatch<SetStateAction<boolean>> }

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const menuStyle = StyleSheet.create({
  layout: {
    zIndex: 99,
    height: screenHeight - 84,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'absolute',
    top: 84,
    left: 0
  },
  buttonContainer: { padding: 0 },
  button: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopColor: '#e0e0e0',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderBottomColor: '#fff',
    height: 50,
    backgroundColor: '#fff',
    width: screenWidth,
    justifyContent: 'flex-start'
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    color: '#000'
  }
})

const Menu = ({ setIsVisible }: MenuProps) => {

  const { layout, buttonContainer, button, title } = menuStyle
  const { navigate } = useNavigation();

  const routeList = Object.entries(routeAndName).map(([ key, value ]) => ({ path: key, name: value }));

  const clickMenu = (path: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    navigate(path)
    setIsVisible(false)
  }
  
  return (
    <View style={ layout }>
      {
        routeList.map(route => (
          <ListItem key={ route.path } containerStyle={ buttonContainer }>
            <ListItem.Content>
              <Button 
                size='lg'
                type='clear'
                radius={ 0 }
                title={ route.name } 
                buttonStyle={ button }
                titleStyle={ title }
                onPress={ () => clickMenu(route.path) }
              />
            </ListItem.Content>
          </ListItem>
        ))
      }
    </View>
  )
}

export default Menu