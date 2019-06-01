import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Counter from '../Counter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Counter />);
});

afterEach(() => {
  jest.clearAllMocks();
});

it('正常にレンダリングされる', () => {
  expect(wrapper).toBeTruthy();
});

describe('setStateが正常な引数で実行される', () => {
  it('カウントアップボタンを押したらカウントアップされる', () => {
    wrapper.find('#increment_button').simulate('click');

    expect(wrapper.find('#count').text()).toBe('1');
  });

  it('カウントダウンボタンを押したらカウントダウンされる', () => {
    wrapper.find('#increment_button').simulate('click');
    wrapper.find('#decrement_button').simulate('click');

    expect(wrapper.find('#count').text()).toBe('0');
  });

  it('カウントダウンするとマイナスになる場合エラーメッセージを表示する', () => {
    wrapper.find('#decrement_button').simulate('click');

    expect(wrapper.find('#errorMessage').text()).toBe('Cannot decrement');
    expect(wrapper.find('#count').text()).toBe('0');
  });
});

it('renders two buttons', () => {
  const buttons = wrapper.find('button');
  expect(buttons).toHaveLength(2);
});
