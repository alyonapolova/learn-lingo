import { Link, NavLink } from 'react-router-dom';
import css from './AppNav.module.css';
import { useDispatch } from 'react-redux';
import { showLoginModal, showSignupModal } from '../../redux/features/slice';

export const AppNav = () => {
  const dispatch = useDispatch();

  return (
    <header className={css.header}>
      <Link to="/" className={css.logo}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4_550)">
            <path
              d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
              fill="#FFDA44"
            />
            <path
              d="M0 14C0 6.26806 6.26806 0 14 0C21.7319 0 28 6.26806 28 14"
              fill="#338AF3"
            />
          </g>
          <defs>
            <clipPath id="clip0_4_550">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p className={css.logoName}>LearnLingo</p>
      </Link>
      <nav className={css.nav}>
        <NavLink className={css.navLink} to="/">
          Home
        </NavLink>
        <NavLink className={css.navLink} to="/teachers">
          Teachers
        </NavLink>
      </nav>
      <div className={css.auth}>
        <button
          className={css.loginBtn}
          onClick={() => {
            dispatch(showLoginModal());
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
          >
            <path
              stroke="#F4C550"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12.5 2.5h1c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C17.5 4.4 17.5 5.1 17.5 6.5v7c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092c-.535.273-1.235.273-2.635.273h-1M8.333 5.833 12.5 10m0 0-4.167 4.167M12.5 10h-10"
            />
          </svg>
          <span> Log in</span>
        </button>
        <button
          onClick={() => {
            dispatch(showSignupModal());
          }}
          className={css.registerBtn}
        >
          Registration
        </button>
      </div>
    </header>
  );
};
