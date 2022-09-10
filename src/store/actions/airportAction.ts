import { AppDispatch } from '..';
import axios from '../../axios/';
import { IAirport, IServerResp } from '../../models/models';
import { AirportSlice } from '../slice/AirportSlice';

export const fetchAirports = (page = 1, count = 50) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(AirportSlice.actions.fetching());
      const resp = await axios.get<IServerResp<IAirport>>('airports', {
        params: {
          page,
          count,
        },
      });
      dispatch(
        AirportSlice.actions.fetchSuccess({
          airports: resp.data.results,
          count: resp.data.count,
        }),
      );
    } catch (e) {
      dispatch(AirportSlice.actions.fetchError(e as Error));
    }
  };
};
