import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/features/slice';
import { useRef } from 'react';

export const Login = () => {
  const dispatch = useDispatch();
  const modalRef = useRef();

  const closeModalBack = (e) => {
    if (modalRef.current === e.target) {
      dispatch(closeModal());
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModalBack}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="w-566 flex flex-col p-16 bg-white rounded-30px">
        <button
          onClick={() => {
            dispatch(closeModal());
          }}
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
        <form className="flex flex-col">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};
