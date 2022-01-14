import { setCurrentDate } from './general-state.action';
import { generalStateReducer } from './general-state.reducer';
import { initialState } from './general-state.state';

describe('generalStateReducer', () => {
  it("should return the initial state when action isn't unknow", () => {
    const action = {
      type: 'Foo',
    };
    const state = generalStateReducer(initialState, action);
    expect(state).toBe(initialState);
  });

  it('should return the right currentDate', () => {
    const action = setCurrentDate({ date: new Date('11-11-2011') });
    const state = generalStateReducer(initialState, action);
    expect(state.currentDate).toEqual(new Date('11-11-2011'));
  });
});
