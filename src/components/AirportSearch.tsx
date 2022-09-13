import { useInput } from '../hooks/Input';
import { useEffect, useState } from 'react';
import useDebounce from '../hooks/debounce';
import axios from '../axios';
import { IAirport, IServerResp } from '../models/models';
import { useNavigate } from 'react-router-dom';

const AirportSearch = () => {
  const push = useNavigate();
  const [serhair, setSearchair] = useState<IAirport[]>([]);
  const [dropdown, setDropdown] = useState<boolean>(false);
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
  };

  useEffect(() => {
    if (debounce.length > 3) {
      searchAirports().then(() => setDropdown(true));
    } else {
      setDropdown(false);
    }
  }, [debounce]);

  return (
    <div className='mb-4 relative'>
      <input
        type='text'
        className='border outline-0 w-full py-2 px-4 mb-4 h-[42px]'
        placeholder='Search...'
        {...input}
      />
      {dropdown && (
        <ul className='absolute top-[42px] right-0 left-0 bg-white border overflow-y-scroll shadow-md'>
          {serhair.map((e) => (
            <li
              onClick={() => push(`/airport/${e.id}`)}
              className='py-2 px-4 mb-2 hover:bg-teal-600'
              key={e.id}
            >
              {e.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AirportSearch;
