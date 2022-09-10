import AirportCard from '../components/AirportCard';
import AirportFilter from '../components/AirportFilter';
import AirportSearch from '../components/AirportSearch';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { useEffect, useState } from 'react';
import { fetchAirports } from '../store/actions/airportAction';
import ReactPaginate from 'react-paginate';

const ITEMS_PER_PAGE = 10;

const MainPage = () => {
  const dispatch = useAppDispatch();
  const { airports, error, loading, count } = useAppSelector(
    (state) => state.airport,
  );
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(count / ITEMS_PER_PAGE);

  const pageChangeHandler = ({ selected }: { selected: number }) => {
    setPage(selected);
  };

  useEffect(() => {
    dispatch(fetchAirports(page, ITEMS_PER_PAGE));
  }, [page, dispatch]);

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
        forcePage={page - 1}
        previousLabel='<'
        containerClassName='flex justify-center mb-2 '
        pageClassName='py-1 px-2 border mr-2'
        previousClassName='py-1 px-2 border mr-2'
        nextClassName='py-1 px-2 border'
        activeClassName='text-teal-600'
      />
    </div>
  );
};

export default MainPage;
