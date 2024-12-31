import { Text } from 'react-native';

export function Situation({situation}: string) {

  const getColorsState = (state: string) => {
    if (state == 'Alive') {
      return "bg-emerald-700";
    } else if (state == 'Dead') {
      return "bg-rose-900";
    } else {
      return "bg-gray-700";
    }
  }

  const colorsState = getColorsState(situation);

  return (
    <Text className={`${colorsState} text-pink-50 text-center font-bold px-3 py-1 rounded-xl`}>{situation}</Text>
  );
}
