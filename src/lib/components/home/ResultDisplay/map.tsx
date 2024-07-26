import { Flex, HStack, Icon, Text, VStack, Link } from '@chakra-ui/react';
import { HiOutlineGlobe } from 'react-icons/hi';

const Map = ({ map }: { map: string }) => {
  return (
    <VStack
      width="full"
      bgColor="white"
      rounded="16px"
      spacing="24px"
      p="16px"
      border="1px solid #ebedf1"
    >
      <Flex width="full" height="180px" rounded="8px" overflow="hidden">
        <iframe
          title="map"
          src={map}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        />
      </Flex>
      <Link href={map} target="_blank" textDecoration="none">
        <HStack
          py="6px"
          px="16px"
          rounded="full"
          shadow="sm"
          spacing="4px"
          border="1px solid grey1"
        >
          <Icon as={HiOutlineGlobe} boxSize="24px" color="grey2" />
          <Text fontWeight={700} fontSize="12px">
            View in a map
          </Text>
        </HStack>
      </Link>
    </VStack>
  );
};

export default Map;
