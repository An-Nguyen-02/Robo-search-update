import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAIL
} from './constants.js';

import * as reducers from './reducers.js';

describe('search robots',()=>{
	const intialStateSearch = {
		searchfield: ''
	}
	it('test initial state',()=>{
		expect(reducers.searchRobots(undefined,{})).toEqual({searchfield: ''})
	})

	it('test change state',()=>{
		expect(reducers.searchRobots(intialStateSearch,{
			type: CHANGE_SEARCH_FIELD,
			payload: 'abc'
		})).toEqual({searchfield: 'abc'})
	})
})

describe('request robots',()=>{
	const initialStateRobots = {
		robots: [],
		isPending: false,
		error: ''
	}

	it('test initial state',()=>{
		expect(reducers.requestRobots(undefined,{})).toEqual(initialStateRobots)
	})

	it('test REQUEST_ROBOTS_PENDING',()=>{
		expect(reducers.requestRobots(initialStateRobots,{
			type: REQUEST_ROBOTS_PENDING
		})).toEqual({
			robots: [],
			isPending: true,
			error: ''
		})
	})

	it('test REQUEST_ROBOTS_SUCCESS',()=>{
		expect(reducers.requestRobots(initialStateRobots,{
			type: REQUEST_ROBOTS_SUCCESS,
			payload: [{
				id: 123,
				name: 'An',
				email: 'An@gmail.com'
			}]
		})).toEqual({
			robots: [
			{
				id: 123,
				name: 'An',
				email: 'An@gmail.com'
			}],
			isPending: false,
			error: ''
		})
	})

	it('test REQUEST_ROBOTS_FAIL',()=>{
		expect(reducers.requestRobots(initialStateRobots,{
			type: REQUEST_ROBOTS_FAIL,
			payload: 'yay error'
		})).toEqual({
			robots: [],
			isPending: false,
			error: 'yay error'
		})
	})
})