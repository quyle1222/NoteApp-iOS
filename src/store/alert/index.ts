import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'alert',
  initialState: {
    count: 0,
    message: '',
    isShowLoading: false,
    isShowAlert: false,
  } as AlertState,
  reducers: {
    showLoading: (state: AlertState, { payload: {} }) => {
      state.count += 1;
      state.isShowLoading = true;
    },
    hiddenLoading: (state: AlertState, { payload: {} }) => {
      if (state.count > 0) {
        state.count -= 1;
      } else {
        state.count = 0;
      }
      if (state.count === 0) {
        state.isShowLoading = false;
      }
    },
    showAlert: (
      state: AlertState,
      { payload: { message } }: SetShowAlertPayload,
    ) => {
      if (typeof message !== 'undefined') {
        state.message = message;
        state.isShowAlert = true;
      }
    },
    hiddenAlert: (state: AlertState) => {
      state.message = '';
      state.isShowAlert = false;
    },
  },
});

export const { showLoading, hiddenLoading, showAlert, hiddenAlert } =
  slice.actions;

export default slice.reducer;

export type AlertState = {
  isShowAlert: boolean;
  isShowLoading: boolean;
  count: number;
  message: string;
};

type Message = {
  message: string;
};

type SetShowAlertPayload = {
  payload: Partial<Message>;
};
