import { View } from 'react-native';
import { ReactNode } from 'react';

type ScreenProps = {
  children: ReactNode;
};

export function Screen({ children }: ScreenProps) {
  return <View className="flex-1 justify-center items-center bg-[#080c0f]">{children}</View>
}
