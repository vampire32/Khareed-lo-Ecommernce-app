import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { Appbar } from 'react-native-paper'
import ads from "../assets/adss.png"
import shirt from "../assets/shirt.png"
import shoes from "../assets/shoes.png"
import { Avatar, Button, Card } from "react-native-paper";
import womenclothes from "../assets/womenclothes.png"
import womenshoes from "../assets/womeshoes.png"

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const HomeTab = () => {
  return (
		<>
			<Appbar.Header style={{ backgroundColor: "#164B60" }}>
				<Appbar.Content title="Home" color="#fff" />
				<Appbar.Action icon="magnify" color="#fff" />
			</Appbar.Header>
			<ScrollView>
				<View style={{ flexDirection: "row", justifyContent: "center" }}>
					<Image
						source={ads}
						style={{
							width: "90%",
							height: "900%",
							marginTop: "5%",
							borderRadius: 10,
						}}
					/>
				</View>
				<View style={{ flex: 1, marginTop: "50%" }}>
					<Text
						style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}
					>
						Top Categories
					</Text>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-around",
							marginTop: 10,
						}}
					>
						<View style={{ flexDirection: "column", alignItems: "center" }}>
							<Image source={shirt} style={{ width: 56, height: 56 }} />
							<Text>Men CLothes</Text>
						</View>

						<View style={{ flexDirection: "column", alignItems: "center" }}>
							<Image source={womenclothes} style={{ width: 56, height: 56 }} />
							<Text>Women CLothes</Text>
						</View>
						<View style={{ flexDirection: "column", alignItems: "center" }}>
							<Image source={shoes} style={{ width: 56, height: 56 }} />
							<Text>Men Shoes</Text>
						</View>
						<View style={{ flexDirection: "column", alignItems: "center" }}>
							<Image source={womenshoes} style={{ width: 56, height: 56 }} />
							<Text>women Shoes</Text>
						</View>
					</View>
					<Text
						style={{
							marginTop: 40,
							marginLeft: 10,
							fontSize: 18,
							fontWeight: "bold",
						}}
					>
						Top Trending ⚡
					</Text>
					<ScrollView horizontal={true}>
						<View
							style={{ flexDirection: "row", justifyContent: "space-around" }}
						>
							<Card style={{ marginTop: 15, width: "49%" }} mode="outlined">
								<Card.Cover
									source={{
										uri: "https://www.stoneharbor.com.pk/cdn/shop/products/stone-harbor-t-shirts-men-s-premium-popcorn-polo-33732410900533_5000x.png?v=1680523282",
									}}
								/>
								<Card.Title
									title="Polo T-Shirt"
									subtitle="Men Clothes"
									titleVariant="bodyLarge"
									titleStyle={{ fontWeight: "bold" }}
								/>

								<Card.Actions>
									<Button>Add Cart</Button>
									<Button>Buy Now</Button>
								</Card.Actions>
							</Card>
							<Card style={{ marginTop: 15, width: "49%" }} mode="outlined">
								<Card.Cover
									source={{
										uri: "https://www.stoneharbor.com.pk/cdn/shop/products/stone-harbor-men-s-sweatshirt-men-s-contrasting-fleece-hoodie-33217356693557_2000x.png?v=1670312067",
									}}
								/>
								<Card.Title
									title="Hoodie"
									subtitle="Men Clothes"
									titleVariant="bodyLarge"
									titleStyle={{ fontWeight: "bold" }}
								/>

								<Card.Actions>
									<Button>Add Cart</Button>
									<Button>Buy Now</Button>
								</Card.Actions>
							</Card>
						</View>
					</ScrollView>
				</View>
			</ScrollView>
		</>
	);
}

export default HomeTab