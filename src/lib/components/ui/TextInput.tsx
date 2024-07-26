import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import type { IconType } from 'react-icons';

interface ITextInput {
  icon: IconType;
  setContent: (e: string) => void;
  content: string;
  placeholder: string;
  width: string;
}

const TextInput = (props: ITextInput) => {
  const { icon, setContent, content, placeholder, width } = props;
  return (
    <InputGroup>
      <InputLeftElement>
        <Icon as={icon} color="grey2" boxSize="24px" />
      </InputLeftElement>
      <Input
        width={width}
        color="primary"
        placeholder={placeholder}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        ml="8px"
        border="none"
        _focusVisible={{
          borderColor: 'white',
        }}
        _focus={{ borderColor: 'white' }}
      />
    </InputGroup>
  );
};

export default TextInput;
