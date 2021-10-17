import React from 'react'
import styled from 'styled-components'
import { View, TextInput ,Text } from 'react-native'
const App_Inputfield = ({_OnChange}) => {
    return (
        <InputContainer>
            <InputField placeholder="Enter text "  onChangeText={_OnChange} />
           
        </InputContainer>
    )
}

export default App_Inputfield
const InputContainer = styled.View`
padding: 5px ;
display: flex;
flex-direction: row;
justify-content: center;
border: solid 2px violet;

`
const InputField = styled.TextInput`
border: solid 2px violet;
padding:0px 10px 0px 10px;
border-radius: 5px;
width: 50%;
::placeholder{
color: red;
}
`


