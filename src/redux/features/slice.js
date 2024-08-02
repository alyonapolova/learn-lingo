import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShowLoginModal: false,
  isShowSignupModal: false,
  fav: [],
  isInFav: false,
};

export const slice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    showLoginModal: (state) => {
      state.isShowLoginModal = true;
    },
    closeLoginModal: (state) => {
      state.isShowLoginModal = false;
    },
    showSignupModal: (state) => {
      state.isShowSignupModal = true;
    },
    closeSignupModal: (state) => {
      state.isShowSignupModal = false;
    },
  },
});

export const {
  showLoginModal,
  closeLoginModal,
  showSignupModal,
  closeSignupModal,
} = slice.actions;

export default slice.reducer;
