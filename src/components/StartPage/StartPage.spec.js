import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StartPage from './StartPage';

Enzyme.configure({ adapter: new Adapter() })

describe('<StartPage />', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<StartPage />);
    expect(wrapper).toMatchSnapshot();
  });
});