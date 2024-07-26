'use client';

import { Flex } from '@chakra-ui/react';
import { useState } from 'react';

import type { IFormValue } from '~/lib/interfaces/home.interface';
import BOOKINGS from '~/lib/utils/mockData/bookings';
import { InsuranceOptions } from '~/lib/utils/mockData/general';

import Hero from './hero';
import ResultDisplay from './ResultDisplay';

const Home = () => {
  const [formValues, setFormValues] = useState<IFormValue>({
    search: 'Migraine',
    location: '',
    insurance: InsuranceOptions[0],
  });
  return (
    <Flex width="full" direction="column" px="24px" pt="24px">
      <Hero setFinalFormValue={setFormValues} />
      <ResultDisplay
        search={formValues.search}
        insurance={formValues.insurance.value}
        map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.5520798223706!2d3.905857612243811!3d7.403978492575278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10399335607ce625%3A0xda7a513937bdd868!2sAdejumo%20close!5e0!3m2!1sen!2sng!4v1714832161437!5m2!1sen!2sng"
        resultCount={1000}
        data={BOOKINGS}
      />
    </Flex>
  );
};

export default Home;
