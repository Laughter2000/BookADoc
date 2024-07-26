import { Flex, HStack, StackDivider } from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineSecurityScan } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { TbCurrentLocation } from 'react-icons/tb';

import Header from '../layout/header';
import PrimaryButton from '../ui/button';
import CustomSelect from '../ui/CustomSelect';
import TextInput from '../ui/TextInput';
import type { IFormValue } from '~/lib/interfaces/home.interface';
import { InsuranceOptions } from '~/lib/utils/mockData/general';

interface IHero {
  setFinalFormValue: React.Dispatch<React.SetStateAction<IFormValue>>;
}
const Hero = ({ setFinalFormValue }: IHero) => {
  const [formValues, setFormValues] = useState({
    search: 'Migraine',
    location: '',
    insurance: InsuranceOptions[0],
  });

  const handleSubmit = () => {
    setFinalFormValue(formValues);
  };
  return (
    <Flex
      width="full"
      direction="column"
      bgGradient="linear(to-r, #fff5f9, #e6e4ff)"
      rounded="24px"
      pt="16px"
      pb="24px"
      px="24px"
      gap="80px"
      mb="16px"
    >
      <Header />
      <HStack
        width="full"
        bgColor="white"
        rounded="full"
        px="12px"
        justifyContent="space-between"
        divider={<StackDivider borderColor="grey1" />}
        spacing="24px"
      >
        <TextInput
          placeholder="Search..."
          content={formValues.search}
          setContent={(e) => setFormValues((prev) => ({ ...prev, search: e }))}
          width="full"
          icon={FiSearch}
        />
        <Flex width="full" maxW="250px">
          <TextInput
            placeholder="Location..."
            content={formValues.location}
            setContent={(e) =>
              setFormValues((prev) => ({ ...prev, search: e }))
            }
            width="full"
            icon={TbCurrentLocation}
          />
        </Flex>
        <HStack py="16px" width="full">
          <CustomSelect
            icon={AiOutlineSecurityScan}
            boxStyle={{ width: 'full' }}
            customStyles={{ 'min-width': '200px' }}
            placeholder="Select Insurance"
            options={InsuranceOptions}
            value={formValues.insurance}
            onChange={(e) =>
              setFormValues((prev) => ({ ...prev, insurance: e }))
            }
          />
          <PrimaryButton
            customStyles={{
              bgColor: 'customPink',
              color: 'white',
              px: '60px',
              justifySelf: 'flex-end',
              _hover: { bgColor: 'customPink' },
            }}
            handleClick={handleSubmit}
          >
            SEARCH
          </PrimaryButton>
        </HStack>
      </HStack>
    </Flex>
  );
};

export default Hero;
