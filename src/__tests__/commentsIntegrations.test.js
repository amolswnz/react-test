import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from '../Root';
import App from '../components/App';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

it('fetch list of comments and displays them', () => {
  // render App
  const wrapper = mount(
    <Root>
      <App />
    </Root>,
  );
  // find fetchComments buttons and click it
  wrapper.find('.fetch-comments').simulate('click');

  // add pause for request to complete
  moxios.wait(() => {
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [
        { name: 'Comment 1' },
        { name: 'Comment 2' },
        { name: 'Comment 3' },
        { name: 'Comment 4' },
      ],
    });
    // Expect list of comments
    expect(wrapper.find('li').length).toEqual(4);
    // done();
    wrapper.unmount();
  });
});
