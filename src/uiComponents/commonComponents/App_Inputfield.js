import React from 'react'
import styled from 'styled-components'
import { View, TextInput ,Text } from 'react-native'
const App_Inputfield = ({_OnChange}) => {
    return (
        <InputContainer>
            <InputField placeholder="hii" onChangeText={_OnChange} />
        </InputContainer>
    )
}

export default App_Inputfield
const InputContainer = styled.View`
padding: 5px;
`
const InputField = styled.TextInput`
border: solid 3px violet;
padding:0px 10px 0px 10px;
border-radius: 5;
width: 50%;
`


