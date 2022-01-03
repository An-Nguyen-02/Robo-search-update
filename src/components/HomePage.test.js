import React from 'react';
import { shallow, mount, render } from 'enzyme';
import HomePage from './HomePage.js';

describe('isPending:false',()=>{
	let wrapper;
	beforeEach(()=>{
		const mockProps = {
			OnRequestRobots: jest.fn(),
			robots: [],
			searchfield: '',
			isPending: false
		}
		wrapper = shallow(<HomePage {...mockProps}/>)
	})

	it('render HomePage component',()=>{
		expect(wrapper).toMatchSnapshot();
	})

	it('filters return none',()=>{
		const mockProps2 = {
			OnRequestRobots: jest.fn(),
			robots: [{
				id: 2,
				name: 'An',
				email: 'An@gmail.conm'
			}],
			searchfield: 'amma',
			isPending: false
		}
		let wrapper2 = shallow(<HomePage {...mockProps2}/>)
		expect(wrapper2.instance().filteredrobots()).toEqual([])
	})

	it('filters return robot',()=>{
		const mockProps3 = {
			OnRequestRobots: jest.fn(),
			robots: [{
				id: 2,
				name: 'An',
				email: 'An@gmail.conm'
			}],
			searchfield: 'an',
			isPending: false
		}
		let wrapper3 = shallow(<HomePage {...mockProps3}/>)
		expect(wrapper3.instance().filteredrobots()).toEqual([{
				id: 2,
				name: 'An',
				email: 'An@gmail.conm'
			}])
	})
})

describe('isPending:true',()=>{
	const mockProps = {
			OnRequestRobots: jest.fn(),
			robots: [],
			searchfield: '',
			isPending: true
		}
		const wrapper = shallow(<HomePage {...mockProps}/>)
		expect(wrapper.find('h1').length).toEqual(1);
})
