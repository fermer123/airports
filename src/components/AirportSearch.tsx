import { useInput } from '../hooks/Input';
import { useEffect } from 'react';
import useDebounce from '../hooks/debounce';
import axios from '../axios';
import { IAirport, IServerResp } from '../models/models';

const AirportSearch = () => {
  const input = useInput('');
  const debounce = useDebounce(input.value, 400);
  const searchAirports = async () => {
    const resp = await axios.get<IServerResp<IAirport>>(`/airports`, {
      params: {
        search: debounce,
        count: 10,
      },
    });
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

      {/* <div className='absolute shadow-md left-0 right-0 top-[42px] h-[200px] bg-teal-600'></div> */}
    </div>
  );
};

export default AirportSearch;
