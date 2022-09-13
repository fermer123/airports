import { useParams } from 'react-router-dom';
import axios from '../axios';
import { useEffect, useState } from 'react';
import { IAirportDetail } from '../models/models';

const AirportDetail = () => {
  const { id } = useParams<string>();
  const [airport, setAirport] = useState<IAirportDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const fetchDetailAirport = async () => {
    const resp = await axios.get<IAirportDetail>(`airports/${id}`);
    setAirport(resp.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchDetailAirport();
  }, []);

  if (loading) {
    return <p className='text-center text-lg text-teal-600 '>Loading...</p>;
  }

  return (
    <div className='container mx-auto pt-5 max-w-[760px]'>
      <div className='text-lg font-bold'>
        {airport?.continent} {airport?.name} {airport?.country}
      </div>
      <div>{airport?.coordinates}</div>
      <div>{airport?.ident}</div>
      <div>{airport?.municipality}</div>
      <div>{airport?.type}</div>
    </div>
  );
};

export default AirportDetail;
