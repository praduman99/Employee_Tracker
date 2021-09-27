import React from 'react'
import { TouchableWithoutFeedback, View, Text } from 'react-native'
import styled, { css } from 'styled-components'
const App_Button = ({Size , Bg_Color , Font_Size , title , _onPress}) => {
    const styleObj = {Size , Bg_Color , Font_Size}
    return (
        <View>
            <TouchableWithoutFeedback onPress={_onPress}>
                <BUTTON Style={styleObj} >
                    <Button_Text Style={styleObj}>{title}</Button_Text>
                </BUTTON>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default App_Button


const BUTTON = styled.View`
width: ${props => props.Style.Size};
background-color:${props => props.Style.Bg_Color ? props.Style.Bg_Color : '#9e0909'};
border-radius: 10px;

`
const Button_Text = styled.Text`
color: white;
text-align: center;
padding:10px 20px 10px 20px;
font-size: ${props => props.Style.Font_Size}px;


`