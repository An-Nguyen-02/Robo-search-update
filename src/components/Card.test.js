import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Card from './Card';

it('card snapshot',()=>{
	expect(shallow(<Card />)).toMatchSnapshot();
})