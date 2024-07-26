/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Icon } from '@chakra-ui/react';
import type { IconType } from 'react-icons';
import { TiArrowSortedDown } from 'react-icons/ti';
import Select, { components } from 'react-select';

import type { IOption } from '~/lib/interfaces/general.interface';

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon as={TiArrowSortedDown} color="#475467" boxSize="20px" pb="4px" />
    </components.DropdownIndicator>
  );
};

interface ICustomSelect {
  boxStyle: { [key: string]: unknown };
  customStyles?: { [key: string]: unknown };
  options: IOption[];
  value: IOption | IOption[] | null;
  placeholder: string;
  onChange: (value: IOption) => void;
  icon?: IconType;
  iconSize?: string;
  isMulti?: boolean;
}
const CustomSelect = (props: ICustomSelect) => {
  const {
    boxStyle,
    customStyles,
    options,
    value,
    placeholder,
    onChange,
    icon,
    iconSize,
    isMulti = false,
  } = props;
  return (
    <Flex
      bgColor="white"
      alignItems="center"
      {...boxStyle}
      width="full"
      position="relative"
    >
      {icon && (
        <Icon
          as={icon}
          color="grey2"
          boxSize={iconSize ?? '24px'}
          position="absolute"
        />
      )}
      <Select
        options={options}
        isMulti={isMulti}
        styles={{
          control: (provided) => ({
            ...provided,
            minHeight: '46px',
            height: '100%',
            width: '100%',
            color: '#101728',
            paddingLeft: icon ? '20px' : '0px',
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            borderRadius: '0px',
            ':focus-within': {
              borderColor: 'white',
            },
            ':hover': {
              borderColor: 'white',
            },
            boxShadow: 'none',
            ...customStyles,
          }),
          container: (provided) => ({
            ...provided,
            width: '100%',
          }),
          multiValue: (provided) => ({
            ...provided,
            backgroundColor: '#f2f1ff',
            border: '1px solid #cec9ff',
            borderRadius: '10px',
            padding: '4px 4px',
          }),
          multiValueLabel: (provided) => ({
            ...provided,
            color: '#101728',
          }),
          menu: (provided) => ({
            ...provided,
            zIndex: 99999,
            marginTop: '1px',
            boxShadow: '0px 2px 16px 0px rgba(0, 0, 0, 0.08)',
          }),

          indicatorsContainer: (provided) => ({
            ...provided,
            display: 'hidden',
          }),
          dropdownIndicator: (provided) => ({
            ...provided,
            padding: 0,
            paddingTop: '4px',
            paddingRight: '12px',
          }),
          placeholder: (provided) => ({
            ...provided,
            fontSize: '14px',
          }),

          option: (provided) => ({
            ...provided,
            color: '#101728',
            fontSize: '14px',
            marginBottom: '0px',
            paddingTop: '8px',
            paddingLeft: '16px',
            paddingBottom: '8px',
            backgroundColor: 'white',
            '&:hover': {
              backgroundColor: '#f9fafb',
            },
          }),
          singleValue: (provided) => ({
            ...provided,
            color: '#101728',
            fontSize: '14px',
          }),
        }}
        placeholder={placeholder}
        value={value}
        onChange={(option) => onChange(option as IOption)}
        isClearable={false}
        isSearchable={false}
        components={{ DropdownIndicator }}
      />
    </Flex>
  );
};

export default CustomSelect;
