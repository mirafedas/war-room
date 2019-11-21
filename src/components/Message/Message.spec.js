import React from 'react';
import { shallow } from 'enzyme';

import Message from './Message';

describe('<Message />', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<Message />);
    expect(wrapper).toMatchSnapshot();
  });
});