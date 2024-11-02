import { reducer } from './index';

describe('Counter Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ count: 0 });
  });

  it('should handle INCREMENT action', () => {
    expect(reducer({ count: 0 }, { type: 'INCREMENT' })).toEqual({ count: 1 });
  });

  it('should handle DECREMENT action', () => {
    expect(reducer({ count: 1 }, { type: 'DECREMENT' })).toEqual({ count: 0 });
  });
});
