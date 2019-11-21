import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Chatroom from './Chatroom';

Enzyme.configure({ adapter: new Adapter() })

describe('<Chatroom />', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<Chatroom />);
    expect(wrapper).toMatchSnapshot();
  });
});