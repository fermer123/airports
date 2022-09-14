import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const ACCESS_KEY = 'access';
const USERNAME_KEY = 'username';

interface AuthState {
  access: string;
  username: string;
  isAuth: boolean;
}

const initialState: AuthState = {
  access: localStorage.getItem(ACCESS_KEY) ?? '',
  username: localStorage.getItem(USERNAME_KEY) ?? '',
  isAuth: Boolean(localStorage.getItem(ACCESS_KEY)) ?? false,
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
      localStorage.setItem(ACCESS_KEY, JSON.stringify(action.payload.access));
      localStorage.setItem(
        USERNAME_KEY,
        JSON.stringify(action.payload.username),
      );
    },
    logout(state) {
      state.access = '';
      state.username = '';
      state.isAuth = false;
      localStorage.removeItem(ACCESS_KEY);
      localStorage.removeItem(USERNAME_KEY);
    },
  },
});

export default AuthSlice.reducer;
