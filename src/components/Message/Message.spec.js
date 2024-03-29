import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Message from './Message';

Enzyme.configure({ adapter: new Adapter() })

describe('<Message />', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<Message />);
    expect(wrapper).toMatchSnapshot();
  });
});