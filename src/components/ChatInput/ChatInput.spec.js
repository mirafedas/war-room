import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChatInput from './ChatInput';

Enzyme.configure({ adapter: new Adapter() })

describe('<ChatInput />', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<ChatInput />);
    expect(wrapper).toMatchSnapshot();
  });
});