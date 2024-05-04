import { View, Image } from "react-native"

export const User = () => {
    return (
        <View style={{
            width: "90%",
            margin: 2,
            padding: 2,
            backgroundColor: "gray",
            height: 80,
            flexDirection: "row"
        }}>
            <View style={{flex:2}}></View>
            <View style={{flex:4}}><Text>Atılay</Text></View>
            <View style={{flex:1}}></View>


        </View>
    )
}