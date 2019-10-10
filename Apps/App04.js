import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class App04 extends Component {
	constructor(props) {
		super(props)
		this.state = {}

		this.colors = ['red', 'green', 'blue', 'cyan', 'magenta', 'yellow',]
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<View style={styles.container}>
					{this.colors.map((color, i) => (
						<Item key={i} flex={1} text={`Item ${i}`} color={color} />
					))}
				</View>
				<View style={[styles.container, { flexDirection: 'column-reverse' }]}>
					{this.colors.map((color, i) => (
						<Item key={i} flex={1} text={`Item ${i}`} color={color} />
					))}
				</View>
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
