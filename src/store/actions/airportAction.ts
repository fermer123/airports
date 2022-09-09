import { AppDispatch } from '..';
import axios from '../../axios/';
import { IAirport, IServerResp } from '../../models/models';
import { AirportSlice } from '../slice/AirportSlice';

export const fetchAirports = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(AirportSlice.actions.fetching());
      const resp = await axios.get<IServerResp<IAirport>>('airports');
      dispatch(AirportSlice.actions.fetchSuccess(resp.data.results));
    } catch (e) {
      dispatch(AirportSlice.actions.fetchError(e as Error));
    }
  };
};
