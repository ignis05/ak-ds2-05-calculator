import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	button: { alignItems: 'center', justifyContent: 'center' },
})

class Button extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.presshandler = this.presshandler.bind(this)
	}

	presshandler() {
		this.props.callback(this.props.children)
	}

	render() {
		return (
			<TouchableOpacity onPress={this.presshandler} style={[styles.button, { width: this.props.width, height: this.props.height }]}>
				<Text style={{ color: this.props.color || 'white', fontSize: 48 }}>{this.props.children}</Text>
			</TouchableOpacity>
		)
	}
}

export default Button
