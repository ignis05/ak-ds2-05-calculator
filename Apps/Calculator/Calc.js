import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'

const styles = StyleSheet.create({
	wrapper: { flex: 1, backgroundColor: '#121212', color: 'white', paddingTop: 30 },
	display: { flex: 1, color: 'white', backgroundColor: '#ffffff15', borderRadius: 20, margin: 10 },
	equation: { paddingRight: 20, alignItems: 'flex-end', justifyContent: 'space-around', flex: 1 },
	result: { paddingRight: 20, alignItems: 'flex-end', justifyContent: 'space-around', flex: 1, color: 'white' },
	equationText: { color: 'white', fontSize: 80 },
	resultText: { color: 'white', fontSize: 48 },
	keyboard: { flex: 2, backgroundColor: '#ffffff15', borderRadius: 20, margin: 10, flexDirection: 'row' },
	numeric: { flexDirection: 'row', flexWrap: 'wrap', flex: 3, backgroundColor: '#ffffff15', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 },
	special: { flex: 1, backgroundColor: '#ffffff20', borderTopRightRadius: 20, borderBottomRightRadius: 20 },
})

class Calc extends Component {
	constructor(props) {
		super(props)
		this.state = { equation: '', result: '' }

		this.numeric = [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0, '=']
		this.special = ['C', '/', '*', '-', '+']
		this.buttonhandler = this.buttonhandler.bind(this)
	}

	eval(equation) {
		try {
			return eval(equation)
		} catch {
			return null
		}
	}

	buttonhandler(data) {
		console.log('received press', data)
		if (data === 'C') {
			this.setState({
				equation: this.state.equation.slice(0, -1),
				result: this.eval(this.state.equation.slice(0, -1)),
			})
		} else if (data === '=') {
			this.setState({
				equation: this.state.result,
				result: '',
			})
		} else {
			this.setState({
				equation: this.state.equation + data,
				result: this.eval(this.state.equation + data),
			})
		}
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<View style={styles.display}>
					<View style={styles.equation}>
						<Text style={styles.equationText}>{this.state.equation}</Text>
					</View>
					<View style={styles.result}>
						<Text style={styles.resultText}>{this.state.result}</Text>
					</View>
				</View>
				<View style={styles.keyboard}>
					<View style={styles.numeric}>
						{this.numeric.map(val => (
							<Button key={val} text={val} callback={this.buttonhandler} width="33%" height="25%" />
						))}
					</View>
					<View style={styles.special}>
						{this.special.map(val => (
							<Button key={val} text={val} callback={this.buttonhandler} width="100%" height="20%" />
						))}
					</View>
				</View>
			</View>
		)
	}
}

export default Calc
