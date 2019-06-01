import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Counter from '../Counter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setCount = jest.fn();
const useStateSpy = jest.spyOn(React, 'useState');
useStateSpy.mockImplementation(init => [init, setCount]);

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Counter />);
});

afterEach(() => {
  jest.clearAllMocks();
});

it('renders without crashing', () => {
  expect(wrapper).toBeTruthy();
});

it('click countup button once to count increses one', () => {
  wrapper
    .find('#increment_button')
    .props()
    .onClick();
  expect(setCount).toHaveBeenCalledWith(1);
});

it('click countup button once to count decreses one', () => {
  wrapper
    .find('#decrement_button')
    .props()
    .onClick();
  expect(setCount).toHaveBeenCalledWith(-1);
});

it('renders two buttons', () => {
  const buttons = wrapper.find('button');
  expect(buttons).toHaveLength(2);
});
