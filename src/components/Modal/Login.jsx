import { useDispatch } from 'react-redux';

import { useRef } from 'react';
import css from './Auth.module.css';
import { closeLoginModal } from '../../redux/features/slice';

export const Login = () => {
  const dispatch = useDispatch();
  const modalRef = useRef();

  const closeModalBack = (e) => {
    if (modalRef.current === e.target) {
      dispatch(closeLoginModal());
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
            dispatch(closeLoginModal());
          }}
          className="absolute top-7 right-7"
        >
          X
        </button>
        <h1 className="text-40px font-medium text-customColor mb-20px">
          Log In
        </h1>
        <p className="text-base text-customColor-80 mb-40px">
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
        <form className="flex flex-col gap-5">
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
          <button className={css.loginBtn} type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};
