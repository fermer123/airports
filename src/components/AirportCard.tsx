import { useNavigate } from 'react-router-dom';
import { IAirport } from '../models/models';

interface IAirportCardProps {
  airport: IAirport;
}

const AirportCard = ({ airport }: IAirportCardProps) => {
  const push = useNavigate();
  const clickHadler = () => {
    push(`airport/${airport.id}`);
  };
  return (
    <div
      onClick={clickHadler}
      className='border rounded-md py-4 px-6 mb-2 hover:shadow-md hover:transition-all cursor-pointer'
    >
      <p className='text-lg font-bold'>{airport.name}</p>
      <p className='text-base font-normal'>{airport?.region}</p>
      <p className='text-base font-normal'>{airport.country}</p>
      <p className='text-base font-normal'>{airport.ident}</p>
    </div>
  );
};

export default AirportCard;
