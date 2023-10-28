import React,{useState} from 'react'
import {
	Image,
	Text,
	TextInput,
	View,
	Dimensions,
	Pressable,
	ActivityIndicator,
} from "react-native";
import Logo from "../assets/logo.png"
const size = Dimensions.get("window");
const RegistrationScreen = ({navigation}) => {
	const [name, setname] = useState("")
	const [email, setemail] = useState("")
	const [number, setnumber] = useState("")
	const [password, setpassword] = useState("")
	const [Alert, setAlert] = useState(false);
	const [Token, setToken] = useState("")

	const handleSubmit = async () => {
		
		
		try {
			const response = await fetch(
				"http://192.168.100.247:1337/api/auth/local/register",
				{
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						username: name,
						email: email,
						password: password,
						Phonenumber: number,
					}),
					method: "POST",
				}
			);
			setAlert(true);
			setTimeout(() => {
				<View>
					<ActivityIndicator size="large" />;
				</View>;
				
				
			}, 3000);

			setToken(response);
			navigation.navigate("LoginScreen");
		} catch (error) {
			console.error(error);
			alert(error)
		}
	};
	const handleChangeName = (name) => {
		setname(name)
		
	};
	const handleChangeemail = (email) => {
		setemail(email);
	};
	const handleChangenumber = (number) => {
		setnumber(number);
	};
	const handleChangepassword = (password) => {
		setpassword(password);
	};
	
  return (
		<View style={{ flex: 1, backgroundColor: "white" }}>
			<View
				style={{
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					marginTop: "40%",
				}}
			>
				<Image source={Logo} style={{ width: 100, height: 100 }} />
				<Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 5 }}>
					Khareed Lo
				</Text>
			</View>
			<Text
				style={{
					marginLeft: 10,
					marginTop: 25,
					fontSize: 20,
					fontWeight: "bold",
				}}
			>
				Fullname
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
				placeholder="Full Name"
				placeholderTextColor="#003f5c"
				name="username"
				onChangeText={handleChangeName}
			/>
			<Text
				style={{
					marginLeft: 10,
					marginTop: 5,
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
				name="email"
				onChangeText={handleChangeemail}
			/>
			<Text
				style={{
					marginLeft: 10,
					marginTop: 5,
					fontSize: 20,
					fontWeight: "bold",
				}}
			>
				Phone Number
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
				placeholder="Phone Number"
				placeholderTextColor="#003f5c"
				keyboardType="phone-pad"
				name="number"
				onChangeText={handleChangenumber}
			/>
			<Text
				style={{
					marginLeft: 10,
					marginTop: 5,
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
				name="password"
				onChangeText={handleChangepassword}
			/>
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
					onPress={() => {
						handleSubmit();
					}}
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
						Sign up
					</Text>
				</Pressable>
			</View>
		</View>
	);
}

export default RegistrationScreen