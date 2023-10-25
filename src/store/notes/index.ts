import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'notes',
  initialState: { data: [] } as NoteState,
  reducers: {
    addNote: (state, { payload: { note } }: SetNotePayload) => {
      if (typeof note !== 'undefined') {
        state.data.push(note);
      }
    },
  },
});

export const { addNote } = slice.actions;

export default slice.reducer;

export type NoteState = {
  data: Array<String>;
};

type Note = {
  note: String;
};

type SetNotePayload = {
  payload: Partial<Note>;
};
