import { Divider, HStack, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

import Logo from '~/lib/components/ui/logo';

import FOOTER_LINK from './data';

const Footer = () => {
  return (
    <VStack
      width="full"
      bgColor="primary"
      py="48px"
      px="70px"
      spacing="24px"
      alignItems="flex-start"
      divider={<Divider borderColor="#343b48" borderWidth="1px" />}
      fontSize="14px"
      position="relative"
      bottom={0}
    >
      <HStack
        width="full"
        justifyContent="space-between"
        color="white"
        spacing="100px"
      >
        <VStack width="full" maxW="400px" alignItems="flex-start" spacing="8px">
          <Logo variant="dark" />
          <Text>
            BookADoc is a patient facing web / moblle application where patients
            can search and discover providers by illness, speclalist or name of
            the provider.
          </Text>
        </VStack>
        <HStack
          width="full"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {FOOTER_LINK.map((item, index) => (
            <VStack
              alignItems="flex-start"
              spacing="20px"
              color="white"
              key={index}
            >
              <Text fontWeight={600} fontSize="13px">
                {item.title}
              </Text>
              <VStack alignItems="flex-start" spacing="8px">
                {item.links.map((content, contentIdx) => (
                  <Link href={content.link}>
                    <Text fontSize="14px" key={contentIdx}>
                      {content.label}
                    </Text>
                  </Link>
                ))}
              </VStack>
            </VStack>
          ))}
        </HStack>
      </HStack>
      <Text color="#7b7f88" maxW="85%">
        <Text as="span" fontWeight={700}>
          BookADoc{' '}
        </Text>
        is a patient facing web / moblle application where patients can search
        and discover providers by illness, speclalist or name of the provider.
        BookADoc is a patient facing web / moblle application where patients can
        search and discover providers by illness, speclalist or name of the
        provider. BookADoc is a patient facing web / moblle application where
        patients can search and discover providers by illness, speclalist or
        name of the provider.
      </Text>
    </VStack>
  );
};

export default Footer;
