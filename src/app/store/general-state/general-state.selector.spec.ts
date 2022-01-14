import { selectCurrentDate } from './general-state.selector';
import { GeneralState } from './general-state.state';

const mockGeneralState: GeneralState = {
  currentDate: new Date('11-11-2011'),
};

describe('generalStateSelector', () => {
  it('should return the right current Date', () => {
    expect(selectCurrentDate.projector(mockGeneralState)).toEqual(new Date('11-11-2011'));
  });
});
