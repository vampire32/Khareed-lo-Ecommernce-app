import React from 'react'
import { Text, View } from 'react-native'
import { Appbar } from 'react-native-paper';

const Cart = () => {
  return (
		<Appbar.Header style={{ backgroundColor: "#164B60" }}>
			<Appbar.Content title="Cart" color="#fff" />
			<Appbar.Action icon="magnify" color="#fff" />
		</Appbar.Header>
	);
}

export default Cart