import React from 'react'
import { Text, View } from 'react-native'
import { Appbar } from 'react-native-paper';

const Setting = () => {
  return (
		<Appbar.Header style={{ backgroundColor: "#164B60" }}>
			<Appbar.Content title="Setting" color="#fff" />
			<Appbar.Action icon="magnify" color="#fff" />
		</Appbar.Header>
	);
}

export default Setting