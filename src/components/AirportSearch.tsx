import { useInput } from '../hooks/Input';
import { useEffect, useState } from 'react';
import useDebounce from '../hooks/debounce';
import axios from '../axios';
import { IAirport, IServerResp } from '../models/models';

const AirportSearch = () => {
  const [serhair, setSearchair] = useState<IAirport[]>([]);
  const input = useInput('');
  const debounce = useDebounce(input.value, 400);
  const searchAirports = async () => {
    const resp = await axios.get<IServerResp<IAirport>>(`/airports`, {
      params: {
        search: debounce,
        count: 10,
      },
    });
    setSearchair(resp.data.results);
    console.log('debounce:', resp);
  };

  useEffect(() => {
    if (debounce.length > 3) {
      searchAirports();
    }
    console.log(debounce);
  }, [debounce]);

  return (
    <div className='mb-4 relative'>
      <input
        type='text'
        className='border outline-0 w-full py-2 px-4 mb-4 h-[42px]'
        placeholder='Search...'
        {...input}
      />

      <ul className='absolute list-none shadow-md left-0 right-0 top-[42px] h-[200px] overflow-y-scroll'>
        {serhair.map((e) => (
          <li className='py-2 px-4 mb-2 hover:bg-teal-600' key={e.id}>
            {e.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AirportSearch;
