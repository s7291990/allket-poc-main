import { Input } from "@rneui/themed";
import { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet } from 'react-native'
import Upload from "./upload/Upload";

const unusedResourceStyle = StyleSheet.create({ 
  container: { marginTop: 10, paddingHorizontal: 0 },
  titleContainerStyle: { borderBottomWidth: 0 },
  title: {
    borderBottomColor: '#d5d5d5',
    borderBottomWidth: 1,
    borderTopColor: '#d5d5d5',
    borderTopWidth: 1,
    borderLeftColor: '#d5d5d5',
    borderLeftWidth: 1,
    borderRightColor: '#d5d5d5',
    borderRightWidth: 1,
    paddingLeft: 10
  },
  description: { 
    paddingRight: 10,
    paddingBottom: 5,
    minHeight: 200 
  },
  uploadContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  }
})

const UnusedResource = () => {

  const { container, titleContainerStyle, title, description } = unusedResourceStyle
  const [ isOpen, setIsOpen ] = useState(false);
  const [ value, setValue ] = useState('')

  const [ options, setOptions ] = useState([
    { label: '전체', value: '' },
    { label: 'AA', value: 'AA ' }
  ])
  
  return (
    <>
      <DropDownPicker 
        open={ isOpen }
        value={ value }
        items={ options }
        setOpen={ setIsOpen }
        setValue={ setValue }
        setItems={ setOptions }
        multiple={ false }
        listMode="SCROLLVIEW"
        zIndex={ 3000 }
        zIndexInverse={ 1000 }
      />

      <Input
        placeholder="제목을 등록하세요." 
        containerStyle={ container }
        inputStyle={ title }
        inputContainerStyle={ titleContainerStyle }
      />

      <Input
        placeholder="*물품 정보를 작성해 주세요. (업체 홍보나 판매금지 품목은 게시가 제한됩니다.)" 
        containerStyle={{ ...container, marginTop: -10 }}
        inputStyle={{ ...title, ...description }}
        inputContainerStyle={ titleContainerStyle }
        maxLength={ 3000 }
        multiline
        blurOnSubmit={ true }
      />

      <Upload />
    </>
  )
}

export default UnusedResource