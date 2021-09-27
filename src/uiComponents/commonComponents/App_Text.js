import React from 'react'
import { View, Text } from 'react-native'
import styled, { css } from 'styled-components'
const App_Text = (props) => {
    return (
        <View>
            <TEXT Size={props?.Size} Color={props?.Color} Weight={props?.Weight} >{props?.text}</TEXT>
        </View>
    )
}

export default App_Text

const TEXT = styled.Text`
font-size: ${props => props?.Size}px;
color: ${props => props?.Color};
font-weight: ${props => props.Weight ? props.Weight : 100};

`