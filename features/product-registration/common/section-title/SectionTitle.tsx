import { PropsWithChildren } from 'react'
import { Text } from '@rneui/themed'
import { StyleSheet } from 'react-native'

const sectionTitleStyle = StyleSheet.create({
  text: {
    color: '#49b13e', 
    fontSize: 18, 
    fontWeight: '600',
    marginBottom: 10
  }
})

const SectionTitle = ({ children }: PropsWithChildren) => {
  const style = sectionTitleStyle
  return <Text style={ style.text }>{ children }</Text> 
}

export default SectionTitle