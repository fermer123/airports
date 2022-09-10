import { useInput } from '../hooks/Input';
import { useEffect } from 'react';

const AirportSearch = () => {
  const input = useInput('');

  useEffect(() => {
    if (input.value.length > 3) {
    }
  }, [input.value]);

  return (
    <div className='mb-4 relative'>
      <input
        type='text'
        className='border outline-0 w-full py-2 px-4 mb-4 h-[42px]'
        placeholder='Search...'
        {...input}
      />

      <div className='absolute shadow-md left-0 right-0 top-[42px] h-[200px] bg-teal-600'></div>
    </div>
  );
};

export default AirportSearch;
