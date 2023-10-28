import React from 'react'
import { View,Text } from 'react-native'
import { Appbar } from 'react-native-paper';

const ProfileTab = () => {
  return (
		<Appbar.Header style={{ backgroundColor: "#164B60" }}>
			<Appbar.Content title="Profile" color="#fff" />
			<Appbar.Action icon="magnify" color="#fff" />
		</Appbar.Header>
	);
}

export default ProfileTab