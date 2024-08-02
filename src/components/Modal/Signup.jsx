import { useDispatch } from 'react-redux';
import css from './Auth.module.css';
import { useRef } from 'react';
import { closeSignupModal } from '../../redux/features/slice';

export const Signup = () => {
  const dispatch = useDispatch();
  const modalRef = useRef();

  const closeModalBack = (e) => {
    if (modalRef.current === e.target) {
      dispatch(closeSignupModal());
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModalBack}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="relative w-566 flex flex-col p-16 bg-white rounded-30px">
        <button
          onClick={() => {
            dispatch(closeSignupModal());
          }}
          className="absolute top-7 right-7"
        >
          X
        </button>
        <h1 className="text-40px font-medium text-customColor mb-20px">
          Registration
        </h1>
        <p className="text-base text-customColor-80 mb-40px">
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
        <form className="flex flex-col gap-5">
          <input
            className={css.loginField}
            type="name"
            placeholder="Name"
            required
          />
          <input
            className={css.loginField}
            type="email"
            placeholder="Email"
            required
          />
          <input
            className={css.loginField}
            type="password"
            placeholder="Password"
            required
          />
          <button className={css.signupBtn} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
