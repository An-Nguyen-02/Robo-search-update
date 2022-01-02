import React from 'react';

const Searchbox = ({ searchChange}) => {
	return(
		<div className="pa2 tc">
			<input 
				aria-label= 'Search Robots'
				placeholder="Find robots..."
				type="search"
				className='pa3 ba b--green bg-lightest-blue'
				onChange = {searchChange}/>
				
		</div>
	)
}

export default Searchbox;