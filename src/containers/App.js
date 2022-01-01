import React, {useState, useEffect} from 'react';
import Cardlist from '../components/Cardlist.js';
import Searchbox from '../components/Searchbox.js';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js'

function App() {
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState('');

	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>setRobots(users));
	},[])

	const OnSearchChange = (event) => {
		setSearchfield(event.target.value)
	}

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

export default App;