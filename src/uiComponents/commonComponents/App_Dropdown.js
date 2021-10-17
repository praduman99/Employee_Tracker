import React, { useState } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components'
const App_Dropdown = () => {
    const [isopen, setisOpen] = useState(false)
    const [selectedValue, setSelectedValue] = useState("")
    const mock = [{ id: 1, item: "1" }, { id: 2, item: "2" }, { id: 3, item: "3" }, { id: 4, item: "4" }, { id: 5, item: "5" },]
    return (
        <Dropdown>
            <Selected_Value>
                <Text >{selectedValue}</Text>
                <TouchableWithoutFeedback onPress={() => { setisOpen(!isopen) }}>
                    <Text>^</Text>
                </TouchableWithoutFeedback>
            </Selected_Value>
            {isopen ?
                <Options>
                    {mock.map((item, index) => {
                        return (<TouchableWithoutFeedback key={index} onPress={()=>{setSelectedValue(item.item),setisOpen(!isopen)}}>
                           <Text>{item.item}</Text> </TouchableWithoutFeedback>)
                    })}
                </Options>
                : null}

        </Dropdown>
    )
}

export default App_Dropdown

const Dropdown = styled.View`
width: 60%;
min-width: 50%;

`
const Selected_Value = styled.View`
display: flex;
flex-direction: row;
border: solid  1px #eee;
justify-content: space-between;
padding: 10px;

`
const Options = styled.View`
border: solid  1px;
display: flex;
justify-content: center;
`