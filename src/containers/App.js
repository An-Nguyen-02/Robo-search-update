import React from 'react';
import Cardlist from '../components/Cardlist.js';
import Searchbox from '../components/Searchbox.js';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import {setSearchfield, requestRobots} from '../actions.js';
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
    searchfield: state.searchRobots.searchfield,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}
const mapDispatchToProps = (dispatch) =>{
	return {
		OnSearchChange: (event)=>dispatch(setSearchfield(event.target.value)),
		OnRequestRobots: ()=>dispatch(requestRobots())
	}
}

class App extends React.Component {
	componentDidMount(){
		this.props.OnRequestRobots();
	}
	render(){
		const {searchfield, OnSearchChange, robots, isPending} = this.props;
		const filteredrobots = robots.filter(robots =>
								robots.name.toLowerCase().includes(searchfield.toLowerCase()))
		return isPending ?
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