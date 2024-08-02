import { useSelector } from 'react-redux';
import { Home } from '../components/Home/Home';
import { Login } from '../components/Modal/Login';
import { isShowModalSelector } from '../redux/selectors/mainSelectors';

export const HomePage = () => {
  const showModal = useSelector(isShowModalSelector);
  return (
    <>
      <Home />
      {showModal && <Login />}
    </>
  );
};
