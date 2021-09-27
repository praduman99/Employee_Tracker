import React, { useState } from 'react'
import { Text,View } from 'react-native'
import App_Inputfield from './src/uiComponents/commonComponents/App_Inputfield'

const App = () => {
  const [txt , setTxt] = useState("")
  return (
    <View>
      <App_Inputfield  _OnChange = {(e) => {setTxt(e)}} />
    <Text>{txt}</Text>
    </View>
  )
}

export default App
