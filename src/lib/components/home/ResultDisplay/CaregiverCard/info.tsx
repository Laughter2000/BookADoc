import {
  Avatar,
  AvatarGroup,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import { GiRoundStar } from 'react-icons/gi';
import { HiLocationMarker } from 'react-icons/hi';

import type { ICaregiver } from '~/lib/interfaces/home.interface';

import ActionButton from './ActionButton';

const Info = ({ data }: { data: ICaregiver }) => {
  const { name, title, location, rating, reviews } = data;
  return (
    <VStack width="full" alignItems="flex-start" mt="4px" spacing="12px">
      <HStack
        alignItems="flex-start"
        width="full"
        justifyContent="space-between"
      >
        <VStack width="full" alignItems="flex-start" spacing="4px">
          <Text fontWeight={700} fontSize="18px">
            {name}
          </Text>
          <Text fontWeight={400} fontSize="13px">
            {title}
          </Text>
        </VStack>
        <ActionButton />
      </HStack>
      <HStack spacing="4px" fontSize="13px">
        <Icon as={HiLocationMarker} boxSize="16px" color="grey2" />
        <Text fontWeight={400}>{location}</Text>
      </HStack>
      <VStack
        width="full"
        alignItems="flex-start"
        spacing="8px"
        fontSize="13px"
      >
        <HStack alignItems="flex-end">
          <HStack
            py="4px"
            px="4px"
            rounded="6px"
            bgColor="#fdead7"
            alignItems="center"
            spacing="4px"
          >
            <Icon as={GiRoundStar} boxSize="16px" color="#ef6820" />
            <Text color="ef6820">{parseFloat(rating).toFixed(2)}</Text>
          </HStack>
          <Text textDecoration="underline">({reviews} reviews)</Text>
        </HStack>
        <HStack spacing="8px" alignItems="flex-start">
          <AvatarGroup size="xs" max={2}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="" />
          </AvatarGroup>
          <Text>Dyson, and 2+ more insurance accepted</Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Info;
