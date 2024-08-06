import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isShowLoginModal: false,
  isShowSignupModal: false,
  isShowTrialLessonModal: false,
  selectedTeacher: null,
  fav: [],
  isInFav: false,
};

export const slice = createSlice({
  name: 'mainSlice',
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
    showTrialLessonModal: (state, action) => {
      state.selectedTeacher = action.payload;
      state.isShowTrialLessonModal = true;
    },
    closeTrialLessonModal: (state) => {
      state.selectedTeacher = null;
      state.isShowTrialLessonModal = false;
    },
  },
});

export const {
  showLoginModal,
  closeLoginModal,
  showSignupModal,
  closeSignupModal,
  showTrialLessonModal,
  closeTrialLessonModal,
} = slice.actions;

export default slice.reducer;
