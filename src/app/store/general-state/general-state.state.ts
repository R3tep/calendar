export interface GeneralState {
  currentDate: Date;
}

export const GENERAL_STATE = 'generalState';
export const initialState: GeneralState = {
  currentDate: new Date(),
};
