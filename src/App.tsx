import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import { useAppDispatch } from './hooks/redux';
import AirportDetail from './pages/AirportDetail';
import AuthPage from './pages/AuthPage';
import { useEffect } from 'react';
import MainPage from './pages/MainPage';
import { fetchHandBooks } from './store/actions/handBookAction';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHandBooks());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/airport/:id' element={<AirportDetail />} />
      </Routes>
    </>
  );
};

export default App;
