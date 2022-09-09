import { IAirport } from '../models/models';

interface IAirportCardProps {
  airport: IAirport;
}

const AirportCard = ({ airport }: IAirportCardProps) => {
  return <div>{airport.name}</div>;
};

export default AirportCard;
