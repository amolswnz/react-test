import { saveComment } from '../';
import { SAVE_COMMENT } from '../types';

describe('save comment', () => {
  it('has correct type', () => {
    const action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('has correct payload', () => {
    const action = saveComment('New comment');

    expect(action.payload).toEqual('New comment');
  });
});
