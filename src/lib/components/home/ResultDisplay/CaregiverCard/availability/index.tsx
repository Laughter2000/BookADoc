import {
  Flex,
  HStack,
  Icon,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

import type { IAvailability } from '~/lib/interfaces/home.interface';
import { getDatesWithDetails } from '~/lib/utils/generators';

import DateCard from './DateCard';

const Availability = ({ availability }: { availability: IAvailability[] }) => {
  const startDate = new Date();
  const oneYearDays = 30;
  const datesWithDetails = getDatesWithDetails(startDate, oneYearDays);
  const flexRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (scrollOffset: number) => {
    if (flexRef.current) {
      const currentScrollPosition = flexRef.current.scrollLeft;
      flexRef.current.scrollLeft = currentScrollPosition + scrollOffset;
    }
  };

  return (
    <Flex width="full" gap="16px">
      <Icon
        as={BiSolidLeftArrow}
        boxSize="14px"
        color="primary"
        aria-label="prev"
        cursor="pointer"
        mt="32px"
        onClick={() => handleScroll(-100)}
      />
      <HStack
        width="full"
        overflow="auto"
        alignItems="flex-start"
        divider={<StackDivider borderColor="grey1" />}
        sx={{
          scrollbarWidth: '0px',
          scrollbarColor: 'transparent transparent',
          '&::-webkit-scrollbar': {
            width: '0px',
            height: '0px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'transparent',
          },
        }}
        ref={flexRef}
      >
        {datesWithDetails.map((item, index) => {
          const activeDate = new Date(item.fullDateString)
            .toISOString()
            .split('T')[0];
          const activeDateAvailability = availability.filter(
            (content) => content.date === activeDate
          );
          return (
            <VStack width="full" key={index} spacing="16px">
              <DateCard
                dateString={item.fullDateString}
                dayName={item.dayName}
                dayOfMonth={item.dayOfMonth}
              />
              <VStack
                width="full"
                spacing="8px"
                opacity={0}
                display="none"
                _groupHover={{ display: 'flex', opacity: 1 }}
                transition="opacity 0.5s"
              >
                {activeDateAvailability.map((data, idx) => (
                  <Text
                    key={idx}
                    textTransform="uppercase"
                    fontSize="14px"
                    py="8px"
                    px="12px"
                    bgColor="white"
                    color="primary"
                    border="1px solid #ebedf1"
                    cursor="pointer"
                    rounded="8px"
                    _hover={{
                      bgColor: '#f2f1ff',
                      color: '#7a5af8',
                      borderColor: '#7a5af8',
                    }}
                  >
                    {data.time}
                  </Text>
                ))}
              </VStack>
            </VStack>
          );
        })}
      </HStack>
      <Icon
        as={BiSolidRightArrow}
        boxSize="14px"
        color="primary"
        aria-label="next"
        cursor="pointer"
        mt="32px"
        onClick={() => handleScroll(100)}
      />
    </Flex>
  );
};

export default Availability;
