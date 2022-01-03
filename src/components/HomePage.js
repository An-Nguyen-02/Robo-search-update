import React from 'react';
import Cardlist from './Cardlist.js';
import Searchbox from './Searchbox.js';
import './HomePage.css';
import Scroll from './Scroll.js';
import ErrorBoundary from './ErrorBoundary.js';
import Header from './Header.js'


class HomePage extends React.Component {
	componentDidMount(){
		this.props.OnRequestRobots();
	}
	filteredrobots = () =>{
		return this.props.robots.filter(robot =>
								robot.name.toLowerCase().includes(this.props.searchfield.toLowerCase()))
	}
	render(){
		const {OnSearchChange, robots, isPending} = this.props;
		return isPending ?
			<h1>Loading</h1>:
			(
			<div className="tc">
				<Header/>
				<Searchbox searchChange={OnSearchChange}/>
				<Scroll>
					<ErrorBoundary>
	      				<Cardlist robots={this.filteredrobots}/>
	      			</ErrorBoundary>
	      		</Scroll>
	  		</div>
		);

	}
}

export default HomePage