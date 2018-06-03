import React from 'react';
import { mount } from 'enzyme';
import CommentList from '../CommentList';
import Root from '../../Root';

let wrapper;

beforeEach(() => {
  const inititalState = {
    comments: ['Comment 1', 'Comment 2'],
  };

  wrapper = mount(
    <Root inititalState={inititalState}>
      <CommentList />
    </Root>);
});

afterEach(() => {
  wrapper.unmount();
});

it('creates one li element', () => {
  expect(wrapper.find('li').length).toEqual(2);
});

it('shows text of each comment', () => {
  expect(wrapper.render().text()).toContain('Comment 1');
  expect(wrapper.render().text()).toContain('Comment 2');
});
