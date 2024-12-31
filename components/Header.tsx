import { AboutIcon } from '../components/Icons';
import { View, Pressable } from 'react-native';
import { Link } from 'expo-router';

export function Header() {
  return (
    <View className="flex-row mt-6 mb-6 w-full justify-evenly">
      <Link asChild href="/about">
        <Pressable>
          <AboutIcon size={34} color="#B8B42D"/>
        </Pressable>
      </Link>
    </View>
  );
}
