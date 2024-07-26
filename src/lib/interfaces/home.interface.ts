import type { IOption } from './general.interface';

interface IFormValue {
  search: string;
  location: string;
  insurance: IOption;
}

interface IHeaderFilterData {
  date: null | IOption;
  mode: null | IOption;
  location: null | IOption;
  insurance: null | IOption;
}

interface ISideFilterData {
  preferredTime: string;
  gender: string;
  reason: null | IOption[];
  specialty: null | IOption[];
  rating: number;
  languages: null | IOption[];
}

export interface IAvailability {
  id: string;
  date: string;
  time: string;
}

export interface ICaregiver {
  name: string;
  images: string[];
  reviews: string;
  rating: string;
  location: string;
  title: string;
  availability: IAvailability[];
}

interface IBooking {
  id: string;
  isFavourite: boolean;
  active: boolean;
  previouslyBooked: boolean;
  caregiver: ICaregiver;
}

export type { IFormValue, IHeaderFilterData, ISideFilterData, IBooking };
