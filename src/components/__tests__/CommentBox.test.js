import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../Root';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>);
});

afterEach(() => {
  wrapper.unmount();
});

it('has textarea and two button', () => {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(2);
});

describe('the textarea', () => {
  beforeEach(() => {
    // const txtArea = wrapper.find('textarea'); Refactoring code this way does not work
    wrapper.find('textarea').simulate('change', {
      target: { value: 'new comment' },
    });
    wrapper.update();
  });

  it('has textarea user area can type', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
  });

  it('clears form when submitted', () => {
    wrapper.find('form').simulate('submit');
    wrapper.update();

    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });
});
