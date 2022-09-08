import { AppDispatch } from '..';
import axios from '../../axios';

export const fetchAirports = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await axios.get('airports');
      console.log(resp);
    } catch (e) {
      fetch;
    }
  };
};
