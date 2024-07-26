import { HStack, Icon, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { HiChevronDown } from 'react-icons/hi';

import PrimaryButton from '~/lib/components/ui/button';
import Logo from '~/lib/components/ui/logo';
import Menu from '~/lib/components/ui/menu';

import HEADER_LINK from './data';

const Header = () => {
  return (
    <HStack width="full" justifyContent="space-between">
      <Logo variant="light" />
      <HStack spacing="40px" color="primary" fontSize="14px">
        {HEADER_LINK.map((content, index) =>
          content.links.length >= 1 ? (
            <Menu
              key={index}
              placement="bottom-start"
              maxW="max-content"
              TriggerButton={
                <HStack key={index} cursor="pointer" alignItems="center">
                  <Text>{content.title}</Text>
                  <Icon as={HiChevronDown} boxSize="20px" />
                </HStack>
              }
            >
              <VStack
                alignItems="flex-start"
                spacing="8px"
                px="16px"
                py="16px"
                justifyContent="flex-start"
                width="full"
                minW="min-content"
                bgColor="white"
                rounded="8px"
                boxShadow="lg"
              >
                {content.links.map((item, idx) => (
                  <Link href={item.link} key={idx}>
                    <Text>{item.label}</Text>
                  </Link>
                ))}
              </VStack>
            </Menu>
          ) : (
            <Link href={content.href} key={index}>
              <Text>{content.title}</Text>
            </Link>
          )
        )}
      </HStack>
      <HStack spacing="16px">
        <PrimaryButton customStyles={{ bgColor: 'white', color: 'primary' }}>
          Sign In
        </PrimaryButton>
        <PrimaryButton customStyles={{ bgColor: 'white', color: 'primary' }}>
          Clinic Sign Up
        </PrimaryButton>
      </HStack>
    </HStack>
  );
};

export default Header;
