import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout(){
    return(
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: "blue",
                    },
                    tabBarLabel: "Home",
                    tabBarLabelStyle: {
                        fontSize: 12,
                    },
                    tabBarLabelPosition: "below-icon",
                    tabBarIcon: ({color}) => <FontAwesome
                        size={24}
                        name= "home"
                        color= {color}
                    />
                }}
            />
            <Tabs.Screen
                name="Profile"
                options={{
                    title: "Profile",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: "blue",
                    },
                    tabBarLabel: "Profile",
                    tabBarLabelStyle: {
                        fontSize: 12,
                    },
                    tabBarLabelPosition: "below-icon",
                    tabBarIcon: ({color}) => <FontAwesome
                        size={24}
                        name= "user"
                        color= {color}
                    />
                }}
            />
        </Tabs>
    )
}