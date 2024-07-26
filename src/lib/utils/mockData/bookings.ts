import type { IBooking } from '~/lib/interfaces/home.interface';

/* eslint-disable sonarjs/no-duplicate-string */
const common = {
  reviews: '99',
  rating: '5',
  location: '52087 Toney Neck Suite 296',
  title: 'Primary Care Doctor',
};

const AVAILABILITY = [
  {
    id: '1',
    date: '2024-07-25',
    time: '8:00AM',
  },
  {
    id: '2',
    date: '2024-07-26',
    time: '9:00AM',
  },
  {
    id: '3',
    date: '2024-07-29',
    time: '9:00AM',
  },
  {
    id: '4',
    date: '2024-07-26',
    time: '10:00AM',
  },
  {
    id: '5',
    date: '2024-07-27',
    time: '10:00AM',
  },
  {
    id: '5',
    date: '2024-07-29',
    time: '10:00AM',
  },
  {
    id: '6',
    date: '2024-07-29',
    time: '11:00AM',
  },
];

const BOOKINGS: IBooking[] = [
  {
    id: '1',
    isFavourite: false,
    active: true,
    previouslyBooked: false,
    caregiver: {
      name: 'Katherine Carroll, DO',
      images: ['/doctor-1.jpg', '/doctor-3.jpg'],
      ...common,
      availability: AVAILABILITY,
    },
  },
  {
    id: '2',
    isFavourite: false,
    active: false,
    previouslyBooked: true,
    caregiver: {
      name: 'Steven Weiner, MD',
      images: ['/doctor-2.jpg', '/doctor-1.jpg', '/doctor-3.jpg'],
      ...common,
      availability: AVAILABILITY,
    },
  },
  {
    id: '3',
    isFavourite: false,
    active: false,
    previouslyBooked: false,
    caregiver: {
      name: 'Dr. Anesa Dahly',
      images: ['/doctor-3.jpg', '/doctor-2.jpg'],
      ...common,
      availability: [],
    },
  },
  {
    id: '4',
    isFavourite: true,
    active: false,
    previouslyBooked: false,
    caregiver: {
      name: 'Olivia Rhye',
      images: [],
      ...common,
      availability: AVAILABILITY,
    },
  },
];

export default BOOKINGS;
