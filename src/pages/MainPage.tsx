import AirportCard from '../components/AirportCard';
import AirportFilter from '../components/AirportFilter';
import AirportSearch from '../components/AirportSearch';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { useEffect } from 'react';
import { fetchAirports } from '../store/actions/airportAction';

const MainPage = () => {
  const dispatch = useAppDispatch();

  const { airports, error, loading } = useAppSelector((state) => state.airport);

  useEffect(() => {
    dispatch(fetchAirports());
  }, []);

  return (
    <div className='container mx-auto max-w-[900px] pt-5'>
      <AirportSearch />
      <AirportFilter />

      {airports.map((e) => (
        <AirportCard key={e.id} airport={e} />
      ))}
    </div>
  );
};

export default MainPage;
