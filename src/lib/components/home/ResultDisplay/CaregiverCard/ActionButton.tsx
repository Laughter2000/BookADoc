import { HStack, Icon } from '@chakra-ui/react';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { LuCalendarCheck2 } from 'react-icons/lu';

import PrimaryButton from '~/lib/components/ui/button';

const ActionButton = () => {
  return (
    <HStack spacing="8px">
      <PrimaryButton
        customStyles={{
          bgColor: 'white',
          color: 'primary',
          border: '1px solid #eff0f3',
          py: '6px !important',
          fontSize: '12px',
          height: 'max-content',
          shadow: 'md',
          _hover: {
            bgColor: 'white',
            color: 'primary',
          },
        }}
      >
        <Icon
          as={IoMdInformationCircleOutline}
          boxSize="20px"
          color="grey2"
          mr="6px"
        />
        More Info
      </PrimaryButton>
      <PrimaryButton
        customStyles={{
          py: '6px !important',
          fontSize: '12px',
          height: 'max-content',
        }}
      >
        <Icon as={LuCalendarCheck2} boxSize="16px" color="white" mr="6px" />
        Book Appointment
      </PrimaryButton>
    </HStack>
  );
};

export default ActionButton;
