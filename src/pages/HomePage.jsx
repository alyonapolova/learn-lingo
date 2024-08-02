import { useSelector } from 'react-redux';
import { Home } from '../components/Home/Home';
import { Login } from '../components/Modal/Login';
import {
  isShowLoginModalSelector,
  isShowSignupModalSelector,
} from '../redux/selectors/mainSelectors';
import { Signup } from '../components/Modal/Signup';

export const HomePage = () => {
  const showLoginModal = useSelector(isShowLoginModalSelector);
  const showSignupModal = useSelector(isShowSignupModalSelector);

  return (
    <>
      <Home />
      {showLoginModal && <Login />}
      {showSignupModal && <Signup />}
    </>
  );
};
