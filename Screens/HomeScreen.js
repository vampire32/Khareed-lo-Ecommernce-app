import React from 'react'
import { Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeTab from '../TabScreen/HomeTab';
import Cart from '../TabScreen/Cart';
import ProfileTab from '../TabScreen/ProfileTab';
import Setting from '../TabScreen/Setting';
const Tab = createMaterialBottomTabNavigator();
const HomeScreen = () => {
  return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={HomeTab}
				options={{
					tabBarLabel: "Home",
          headerShown: true ,
					tabBarIcon: () => (
						<MaterialCommunityIcons name="home" color="#164B60" size={26} />
					),
				}}
			/>
			<Tab.Screen
				name="Cart"
				component={Cart}
				options={{
					tabBarLabel: "Cart",
					tabBarIcon: () => (
						<MaterialCommunityIcons name="cart" color="#164B60" size={26} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileTab}
				options={{
					tabBarLabel: "Profile",
					tabBarIcon: () => (
						<MaterialCommunityIcons name="account" color="#164B60" size={26} />
					),
				}}
			/>
			<Tab.Screen
				name="Setting"
				component={Setting}
				options={{
					tabBarLabel: "Setting",
					tabBarIcon: () => (
						<MaterialCommunityIcons name="cog" color="#164B60" size={26} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default HomeScreen