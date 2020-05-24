import React from 'react';
import ReactDOM from 'react-dom';
import  Send  from './Send';
import {shallow,mount} from 'enzyme'
import Sender from "../../../components/ScreenShare/Sender"
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import renderer from 'react-test-renderer';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
  useLocation: () => ({
    push: jest.fn(),
  }),
}));
const mockStore = configureMockStore([thunk]);
const match = { params: { projectId: '10012' } }
const store = mockStore({
    user: { userData: {isAuth:true,first_name:'yogya'} }
  });
describe('Share Screens', () => {
    it('renders Sender Component', () => {
      const wrapper = mount(
      <Provider store={store}>
        <Send match={match}/>
      </Provider>);
      expect(wrapper.find(Sender).exists()).toBeTruthy();
    });
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <Provider store={store}>
          <Send match={match}/>
      </Provider>, div);
  });
    it('renders correctly', () => {
        const tree = renderer
          .create(
          <Provider store={store}>
            <Send match={match}/>
          </Provider>)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
    });