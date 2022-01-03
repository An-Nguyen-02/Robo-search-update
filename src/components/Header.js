import React from 'react'
import CountButton from './CountButton'

class Header extends React.Component{
	shouldComponentUpdate(nextprops, nextState){
		return false
	}
	render(){
		return(
		<div>
			<h1 className="f1"> Robo Friends </h1>
			<CountButton color='red' />
		</div>
	)}
}

export default Header;