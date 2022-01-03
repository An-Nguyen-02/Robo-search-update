import React from 'react';
import {setSearchfield, requestRobots} from '../actions.js';
import {connect} from 'react-redux'
import HomePage from '../components/HomePage.js'

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
	render()
	{
		return <HomePage {...this.props}/>
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);