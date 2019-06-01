import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import Counter from './components/Counter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setCount = jest.fn();
const useStateSpy = jest.spyOn(React, 'useState');
useStateSpy.mockImplementation(init => [init, setCount]);

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});

it('renders without crashing', () => {
  expect(wrapper).toBeTruthy();
  const appComponent = wrapper.find(Counter);
  expect(appComponent.length).toBe(1);
});

it('renders increment button', () => {});

it('renders counter display', () => {});

it('counter starts at 0', () => {});
