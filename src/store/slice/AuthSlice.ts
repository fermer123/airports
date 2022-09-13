import { IFilter } from '../../models/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  access: string;
  username: string;
  isAuth: boolean;
}

const initialState: AuthState = {
  access: '',
  username: '',
  isAuth: false,
};

interface AuthPayload {
  access: string;
  username: string;
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register(state, action: PayloadAction<AuthPayload>) {
      state.access = action.payload.access;
      state.username = action.payload.username;
      state.isAuth = Boolean(action.payload.access);
    },
  },
});

export default AuthSlice.reducer;
