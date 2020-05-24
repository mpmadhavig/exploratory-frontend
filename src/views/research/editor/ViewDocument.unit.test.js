import React from 'react';
import ReactDOM from 'react-dom';
import  ViewDocument  from './ViewDocument';
import {shallow,mount} from 'enzyme'
import DocumentView from "../../../components/editor/DocumentView"
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
const match = { params: { projectId: '10012' } }
const mockStore = configureMockStore([thunk]);
const store = mockStore({
    user: { userData: {isAuth:true,first_name:'yogya'} }
  });
describe('View Document', () => {
    it('renders Document View Component', () => {
      const wrapper = mount(<Provider store={store}>
        <ViewDocument match={match}/>
    </Provider>);
      expect(wrapper.find(DocumentView).exists()).toBeTruthy();
    });
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <Provider store={store}>
          <ViewDocument match={match}/>
      </Provider>, div);
  });
    it('renders correctly', () => {
        const tree = renderer
          .create(
          <Provider store={store}>
            <ViewDocument match={match}/>
          </Provider>)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
    });