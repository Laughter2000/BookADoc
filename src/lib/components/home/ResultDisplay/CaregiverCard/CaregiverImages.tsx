/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { useState } from 'react';
import type { IconType } from 'react-icons';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

function getInitials(fullName: string) {
  const [firstName, lastName] = fullName.split(' ');
  const firstInitial = firstName ? firstName[0].toUpperCase() : '';
  const lastInitial = lastName ? lastName[0].toUpperCase() : '';
  return `${firstInitial}${lastInitial}`;
}

interface ICaregiverImages {
  images: string[];
  isFavourite: boolean;
  name: string;
}

interface IImageButton {
  icon: IconType;
  handleClick: () => void;
}

const ImageButton = ({ icon, handleClick }: IImageButton) => {
  return (
    <Flex
      width="20px"
      height="20px"
      bgColor="white"
      rounded="full"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      onClick={handleClick}
    >
      <Icon as={icon} boxSize="12px" color="primary" />
    </Flex>
  );
};

const CaregiverImages = (props: ICaregiverImages) => {
  const { images, isFavourite, name } = props;
  const [localFavourite, setLocalFavourite] = useState(isFavourite);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Flex
      width="200px"
      height="150px"
      rounded="16px"
      bgColor="grey1"
      p="8px"
      position="relative"
      alignItems="center"
      bgImage={images[currentIndex]}
      bgSize="cover"
      bgPos="center"
      justifyContent="center"
    >
      <Flex
        width="30px"
        height="30px"
        bgColor="white"
        rounded="full"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        onClick={() => setLocalFavourite((prev) => !prev)}
        position="absolute"
        top={0}
        left={0}
        m="8px"
      >
        <Icon
          as={localFavourite ? FaHeart : FaRegHeart}
          boxSize="16px"
          color={localFavourite ? 'customPink' : '#4b586b'}
        />
      </Flex>
      {images.length >= 1 && (
        <Flex
          justifyContent="space-between"
          position="absolute"
          width="full"
          px="8px"
          display="none"
          opacity={0}
          _groupHover={{ display: 'flex', opacity: 1 }}
          transition="display 0.3s, opacity 0.3s"
        >
          <ImageButton icon={IoArrowBack} handleClick={handlePrevClick} />
          <ImageButton icon={IoArrowForward} handleClick={handleNextClick} />
        </Flex>
      )}

      {images.length < 1 && (
        <Text fontSize="50px" fontWeight={600} color="grey2">
          {getInitials(name)}
        </Text>
      )}

      <Flex mt="8px" alignSelf="flex-end" justifySelf="center">
        {images.map((_, index) => (
          <Box
            key={index}
            width="8px"
            height="8px"
            bgColor="white"
            opacity={index === currentIndex ? 1 : 0.7}
            borderRadius="full"
            mx="4px"
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default CaregiverImages;
