import { createSlice } from '@reduxjs/toolkit';

export interface Person {
  id: number;
  name: string;
  email: string;
}

const initialState: Person[] = [];

const personSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    addPerson: (state, action: { payload: Person }) => {
      state.push(action.payload);
    },
    updatePerson: (state, action: { payload: { id: number; name: string; email: string } }) => {
      const personIndex = state.findIndex((p) => p.id === action.payload.id);
      if (personIndex !== -1) {
        state[personIndex] = action.payload;
      }
    },
    deletePerson: (state, action: { payload: number }) => {
      state = state.filter((p) => p.id !== action.payload);
      return state;
    },
  },
});

export const { addPerson, updatePerson, deletePerson } = personSlice.actions;
export default personSlice.reducer;