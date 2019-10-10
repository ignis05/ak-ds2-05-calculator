import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'

const styles = StyleSheet.create({
	wrapper: { flex: 1, backgroundColor: '#121212', color: 'white', paddingTop: 30 },
	display: { alignItems: 'flex-end', justifyContent: 'flex-end', flex: 1, color: 'white', backgroundColor: '#ffffff15', borderRadius: 20, margin: 10, fontSize: 48 },
	keyboard: { flex: 2, backgroundColor: '#ffffff15', borderRadius: 20, margin: 10, flexDirection: 'row' },
	numeric: { flexDirection: 'row', flexWrap: 'wrap', flex: 3, backgroundColor: '#ffffff15', borderTopLeftRadius: 20, borderBottomLeftRadius: 20 },
	special: { flex: 1, backgroundColor: '#ffffff20', borderTopRightRadius: 20, borderBottomRightRadius: 20 },
})

class Calc extends Component {
	constructor(props) {
		super(props)
		this.state = { display: '' }

		this.numeric = [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0, '=']
		this.buttonhandler = this.buttonhandler.bind(this)
	}

	buttonhandler(data) {
		console.log('received press', data)
		if (!isNaN(data)) {
			let number = parseInt(number)
			this.setState({
				display: this.state.display + data,
			})
		}
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<Text style={styles.display}>{this.state.display}</Text>
				<View style={styles.keyboard}>
					<View style={styles.numeric}>
						{this.numeric.map(val => (
							<Button key={val} text={val} callback={this.buttonhandler} />
						))}
					</View>
					<View style={styles.special}></View>
				</View>
			</View>
		)
	}
}

export default Calc
