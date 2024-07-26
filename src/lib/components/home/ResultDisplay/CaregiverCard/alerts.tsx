import { Flex, HStack, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { IoMdInformationCircleOutline } from 'react-icons/io';

interface IAlertContainer {
  bgColor: string;
  iconColor: string;
  children: React.ReactNode;
}

const AlertContainer = (props: IAlertContainer) => {
  const { bgColor, iconColor, children } = props;
  return (
    <Flex
      rounded="8px"
      py="6px"
      px="8px"
      gap="8px"
      alignItems="center"
      bgColor={bgColor}
      width="full"
    >
      <Icon
        as={IoMdInformationCircleOutline}
        boxSize="20px"
        color={iconColor}
      />
      {children}
    </Flex>
  );
};

const AppointmentAlert = ({ id }: { id: string }) => {
  return (
    <AlertContainer bgColor="#fef0c7" iconColor="#dc6803">
      <HStack spacing="4px">
        <Text color="#dc6803" fontSize="12px">
          You have an existing appointment with this doctor
        </Text>
        <Link href={`/appointments/${id}`}>
          <Text
            color="primary"
            fontSize="12px"
            cursor="pointer"
            textDecoration="underline"
          >
            View details
          </Text>
        </Link>
      </HStack>
    </AlertContainer>
  );
};

const BookedAlert = () => {
  return (
    <AlertContainer bgColor="#f9fafb" iconColor="grey2">
      <Text color="#5b6778" fontSize="12px">
        You booked this provider in the past
      </Text>
    </AlertContainer>
  );
};

export { AppointmentAlert, BookedAlert };
