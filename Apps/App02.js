import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class App02 extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<View style={styles.container}>
				<Item flex={1} text={'Header'} color={'#ff0000'} />
				<Item flex={5} text={'Content'} color={'#00ff00'} />
				<Item flex={1} text={'Footer'} color={'#0000ff'} />
			</View>
		)
	}
}

class Item extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<View style={{ flex: this.props.flex, backgroundColor: this.props.color }}>
				<Text style={styles.text}> {this.props.text} </Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffff00',
	},
	text: {
		fontSize: 48,
	},
})

export default App02
