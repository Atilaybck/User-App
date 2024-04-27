import react from "react";
import { View } from "react-native";


export const User = () => {
    return (
        <View
            style={{
                width: "90%",
                height: 80,
                margin: 2,
                padding: 2,
                backgroundColor: "gray",
                flexDirection: "row",
            }}
        >
            <View style={{backgroundColor:"orange", flex:2}}></View>
            <View style={{backgroundColor:"green", flex:4}}></View>
            <View style={{backgroundColor:"blue", flex:1}}></View>


        </View>

    );
};