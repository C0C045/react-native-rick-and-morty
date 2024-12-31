import "./global.css"
import { Main } from './components/Main'
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <View className="flex-1 items-center justify-center bg-[#080c0f]">
        <StatusBar style="auto" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}
