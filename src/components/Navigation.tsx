import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { AuthSlice } from '../store/slice/AuthSlice';

const Navigation = () => {
  const { isAuth, username } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const logout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(AuthSlice.actions.logout());
  };

  return (
    <nav className='flex justify-between px-5 h-[50px] bg-teal-600 items-center shadow-md'>
      <Link to='/'>Airport</Link>

      {isAuth ? (
        <div>
          <span>{username}</span>
          <a href='#' onClick={logout}>
            Logout
          </a>
        </div>
      ) : (
        <Link to='/auth'>Auth</Link>
      )}
    </nav>
  );
};

export default Navigation;
