import { AppDispatch } from '..';
import axios from '../../axios/';
import { AuthSlice } from '../slice/AuthSlice';

interface IAuthResp {
  access: string;
  refresh: string;
}

interface IAuthData {
  username: string;
  password: string;
}

export const register = (data: IAuthData) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await axios.post<IAuthResp>('auth/register', data);
      dispatch(
        AuthSlice.actions.register({
          username: data.username,
          access: resp.data.access,
        }),
      );
    } catch (e) {}
  };
};

export const login = (data: IAuthData) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await axios.post<IAuthResp>('auth/login', data);
      dispatch(
        AuthSlice.actions.register({
          username: data.username,
          access: resp.data.access,
        }),
      );
    } catch (e) {
      throw new Error(e as Error);
    }
  };
};
