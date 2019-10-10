import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App01 extends Component {
	render() {
		console.log('App') // tą konsolę zobacz w przeglądarce
		return (
			<View style={styles.container}>
				<Header />
				<Content />
				<Footer />
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

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#FF0000' }}>
				<Text style={styles.text}> Header </Text>
			</View>
		)
	}
}

class Content extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#00FF00' }}>
				<Text style={styles.text}> Content </Text>
			</View>
		)
	}
}

class Footer extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#0000FF' }}>
				<Text style={styles.text}> Footer </Text>
			</View>
		)
	}
}
