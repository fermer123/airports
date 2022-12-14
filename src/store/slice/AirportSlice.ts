import { IAirport, IFilter } from '../../models/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AirportState {
  loading: boolean;
  error: string;
  count: number;
  airports: IAirport[];
  airportsContainer: IAirport[];
}

const initialState: AirportState = {
  loading: false,
  error: '',
  count: 0,
  airports: [],
  airportsContainer: [],
};

interface AirportPayload {
  airports: IAirport[];
  count: number;
}

export const AirportSlice = createSlice({
  name: 'airport',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<AirportPayload>) {
      state.loading = false;
      state.airports = action.payload.airports;
      state.airportsContainer = action.payload.airports;
      state.count = action.payload.count;
      state.error = '';
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false;
      state.error = action.payload.message;
    },
    filter(state, action: PayloadAction<IFilter>) {
      state.airports = state.airportsContainer
        .filter((e) => e.type.includes(action.payload.type))
        .filter((e) => e.country.includes(action.payload.country))
        .filter((e) => e.region.includes(action.payload.region));
    },
  },
});

export default AirportSlice.reducer;
