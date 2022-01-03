import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Cardlist from './Cardlist';

it('card list snapshot',()=>{
	const mockRobots = [
		{
			id: 1,
			name: 'hello',
			username: 'hihi',
			email: 'hello@gmail.com'
		}
	]
	expect(shallow(<Cardlist robots={mockRobots}/>)).toMatchSnapshot();
})