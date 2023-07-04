import { Tab as RnTab } from '@rneui/themed';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const tabStyle = StyleSheet.create({
  indicator: {
    backgroundColor: '#49b13e',
    height: 2
  },
  selectedTabTitle: {
    fontSize: 13,
    color: '#2e2e2e',
    fontWeight: '400'
  },
  notSelectedTabTitle: {
    fontSize: 13,
    color: 'rgba(46,46,46,0.3)',
    fontWeight: '400'
  }
})

const Tab = () => {

  const { indicator, selectedTabTitle, notSelectedTabTitle } = tabStyle
  const [ index, setIndex ] = useState(0)

  return (
    <View>
      <RnTab value={ index } onChange={ e => setIndex(e) } indicatorStyle={ indicator }>
        <RnTab.Item title='최신순' titleStyle={ index === 0 ? selectedTabTitle : notSelectedTabTitle } />
        <RnTab.Item title='인기순' titleStyle={ index === 1 ? selectedTabTitle : notSelectedTabTitle } />
      </RnTab>
    </View>
  )
}

export default Tab