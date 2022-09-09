import AirportCard from '../components/AirportCard';
import AirportFilter from '../components/AirportFilter';
import AirportSearch from '../components/AirportSearch';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { useEffect, useState } from 'react';
import { fetchAirports } from '../store/actions/airportAction';
import ReactPaginate from 'react-paginate';

const ITEMS_PER_PAGE = 50;

const MainPage = () => {
  const dispatch = useAppDispatch();
  const pageCount = 10;
  const { airports, error, loading } = useAppSelector((state) => state.airport);
  const [page] = useState(1);
  const pageCount = 0;
  const pageChangeHandler = ({ selected }: { selected: number }) => {
    //console.log(e);
  };

  useEffect(() => {
    dispatch(fetchAirports(page, ITEMS_PER_PAGE));
  }, []);

  return (
    <div className='container mx-auto max-w-[900px] pt-5'>
      <AirportSearch />
      <AirportFilter />

      {loading && (
        <p className='text-center text-lg text-teal-600 '>Loading...</p>
      )}

      {error && <p className='text-center text-lg text-rose-700 '>{error}</p>}

      {airports.map((e) => (
        <AirportCard key={e.id} airport={e} />
      ))}

      <ReactPaginate
        breakLabel='...'
        nextLabel='>'
        onPageChange={pageChangeHandler}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel='<'
      />
    </div>
  );
};

export default MainPage;
