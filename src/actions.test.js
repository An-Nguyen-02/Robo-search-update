import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAIL
} from './constants.js'

import * as actions from './actions.js'
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware])
it('Search field change',()=>{
	const input_ = 'hello';
	expect(actions.setSearchfield('hello')).toEqual({
		type: CHANGE_SEARCH_FIELD,
		payload: 'hello'
	})
})

describe('test requestRobots',()=>{
	const mockResponse = (status, statusText, response) => {
	  return new window.Response(response, {
	    status: status,
	    statusText: statusText,
	    headers: {
	      'Content-type': 'application/json'
	    }
	  });
	};
	it('REQUEST_ROBOTS_PENDING',()=>{
		const store = mockStore();
		store.dispatch(actions.requestRobots())
		const action = store.getActions()
		const expectedAction = {
			type: REQUEST_ROBOTS_PENDING
		}
		expect(action[0]).toEqual(expectedAction)
	})
})
