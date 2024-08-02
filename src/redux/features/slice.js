import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShowModal: false,
  fav: [],
  isInFav: false,
};

export const slice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    showModal: (state) => {
      state.isShowModal = true;
    },
    closeModal: (state) => {
      state.isShowModal = false;
    },
  },
});

export const { showModal, closeModal } = slice.actions;

export default slice.reducer;
