import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CountButton from './CountButton';

it('button render snapshot',()=>{
	const mockColor='red';
	expect(shallow(<CountButton color={mockColor} />)).toMatchSnapshot();
})

it('correct increment',()=>{
	const mockColor='red';
	const wrapper = shallow(<CountButton color={mockColor} />);
	wrapper.find('[id="counter"]').simulate('click')
	expect(wrapper.state()).toEqual({count:1})
	wrapper.find('[id="counter"]').simulate('click')
	wrapper.find('[id="counter"]').simulate('click')
	expect(wrapper.state()).toEqual({count:3})
	wrapper.find('[id="counter"]').simulate('keypress')
	expect(wrapper.state()).toEqual({count:3})
	expect(wrapper.props().color).toEqual('red')
})