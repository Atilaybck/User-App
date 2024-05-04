import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./screens/Home";
import { Profile } from "./screens/Profile";
import { View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();


const Logo = () => {
    return (
        <View style={{ marginLeft: 12 }}>
            <Ionicons name="logo-amplify" size={35} color="black" />
        </View>
    )
}

export const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={Home}
                options={{
                    title: "User App",
                    headerLeft: () => <Logo />,
                    headerTitleStyle: {
                        fontSize: 25,
                    },
                }}
            />

            <Stack.Screen
                name="profile"
                component={Profile}
                options={{
                    title: "Profil"
                }}
            />

        </Stack.Navigator>
    )
}