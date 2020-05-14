import React from 'react';
import  EditorBlog  from './EditorBlog';
import { mount } from 'enzyme';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
const mockStore = configureMockStore([thunk]);
const mLocalStorage = {
  _storage: {},
  getItem: jest.fn((key) => {
    return mLocalStorage._storage[key];
  }),
  setItem: jest.fn((key, value) => {
    mLocalStorage._storage[key] = value;
  }),
};
Object.defineProperty(window, 'localStorage', {
  value: mLocalStorage,
});
const store = mockStore({
    user: { userDate: {isAuth:true,first_name:'yogya'} }
  });

describe('MyComponent', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });
  it('mocks API call', async () => {
    const token = 'JWT1111';
    mLocalStorage.setItem('token', token);
    const response = { data:{blogs: [ {name: 'mocked name',content:'<p>pol</p>'} ],success:true }};
    jest.spyOn(axios, 'post').mockResolvedValueOnce(response);
    const wrapper = mount(
        <Provider store={store}>
            <EditorBlog />
        </Provider>
        );
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    //expect(wrapper.find('.org-docs-header').text()).toContain('mocked name');
    expect(axios.post).toBeCalledWith('/editor/getBlogs'/*, {
      headers: { Authorization: 'JWT ' + token },
    }*/);
  });
});