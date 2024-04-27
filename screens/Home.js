import { View, Text } from 'react-native'
import React from 'react'

export const Home = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center" 
            }}
        >
            <User/>
            
        </View>
    )
}

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
            <View style={{flex:2}}></View>
            <View style={{flex:4}}></View>
            <View style={{flex:1}}></View>


        </View>

    );
};


