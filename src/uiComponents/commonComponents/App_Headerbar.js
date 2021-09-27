import React from 'react'
import { View, Text ,Image} from 'react-native'
const App_Headerbar = () => {
    return (
        <View style={{ display: 'flex', justifyContent: 'space-between',flexDirection:'row',padding:10 }}>
            <View>
                <Image style=
                {{width:20,height:20}} source={require('../../assets/img/menu.png')}/>
            </View>
            <View style={{ display: 'flex', justifyContent: 'space-between',flexDirection:'row'}}>
            <Image style=
                {{width:40,height:20}} source={require('../../assets/img/Notification.png')}/>
            </View>
        </View>
    )
}

export default App_Headerbar
