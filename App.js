import React, { useState } from 'react'
import { Text,View } from 'react-native'
import App_Prompt from './src/uiComponents/commonComponents/App_Prompt'

const App = () => {
  const [txt , setTxt] = useState("")
  return (
    <View>
      <App_Prompt />
    </View>
  )
}

export default App
