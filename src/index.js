import {createBottomTabNavigator, createAppContainer} from "react-navigation";

import Personagens from "./pages/Personagens";
import Profile from "./pages/Profile";

const MenuNavigator = createBottomTabNavigator (
    {
        Personagens,
        Profile
    },
    {
        swipeEnabled: true,
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            inactiveBackgroundColor: "dodgerblue",
            activeBackgroundColor: "blue",
            inactiveTintColor: "#FFFFFF",
            activeTintColor: "#FFFFFF",
            style: {
                height: 50
            }
        }
    }
)

export default createAppContainer(MenuNavigator);