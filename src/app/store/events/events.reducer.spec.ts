import { setNewEvent, setSelectedEvent, toggleShowManageEvent, updateEvent } from './events.action';
import { eventsReducer } from './events.reducer';
import { initialState } from './events.state';

describe('eventsReducer', () => {
  it("should return the initial state when action isn't unknow", () => {
    const action = {
      type: 'Foo',
    };
    const state = eventsReducer(initialState, action);
    expect(state).toBe(initialState);
  });

  it('should set new event', () => {
    const action = setNewEvent({
      event: {
        '11/11/2011': [
          {
            hour: 2,
            title: 'ev',
            description: 'new ev',
          },
        ],
      },
    });
    const state = eventsReducer(initialState, action);
    expect(state.events).toEqual({
      '11/11/2011': [
        {
          hour: 2,
          title: 'ev',
          description: 'new ev',
        },
      ],
    });
  });

  it('should update event', () => {
    const action = updateEvent({
      event: {
        '11/11/2011': [
          {
            hour: 2,
            title: 'Foo',
            description: 'Bar',
          },
        ],
      },
      index: 0,
    });
    const state = eventsReducer(
      {
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
      },
      action
    );

    expect(state.events).toEqual({
      '11/11/2011': [
        {
          hour: 2,
          title: 'Foo',
          description: 'Bar',
        },
      ],
    });
  });

  it('sould toggleShowManageEvent toggle', () => {
    const action = toggleShowManageEvent();
    const state = eventsReducer(initialState, action);
    expect(state.showManageEvent).toBeTruthy();
  });

  it('sould setSelectedEvent set selectedEvent', () => {
    const action = setSelectedEvent({
      event: {
        hour: 1,
        date: '11-11-2022',
      },
    });
    const state = eventsReducer(initialState, action);
    expect(state.selectedEvent).toEqual({
      hour: 1,
      date: '11-11-2022',
    });
  });
});
