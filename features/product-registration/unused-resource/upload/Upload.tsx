import { Button, Icon, Input, Text } from "@rneui/themed"
import { View, StyleSheet } from "react-native"

const uploadStyle = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    columnGap: 10,
    marginTop: -10,
    marginBottom: 10
  },
  buttonContainer: {
    flex: 1, 
    borderTopColor: '#e0e0e0', 
    borderTopWidth: 1,
    borderBottomColor: '#e0e0e0', 
    borderBottomWidth: 1,
    borderLeftColor: '#e0e0e0', 
    borderLeftWidth: 1,
    borderRightColor: '#e0e0e0', 
    borderRightWidth: 1,
    height: 70,
    justifyContent: 'center'
  },
  button: { backgroundColor: 'white' },
  description: { color: '#555' },
  youtubeAddrssContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop: 10,
    columnGap: 10
  },
  youtubeAddressInputContainer: { 
    flex: 1, 
    paddingHorizontal: 0 
  },
  youtubeAddressInput: {
    borderBottomColor: '#d5d5d5',
    borderBottomWidth: 1,
    borderTopColor: '#d5d5d5',
    borderTopWidth: 1,
    borderLeftColor: '#d5d5d5',
    borderLeftWidth: 1,
    borderRightColor: '#d5d5d5',
    borderRightWidth: 1,
    paddingHorizontal: 10
  }
})

const Upload = () => {
  const { 
    container, buttonContainer, button, description, 
    youtubeAddrssContainer, youtubeAddressInput, youtubeAddressInputContainer 
  } = uploadStyle

  return (
    <>
      <View style={ container }>
        <Button containerStyle={ buttonContainer } buttonStyle={ button }>
          <View style={{ alignItems: 'center', rowGap: 6 }}>
            <Icon name='camera' type='font-awesome' color='#a0a0a0' iconStyle={{ fontSize: 30 }} />
            <Text style={{ color: '#a0a0a0' }}>0/10</Text>
          </View>
        </Button>

        <Button containerStyle={ buttonContainer } buttonStyle={ button }>
          <Icon name='youtube-play' type='font-awesome' iconStyle={{ fontSize: 40 }} />
        </Button>
      </View>

      <Text style={ description }>- 사진은 최소 1개, 최대 10개까지 등록 가능합니다.</Text>
      <Text style={ description }>- 동영상은 유튜브 영상만 등록 가능하며, url을 1개만 등록하실 수 있습니다.</Text>

      <View style={ youtubeAddrssContainer }>
        <Input 
          placeholder="유튜브 주소를 등록하세요."
          containerStyle={ youtubeAddressInputContainer } 
          inputContainerStyle={{ borderBottomWidth: 0 }} 
          inputStyle={ youtubeAddressInput }
        />
        <Icon name='youtube-play' type='font-awesome' />
      </View>
    </>
  )
}

export default Upload