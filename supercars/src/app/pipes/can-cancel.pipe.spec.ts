import { CanCancelPipe } from './can-cancel.pipe';

describe('CanCancelPipe', () => {
  it('create an instance', () => {
    const pipe = new CanCancelPipe();
    expect(pipe).toBeTruthy();
  });
});
