import React from 'react';
import Cardlist from '../components/Cardlist.js';
import Searchbox from '../components/Searchbox.js';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import {setSearchfield} from '../actions.js';
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
    searchfield: state.searchfield
  }
}
const mapDispatchToProps = (dispatch) =>{
	return {
		OnSearchChange: (event)=>dispatch(setSearchfield(event.target.value))
	}
}

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			robots : []
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res=>res.json())
			.then(users=>{this.setState({robots:users})})
	}
	render(){
		const {robots} = this.state;
		const {searchfield, OnSearchChange} = this.props;
		const filteredrobots = robots.filter(robots =>
								robots.name.toLowerCase().includes(searchfield.toLowerCase()))
		return !robots.length ?
			<h1>Loading</h1>:
			(
			<div className="tc">
				<h1 className="f1"> Robo Friends </h1>
				<Searchbox searchChange={OnSearchChange}/>
				<Scroll>
					<ErrorBoundary>
	      				<Cardlist robots={filteredrobots}/>
	      			</ErrorBoundary>
	      		</Scroll>
	  		</div>
		);

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);