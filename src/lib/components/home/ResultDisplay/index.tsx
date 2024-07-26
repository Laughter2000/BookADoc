import { Flex, Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/react';

import type { IBooking } from '~/lib/interfaces/home.interface';

import CaregiverCard from './CaregiverCard';
import HeaderFilter from './HeaderFilter';
import Map from './map';
import SideFilter from './SideFilter';

interface IResultDisplay {
  search: string;
  insurance: string;
  resultCount: number;
  map: string;
  data: IBooking[];
}
const ResultDisplay = (props: IResultDisplay) => {
  const { search, insurance, resultCount, map, data } = props;
  return (
    <Flex
      width="full"
      direction="column"
      rounded="24px"
      bgColor="#f9fafb"
      p="24px"
      mb="24px"
      gap="36px"
    >
      {insurance && search && (
        <Heading>
          <Heading as="span" color="customPink">
            {search}
          </Heading>{' '}
          Illness with{' '}
          <Heading as="span" color="customPink">
            {insurance}
          </Heading>
        </Heading>
      )}
      <HeaderFilter />
      <Text fontWeight={700} fontSize="18px" color="primary">
        {resultCount}+ Results
      </Text>
      <Grid h="full" templateColumns="repeat(3, 1fr)" gap="24px">
        <GridItem colSpan={2}>
          <VStack width="full" spacing="24px">
            {data.map((item, index) => (
              <CaregiverCard data={item} key={index} />
            ))}
          </VStack>
        </GridItem>
        <GridItem colSpan={1}>
          <Map map={map} />
          <SideFilter />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default ResultDisplay;
