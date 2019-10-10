import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class App04 extends Component {
	constructor(props) {
		super(props)
		this.state = {}

		this.colors = ['red', 'green', 'blue', 'cyan', 'magenta', 'yellow']
	}

	render() {
		return (
			<View style={styles.wrapper}>
				{[0, 1, 0, 1, 0, 1].map((rev, j) => (
					<View key={j} style={[styles.container, { flexDirection: rev ? 'column-reverse' : 'column' }]}>
						{this.colors.map((color, i) => (
							<Item key={i} flex={1} text={`${i}`} backgroundColor={color} color={'white'} />
						))}
					</View>
				))}
			</View>
		)
	}
}

class Item extends Component {
	constructor(props) {
		super(props)
		this.state = {}

		this.pressHandler = this.pressHandler.bind(this)
	}

	pressHandler() {
		window.alert(`id = ${this.props.text}\nbg = ${this.props.backgroundColor}`)
	}

	render() {
		return (
			<TouchableOpacity onPress={this.pressHandler} style={[{ ...this.props }, { alignItems: 'center', justifyContent: 'center' }]}>
				<Text style={[styles.text, { color: this.props.color }]}> {this.props.text} </Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		flexDirection: 'row',
	},
	container: {
		flex: 1,
		backgroundColor: '#ffff00',
	},
	text: {
		fontSize: 48,
	},
})

export default App04
