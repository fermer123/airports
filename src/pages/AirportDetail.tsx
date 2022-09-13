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
    console.log(resp);
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
    <div className='container mx-auto pt-5 max-w-[760px]'>{airport?.name}</div>
  );
};

export default AirportDetail;
