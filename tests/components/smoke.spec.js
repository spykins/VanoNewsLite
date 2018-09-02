
import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

describe('MyTextTest', () => {
  it('renders text', () => {
    const wrapper = shallow(<Text>Hello, world!</Text>);
    expect(wrapper.text()).toEqual('Hello, world!');
  });
});