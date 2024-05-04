import React from "react";
import { View, FlatList } from "react-native";
import DATA from "./data.json";
import { User } from "./User";

export const UserList = () => {
    return (
        <View style={{ width: "90%" }}>
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <User />}
            />
        </View>
    );
}
