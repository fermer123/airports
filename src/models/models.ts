export interface IAirport {
  id: number;
  name: string;
  ident: string;
  local_code: string;
  region: string;
  type: string;
  country: string;
}

export interface IServerResp<T> {
  count: number;
  next: number;
  previous: number;
  results: T[];
}

export type IAirportType = string;
export type IAirportRegion = string;
export type IAirporCountry = string;

export interface IFilter {
  type: IAirportType;
  region: IAirportRegion;
  country: IAirporCountry;
}

export interface IAirportDetail {
  continent?: string | null;
  coordinates: string;
  country: string;
  elevation_ft: string;
  gps_code?: null | string;
  iata_code?: null | string;
  ident: string;
  local_code?: null | string;
  municipality: string;
  name: string;
  region: string;
  type: string;
}
