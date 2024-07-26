import { Flex, HStack, Icon, Text } from '@chakra-ui/react';
import { RiStethoscopeFill } from 'react-icons/ri';

interface ILogo {
  variant: 'dark' | 'light';
}
const Logo = ({ variant }: ILogo) => {
  return (
    <HStack spacing="8px">
      <Flex
        width="40px"
        height="40px"
        justifyContent="center"
        alignItems="center"
        rounded="full"
        bgColor="customPink"
        flexShrink={0}
      >
        <Icon
          as={RiStethoscopeFill}
          color={variant === 'dark' ? 'primary' : 'white'}
          boxSize="24px"
        />
      </Flex>
      <Text
        fontSize="16px"
        color={variant === 'dark' ? 'white' : 'primary'}
        fontWeight={700}
      >
        BookADoc
      </Text>
    </HStack>
  );
};

export default Logo;
