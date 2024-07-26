import { Divider, HStack, VStack } from '@chakra-ui/react';

import type { IBooking } from '~/lib/interfaces/home.interface';

import { AppointmentAlert, BookedAlert } from './alerts';
import Availability from './availability';
import CaregiverImages from './CaregiverImages';
import Info from './info';

interface ICaregiverCard {
  data: IBooking;
}
const CaregiverCard = ({ data }: ICaregiverCard) => {
  const { id, active, previouslyBooked, isFavourite, caregiver } = data;
  return (
    <VStack
      alignItems="flex-start"
      width="full"
      color="primary"
      bgColor="white"
      divider={<Divider borderColor="grey1" />}
      spacing="24px"
      p="24px"
      rounded="16px"
      border="1px solid #ebedf1"
      _hover={{
        border: '2px solid #7a5af8',
      }}
      role="group"
    >
      <VStack width="full" spacing="24px">
        {active && <AppointmentAlert id={id} />}
        {previouslyBooked && !active && <BookedAlert />}
        <HStack spacing="12px" alignItems="flex-start" width="full">
          <CaregiverImages
            isFavourite={isFavourite}
            images={caregiver.images}
            name={caregiver.name}
          />
          <Info data={caregiver} />
        </HStack>
      </VStack>
      <Availability availability={caregiver.availability} />
    </VStack>
  );
};

export default CaregiverCard;
