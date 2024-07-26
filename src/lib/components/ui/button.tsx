import { Button } from '@chakra-ui/react';

interface IButton {
  children?: React.ReactNode;
  handleClick?: () => void;
  type?: 'button' | 'submit';
  isLoading?: boolean;
  loadingText?: string;
  customStyles?: { [key: string]: unknown };
  isDisabled?: boolean;
}
const PrimaryButton = (props: IButton) => {
  const {
    children,
    handleClick,
    customStyles,
    type,
    isLoading,
    loadingText = 'Submitting...',
    isDisabled,
  } = props;

  return (
    <Button
      type={type || 'button'}
      isDisabled={isLoading || isDisabled}
      bgColor="primary"
      color="white"
      rounded="full"
      fontSize="14px"
      lineHeight="19.5px"
      fontWeight={600}
      py="10px"
      px="24px"
      height="48px"
      width="min-content"
      isLoading={isLoading}
      loadingText={loadingText}
      _focus={{
        outline: 'none',
      }}
      _hover={{
        bgColor: 'primary',
        color: 'white',
      }}
      _active={{
        bgColor: 'none',
      }}
      {...customStyles}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
