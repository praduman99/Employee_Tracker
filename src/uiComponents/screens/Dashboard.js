
import React from 'react'
import { View, Text, ScrollView, Image, Button } from 'react-native'
import styled from 'styled-components'
import App_Button from '../commonComponents/App_Button'
import App_Headerbar from '../commonComponents/App_Headerbar'
import App_Text from '../commonComponents/App_Text'

const Dashboard = () => {
    return (
        <ScrollView>
            <App_Headerbar />
            <DashboardContainer>
                <View style={{ display: "flex", flexDirection: 'row', justifyContent: "space-between" }}>
                    <Image style={{ height: 70, width: 70 }} source={{ uri: "https://www.imagediamond.com/blog/wp-content/uploads/2019/01/sad-pic-for-boys8.jpg" }} />
                    <View style={{ flexDirection: "column", paddingHorizontal: 5, marginTop: -5 }}>
                        <App_Text text={"Associate Software Developer"} Size={15} Weight={'100'} Color={'grey'} />
                        <App_Text text={"Amit prajapati"} Size={30} Weight={'700'} Color={'black'} />
                        <App_Text text={'Thursday 44/44/3453 4.56 pm'} Size={15} Weight={'100'} Color={'black'} />
                    </View>
                    <App_Button _onPress={()=>{console.log("hii")}} title={'Clock Out'} Font_Size={12} Size={'100%'} />
                </View>
                <View>
                <Income_detail>
                    <View>
                        <App_Text  text={"Income"} Size={25} Weight={'600'} Color={'black'} />
                    </View>
                    <Income_Text_Container>
                    <View>
                    <App_Text  text={"$"+"434"+" /mon"} Size={20} Weight={'600'} Color={'black'} />
                    </View>
                    <View>
                    <App_Text  text={"$"+" 43334"+" /yr"} Size={20} Weight={'600'} Color={'black'} />
                    </View>
                    </Income_Text_Container>
                    <View>
                        <App_Text  text={"Expense"} Size={25} Weight={'600'} Color={'black'} />
                    </View>
                    <Income_Text_Container>
                    <View>
                    <App_Text  text={"$"+"434"+" /mon"} Size={20} Weight={'600'} Color={'black'} />
                    </View>
                    <View>
                    <App_Text  text={"$"+" 43334"+" /yr"} Size={20} Weight={'600'} Color={'black'} />
                    </View>
                    </Income_Text_Container> 
                </Income_detail>
                </View>
                <Over_dues>
                    <View>
                    <App_Text  text={"Overdues"} Size={25} Weight={'700'} Color={'black'} />
                    </View>
                </Over_dues>
            </DashboardContainer>
        </ScrollView>
    )
}

export default Dashboard

const DashboardContainer = styled.View`
padding:5px ;

`
const Income_detail = styled.View`
background-color:#ebf5f7;
border-radius: 20px;
padding: 15px;
border: lightblue;
border-width: 5px;


`

const Over_dues=styled.View`

`

const Income_Text_Container=styled.View`

display:flex;
flex-direction: row;
justify-content: space-between;
padding: 15px 40px 15px 30px ;

`

