import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AirportSlice from './slice/AirportSlice';
import AuthSlice from './slice/AuthSlice';
import HandBookSlice from './slice/handbookSlice';

const rootReducer = combineReducers({
  airport: AirportSlice,
  handBook: HandBookSlice,
  auth: AuthSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
