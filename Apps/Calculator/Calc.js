import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Button from './Button'
import img from './img/2137.png'

const styles = StyleSheet.create({
	wrapper: { flex: 1, backgroundColor: '#121212', color: 'white', paddingTop: 30 },
	display: { flex: 1, color: 'white', backgroundColor: '#ffffff15', borderRadius: 20, margin: 10 },
	equation: { paddingRight: 20, paddingLeft: 20, alignItems: 'flex-end', justifyContent: 'space-around', flex: 1 },
	result: { paddingRight: 20, paddingLeft: 20, alignItems: 'flex-end', justifyContent: 'space-around', flex: 1, color: 'white' },
	equationText: { color: 'white', fontSize: 80 },
	resultText: { color: '#ffffff55', fontSize: 48 },
	keyboard: { flex: 2, backgroundColor: '#ffffff15', borderRadius: 20, margin: 10, flexDirection: 'row' },
	numeric: { flexDirection: 'row', flexWrap: 'wrap', flex: 3, backgroundColor: '#ffffff15', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 },
	special: { flex: 1, backgroundColor: '#ffffff20', borderTopRightRadius: 20, borderBottomRightRadius: 20 },
})

class Calc extends Component {
	constructor(props) {
		super(props)
		this.state = { equation: '0', result: '' }

		this.numeric = [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0, '=']
		this.special = ['C', '/', '*', '-', '+']
		this.buttonhandler = this.buttonhandler.bind(this)
	}

	eval(equation) {
		if (!isNaN(equation)) return null
		try {
			return eval(equation)
		} catch {
			return null
		}
	}

	buttonhandler(data) {
		console.log('received press', data)
		if (data === 'C') {
			let temp = this.state.equation.slice(0, -1)
			if (temp.length === 0) {
				temp = '0'
			}
			this.setState({
				equation: `${temp}`,
				result: this.eval(temp),
			})
		} else if (data === '=') {
			if (this.state.result) {
				this.setState({
					equation: `${this.state.result}`,
					result: '',
				})
			} else {
				this.setState({
					equation: '0',
					result: '',
				})
			}
		} else {
			let temp = this.state.equation + data
			if (this.state.equation === '0' && !isNaN(data)) {
				temp = data
			}
			this.setState({
				equation: `${temp}`,
				result: this.eval(temp),
			})
		}
	}

	render() {
		console.log(this.state.equation)
		console.log(this.state.result)
		return (
			<View style={styles.wrapper}>
				<View style={styles.display}>
					<View style={styles.equation}>
						<Text numberOfLines={1} style={styles.equationText}>
							{this.state.equation}
						</Text>
					</View>
					<View style={styles.result}>
						<Text numberOfLines={1} style={styles.resultText}>
							{this.state.equation === '2137' ? <Image style={{ height: 35, width: 35 }} resizeMode="contain" source={img} /> : this.state.result}
						</Text>
					</View>
				</View>
				<View style={styles.keyboard}>
					<View style={styles.numeric}>
						{this.numeric.map(val => (
							<Button key={val} callback={this.buttonhandler} width="33%" height="25%">
								{val}
							</Button>
						))}
					</View>
					<View style={styles.special}>
						{this.special.map(val => (
							<Button key={val} callback={this.buttonhandler} width="100%" height="20%">
								{val}
							</Button>
						))}
					</View>
				</View>
			</View>
		)
	}
}

export default Calc
