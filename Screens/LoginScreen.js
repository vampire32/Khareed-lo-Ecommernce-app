import React,{useState} from 'react'
import { Image, Text, View,Dimensions, StyleSheet, TextInput, Pressable,ActivityIndicator } from 'react-native'
import Bg from "../assets/logobg.jpg"
const size = Dimensions.get("window");
const LoginScreen = ({navigation}) => {
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");

	const handleSubmit = async () => {
		try {
			const response = await fetch(
				"http://192.168.100.247:1337/api/auth/local",
				{
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						identifier: email,
						password: password,
					}),
					method: "POST",
				}
			);
			
			setTimeout(() => {
				<View>
					<ActivityIndicator size="large" />;
				</View>;
			}, 3000);

			
			navigation.navigate("Home");
		} catch (error) {
			console.error(error);
			alert(error);
		}
	};
	const handleChangeemail = (email) => {
		setemail(email);
	};
	const handleChangenumber = (password) => {
		setpassword(password);
	};
  return (
		<View style={{ flex: 1 }}>
			{/* <Text style={{fontSize:32,fontWeight:"bold",marginLeft:10}}>Welcome to Khareed Lo</Text> */}

			<Image
				source={Bg}
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					width: "100%",
					height: size.height,
				}}
			/>
			<View style={styles.overlay}>
				<Text
					style={{
						marginTop: "10%",
						fontSize: 32,
						marginLeft: 20,
						fontWeight: "bold",
					}}
				>
					Sign in
				</Text>
				<Text
					style={{
						marginLeft: 10,
						marginTop: 25,
						fontSize: 20,
						fontWeight: "bold",
					}}
				>
					Email
				</Text>
				<TextInput
					style={{
						height: 50,
						color: "black",
						borderColor: "black",
						borderStyle: "solid",
						borderWidth: 1,
						borderRadius: 8,
						width: size.width / 1.05,
						marginLeft: 8,
						paddingLeft: 10,
						marginTop: 5,
						elevation: 2,
					}}
					placeholder="Email"
					placeholderTextColor="#003f5c"
					keyboardType="email-address"
					onChangeText={handleChangeemail}
				/>
				<Text
					style={{
						marginLeft: 10,
						marginTop: 15,
						fontSize: 20,
						fontWeight: "bold",
					}}
				>
					Password
				</Text>
				<TextInput
					style={{
						height: 50,
						color: "black",
						borderColor: "black",
						borderStyle: "solid",
						borderWidth: 1,
						borderRadius: 8,
						width: size.width / 1.05,
						marginLeft: 8,
						paddingLeft: 10,
						marginTop: 5,
						elevation: 2,
					}}
					placeholder="Password"
					placeholderTextColor="#003f5c"
					secureTextEntry={true}
					onChangeText={handleChangenumber}
				/>
				<Pressable>
					<Text style={{ marginLeft: 10, marginTop: 3 }}>Forget Password</Text>
				</Pressable>
				<View style={{ flexDirection: "column", alignItems: "center" }}>
					<Pressable
						style={{
							marginTop: 20,
							backgroundColor: "#164B60",
							width: size.width / 2,
							paddingTop: 10,
							paddingBottom: 10,
							borderRadius: 10,
						}}
						onPress={handleSubmit}
					>
						<Text
							style={{
								textAlign: "center",
								color: "white",
								fontSize: 16,
								fontWeight: "bold",
							}}
						>
							{" "}
							Sign in
						</Text>
					</Pressable>
					<Pressable
						style={{ marginTop: 5 }}
						onPress={() => {
							navigation.navigate("RegistrationScreen");
						}}
					>
						<Text>Create a account ?</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
}
const styles=StyleSheet.create({
    overlay:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor:"#ffff",
        marginTop:size.height-400,
        borderRadius:30
    }
})

export default LoginScreen