import { AppDispatch } from '..';
import axios from '../../axios/';
import {
  IAirporCountry,
  IAirportRegion,
  IAirportType,
} from '../../models/models';

import { HandBookSlice } from '../slice/handbookSlice';

export const fetchHandBooks = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(HandBookSlice.actions.fetching());
      const resp = await Promise.all([
        axios.get<IAirportType[]>('handbooks/airport-types'),
        axios.get<IAirportRegion[]>('handbooks/regions'),
        axios.get<IAirporCountry[]>('handbooks/countries'),
      ]);

      dispatch(
        HandBookSlice.actions.fetchSuccess({
          loading: false,
          types: resp[0].data,
          countries: resp[2].data,
          regions: resp[1].data,
        }),
      );
    } catch (e) {}
  };
};
