import AirportCard from '../components/AirportCard';
import AirportFilter from '../components/AirportFilter';
import AirportSearch from '../components/AirportSearch';
import { useAppDispatch } from '../hooks/redux';

const MainPage = () => {
  const dispatch = useAppDispatch();

  return (
    <div className='container mx-auto max-w-[900px] pt-5'>
      <AirportSearch />
      <AirportFilter />
      <AirportCard />
    </div>
  );
};

export default MainPage;
