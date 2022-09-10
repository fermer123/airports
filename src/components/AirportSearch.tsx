import { useInput } from '../hooks/Input';

const AirportSearch = () => {
  const input = useInput('');
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
