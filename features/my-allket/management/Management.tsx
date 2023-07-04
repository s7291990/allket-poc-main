import { Text, Image } from "@rneui/themed"
import { Fragment } from "react"
import { StyleSheet, View } from "react-native"

const managementStyle = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f1f1f1',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  innerContainer: { justifyContent: 'space-between', },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: '#ddd',
    alignSelf: 'center'
  },
  text: { 
    textAlign: 'center',
    marginTop: 20
  }
})

const Management = () => {
  const { container, innerContainer, divider, text } = managementStyle
  return (
    <View style={ container }>
      {
        Array.from(Array(3)).map(( _, idx ) => (
          <Fragment key={ idx } >
            <View style={ innerContainer }>
              <Image 
                source={ require('@assets/images/toaster.png') }  
                alt='toaster image'
                style={{ width: 100, height: 100 }}
                resizeMode='cover'
              />
              <Text style={ text }>유휴자원 관리</Text>
            </View>
            { idx !== 2 && <View style={ divider } /> }
          </Fragment>
        ))
      }
    </View>
  )
}

export default Management