import { useAppSelector } from '../hooks/redux';
import { useState, useEffect } from 'react';
import { IFilter } from '../models/models';

const AirportFilter = () => {
  const { countries, loading, regions, types } = useAppSelector(
    (state) => state.handBook,
  );
  const [filterBtn, setFilterBtn] = useState(false);

  const [filter, setFilter] = useState<IFilter>({
    type: '',
    country: '',
    region: '',
  });

  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log([e.target.name]);
    console.log(filter);
  };

  useEffect(() => {}, [filterBtn]);

  if (loading)
    return <p className='text-center text-lg text-teal-600 '>Loading...</p>;
  return (
    <div className='border py-2 px-4 mb-2 flex justify-between'>
      <span className='font-bold mr-2 '>Filter</span>
      <>
        <select
          name='type'
          className='mr-2 border py-1 px-2'
          onChange={changeHandler}
          value={filter.type}
        >
          <option value='' disabled>
            Type
          </option>
          {types.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>
        <select
          name='region'
          className=' mr-2 border py-1 px-2'
          onChange={changeHandler}
          value={filter.region}
        >
          <option value='' disabled>
            regions
          </option>
          {regions.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>
        <select
          name='country'
          className=' mr-2 border py-1 px-2'
          onChange={changeHandler}
          value={filter.country}
        >
          <option value='' disabled>
            countries
          </option>
          {countries.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>
      </>
      {filterBtn && <button className='py-1 px-2 bg-teal-600 '>&times;</button>}
    </div>
  );
};

export default AirportFilter;
