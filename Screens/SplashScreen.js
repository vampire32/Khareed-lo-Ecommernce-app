import React,{useState,useEffect} from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Logo from'../assets/logo.png'
const SplashScreen = ({navigation}) => {
const [Appready, setAppready] = useState(false)

useEffect(() => {
  setTimeout(()=>{
    setAppready(true)
  },2000)
}, [])

useEffect(() => {
  if(Appready){
    navigation.navigate("LoginScreen")
  }
}, [Appready,navigation])


  return (
		<View style={styles.container}>
			<View style={{marginTop:"50%"}}>
				<View style={{ flexDirection: "row", justifyContent: "center" }}>
					<Image
						source={Logo}
						style={{
							width: 200,
							height: 200,
							justifyContent: "center",
							alignItems: "center",
						}}
					/>
				</View>

				<Text
					style={{
						color: "#fff",
						textAlign: "center",
						fontSize: 32,
						fontWeight: "bold",
					}}
				>
					Kahreed Lo
				</Text>
			</View>
		</View>
	);
}
const size=Dimensions.get("screen")
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#164B60",
		width: size.width,
		height: size.height,
        
	},
});
export default SplashScreen