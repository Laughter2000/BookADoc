import { HStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { AiOutlineSecurityScan } from 'react-icons/ai';
import { BsPersonSquare } from 'react-icons/bs';
import { FiCalendar } from 'react-icons/fi';
import { TbCurrentLocation } from 'react-icons/tb';

import CustomSelect from '../../ui/CustomSelect';
import type { IHeaderFilterData } from '~/lib/interfaces/home.interface';
import { InsuranceOptions } from '~/lib/utils/mockData/general';

const HeaderFilter = () => {
  const [formValues, setFormValues] = useState<IHeaderFilterData>({
    date: null,
    mode: null,
    location: null,
    insurance: null,
  });
  const handleClearFilter = () => {
    setFormValues({
      date: null,
      mode: null,
      location: null,
      insurance: null,
    });
  };
  const CustomBoxStyle = {
    width: 'full',
    maxW: 'max-content',
    pl: '10px',
    rounded: '16px',
    border: '1px solid #ebedf1',
  };

  return (
    <HStack width="full" justifyContent="space-between" alignItems="flex-end">
      <HStack width="full" spacing="8px" maxW="70%">
        <CustomSelect
          iconSize="20px"
          icon={FiCalendar}
          boxStyle={CustomBoxStyle}
          placeholder=" Date"
          options={[]}
          value={formValues.date}
          onChange={(e) => setFormValues((prev) => ({ ...prev, date: e }))}
        />
        <CustomSelect
          iconSize="20px"
          icon={BsPersonSquare}
          boxStyle={CustomBoxStyle}
          placeholder=" Mode"
          options={[]}
          value={formValues.mode}
          onChange={(e) => setFormValues((prev) => ({ ...prev, mode: e }))}
        />
        <CustomSelect
          iconSize="20px"
          icon={AiOutlineSecurityScan}
          boxStyle={CustomBoxStyle}
          placeholder=" Insurance"
          options={InsuranceOptions}
          value={formValues.insurance}
          onChange={(e) => setFormValues((prev) => ({ ...prev, insurance: e }))}
        />
        <CustomSelect
          iconSize="20px"
          icon={TbCurrentLocation}
          boxStyle={CustomBoxStyle}
          placeholder=" Location"
          options={[]}
          value={formValues.location}
          onChange={(e) => setFormValues((prev) => ({ ...prev, location: e }))}
        />
      </HStack>

      <Text
        textDecoration="underline"
        color="primary"
        as="button"
        onClick={handleClearFilter}
        fontSize="12px"
        flexShrink={0}
      >
        Clear All Filter
      </Text>
    </HStack>
  );
};

export default HeaderFilter;
