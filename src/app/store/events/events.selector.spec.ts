import { selectEventByDateAndIndex, selectSelectedEvent, selectShowManageEvent } from './events.selector';
import { EventsState } from './events.state';

const mockEvents: EventsState = {
  events: {
    '11/11/2011': [
      {
        hour: 2,
        title: 'ev',
        description: 'new ev',
      },
    ],
  },
  showManageEvent: false,
  selectedEvent: null,
};

describe('eventsSelector', () => {
  it('should selectEventByDateAndIndex return the right event', () => {
    expect(selectEventByDateAndIndex('11/11/2011', 0).projector(mockEvents)).toEqual({
      hour: 2,
      title: 'ev',
      description: 'new ev',
    });
  });

  it('should return the right showManageEvent', () => {
    expect(selectShowManageEvent.projector(mockEvents)).toEqual(false);
  });

  it('should return the right selectSelectedEvent', () => {
    expect(selectSelectedEvent.projector(mockEvents)).toEqual(null);
  });
});
