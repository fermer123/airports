import {
  IAirporCountry,
  IAirportRegion,
  IAirportType,
} from '../../models/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HandBookState {
  loading: boolean;
  types: IAirportType[];
  regions: IAirportRegion[];
  countries: IAirporCountry[];
}

const initialState: HandBookState = {
  loading: false,
  regions: [],
  countries: [],
  types: [],
};

export const HandBookSlice = createSlice({
  name: 'HandBook',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<HandBookState>) {
      state.loading = false;
      state.types = action.payload.types;
      state.regions = action.payload.regions;
      state.countries = action.payload.countries;
    },
  },
});

export default HandBookSlice.reducer;
