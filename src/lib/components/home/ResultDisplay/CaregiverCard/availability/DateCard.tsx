import { Text, VStack } from '@chakra-ui/react';

interface IDateCard {
  dateString: string;
  dayName: string;
  dayOfMonth: number;
}

const STYLES = {
  normal: {
    bgColor: 'white',
    color: 'primary',
    border: '#ebedf1',
    boxShadow: 'sm',
  },
  isWeekend: {
    bgColor: '#f9fafb',
    color: '#5b6778',
    border: '#ebedf1',
    boxShadow: 'none',
  },
  today: {
    bgColor: '#f2f1ff',
    color: '#7a5af8',
    border: '#7a5af8',
    boxShadow: 'none',
  },
};

const DateCard = (props: IDateCard) => {
  const { dateString, dayName, dayOfMonth } = props;
  const currentDate = new Date();
  const isToday = currentDate.toDateString() === dateString;
  const isWeekend = ['Saturday', 'Sunday'].includes(dayName);

  let selectedScheme;
  if (isToday) {
    selectedScheme = STYLES.today;
  } else if (isWeekend) {
    selectedScheme = STYLES.isWeekend;
  } else {
    selectedScheme = STYLES.normal;
  }

  return (
    <VStack
      rounded="12px"
      bgColor={selectedScheme.bgColor}
      border={`1px solid ${selectedScheme.border}`}
      color={selectedScheme.color}
      boxShadow={selectedScheme?.boxShadow ?? 'none'}
      py="16px"
      px="24px"
      width="90px"
      fontWeight={isToday ? 600 : 500}
      fontSize="16px"
    >
      <Text textTransform="uppercase">{dayName.slice(0, 3)}</Text>
      <Text>{dayOfMonth}</Text>
    </VStack>
  );
};

export default DateCard;
