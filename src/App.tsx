import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import AirportDetail from './pages/AirportDetail';
import AuthPage from './pages/AuthPage';

import MainPage from './pages/MainPage';

const App = () => {
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
