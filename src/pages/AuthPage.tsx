import { useNavigate } from 'react-router-dom';
import { useInput } from '../hooks/Input';
import { useAppDispatch } from '../hooks/redux';
import { register } from '../store/actions/authAction';

const AuthPage = () => {
  const dispatch = useAppDispatch();
  const push = useNavigate();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.value && password.value) {
      dispatch(
        register({ username: username.value, password: password.value }),
      ).then(() => {
        push('/');
      });
    } else {
      return;
    }
  };

  const username = useInput();
  const password = useInput();

  return (
    <form
      className='container m-w-[500px] mx-auto pt-8'
      onSubmit={submitHandler}
    >
      <div className='mb-2'>
        <label className='block text-center' htmlFor='username'>
          Username
        </label>
        <input
          type='text'
          {...username}
          value={username.value}
          id='username'
          className='border py-1 px-2 w-full text-center'
        />
      </div>
      <div>
        <label className='block text-center' htmlFor='password'>
          Password
        </label>
        <input
          type='password'
          {...password}
          value={password.value}
          id='username'
          className='border py-1 px-2 w-full text-center mb-2'
        />
      </div>

      <button className='py-2 px-4 bg-teal-600 border' type='submit'>
        Register
      </button>
    </form>
  );
};

export default AuthPage;
