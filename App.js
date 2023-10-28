import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './Screens/SplashScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import HomeScreen from './Screens/HomeScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Splash Screen"
					component={SplashScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="LoginScreen"
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="RegistrationScreen"
					component={RegistrationScreen}
					options={{ headerShown: false, }}
				/>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
