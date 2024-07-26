import {
  Checkbox,
  Divider,
  HStack,
  Radio,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

import CustomSelect from '~/lib/components/ui/CustomSelect';
import type { IOption } from '~/lib/interfaces/general.interface';
import type { ISideFilterData } from '~/lib/interfaces/home.interface';

import { GENDER_DATA, LANGUAGES, REASONS, SPECIALTY, TIME_DATA } from './data';

const CustomBoxStyle = {
  width: 'full',
  pl: '10px',
  rounded: '16px',
  border: '1px solid #ebedf1',
};

const SideFilter = () => {
  const [filterValue, setFilterValue] = useState<ISideFilterData>({
    preferredTime: '',
    gender: '',
    reason: null,
    specialty: null,
    rating: 0,
    languages: null,
  });
  return (
    <VStack
      alignItems="flex-start"
      width="full"
      color="primary"
      bgColor="white"
      divider={<Divider borderColor="grey1" />}
      spacing="24px"
      mt="24px"
      p="16px"
      rounded="16px"
      border="1px solid #ebedf1"
    >
      <Text fontWeight={700} fontSize="16px">
        All Filter
      </Text>
      <VStack alignItems="flex-start" width="full" spacing="36px">
        {/* Preferred Time */}
        <VStack alignItems="flex-start" width="full" spacing="12px">
          <Text fontWeight={700} fontSize="14px">
            Preferred Time
          </Text>
          {TIME_DATA.map((item, index) => (
            <HStack spacing="12px" key={index}>
              <Checkbox
                borderColor="grey1"
                iconColor="white"
                colorScheme="purple"
                sx={{
                  '& .chakra-checkbox__control': {
                    borderRadius: '6px',
                    width: '20px',
                    height: '20px',
                  },
                }}
                isChecked={filterValue.preferredTime === item.value}
                onChange={() =>
                  setFilterValue((prev) => ({
                    ...prev,
                    preferredTime: item.value,
                  }))
                }
              />
              <Text fontSize="13px">{item.label}</Text>
            </HStack>
          ))}
        </VStack>
        {/* Preferred Time */}
        {/* Provider Gender */}
        <VStack alignItems="flex-start" width="full" spacing="12px">
          <Text fontWeight={700} fontSize="14px">
            Provider Gender
          </Text>
          {GENDER_DATA.map((item, index) => (
            <HStack spacing="12px" key={index}>
              <Radio
                size="lg"
                colorScheme="purple"
                borderColor="grey1"
                isChecked={filterValue.gender === item.value}
                onChange={() =>
                  setFilterValue((prev) => ({
                    ...prev,
                    gender: item.value,
                  }))
                }
              />
              <Text fontSize="13px">{item.label}</Text>
            </HStack>
          ))}
        </VStack>
        {/* Provider Gender */}
        <VStack alignItems="flex-start" width="full" spacing="12px">
          <Text fontWeight={700} fontSize="14px">
            Visit Reason
          </Text>
          <CustomSelect
            boxStyle={CustomBoxStyle}
            isMulti
            placeholder="Select Reason"
            options={REASONS}
            value={filterValue.reason}
            onChange={(e) =>
              setFilterValue((prev) => ({
                ...prev,
                reason: e as unknown as IOption[],
              }))
            }
          />
        </VStack>
        <VStack alignItems="flex-start" width="full" spacing="12px">
          <Text fontWeight={700} fontSize="14px">
            Specialty
          </Text>
          <CustomSelect
            boxStyle={CustomBoxStyle}
            isMulti
            placeholder="Select Specialty"
            options={SPECIALTY}
            value={filterValue.specialty}
            onChange={(e) =>
              setFilterValue((prev) => ({
                ...prev,
                specialty: e as unknown as IOption[],
              }))
            }
          />
        </VStack>

        <VStack alignItems="flex-start" width="full" spacing="12px">
          <Text fontWeight={700} fontSize="14px">
            Languages Spoken
          </Text>
          <CustomSelect
            boxStyle={CustomBoxStyle}
            isMulti
            placeholder="Select Language"
            options={LANGUAGES}
            value={filterValue.languages}
            onChange={(e) =>
              setFilterValue((prev) => ({
                ...prev,
                languages: e as unknown as IOption[],
              }))
            }
          />
        </VStack>
      </VStack>
    </VStack>
  );
};

export default SideFilter;
