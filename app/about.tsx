import { HomeIcon } from '../components/Icons';
import { Text, ScrollView, Pressable } from 'react-native';
import { Screen } from '../components/Screen';
import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';

export default function About() {
  const router = useRouter();

  //Elimina todo el stack de páginas de atras
  const handleDismissAll = () => {
    // router.dismissAll()
    router.dismissTo('/')
  };

  return (
    <Screen>
      <Stack.Screen
        options = {{
          headerTitle: ()=>(
            <Text className="text-center text-[#558c8c] tracking-wider font-bold text-2xl">ABOUT</Text>
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => {
                handleDismissAll();
              }}
            >
              <HomeIcon size={34} color="#B8B42D"/>
            </Pressable>
          )
        }}
      />
      <ScrollView className="mt-5">
        <Text className="text-pink-50/80 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a feugiat nunc.
          Nunc sit amet augue in metus commodo rutrum quis eu diam. Sed sagittis vitae ipsum eu pulvinar.
          Integer semper quam ac diam pretium cursus. Cras eros nunc, bibendum quis tortor nec, tristique luctus orci.
          Aliquam non nisi luctus, imperdiet massa sed, mattis eros. Sed a rutrum nibh, at tempus velit. Proin rutrum dictum turpis id finibus.
          Cras enim metus, pretium non fringilla eu, tincidunt ac dolor.
        </Text>
        <Text className="text-pink-50/80 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a feugiat nunc.
          Nunc sit amet augue in metus commodo rutrum quis eu diam. Sed sagittis vitae ipsum eu pulvinar.
          Integer semper quam ac diam pretium cursus. Cras eros nunc, bibendum quis tortor nec, tristique luctus orci.
          Aliquam non nisi luctus, imperdiet massa sed, mattis eros. Sed a rutrum nibh, at tempus velit. Proin rutrum dictum turpis id finibus.
          Cras enim metus, pretium non fringilla eu, tincidunt ac dolor.
        </Text>
        <Text className="text-pink-50/80 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a feugiat nunc.
          Nunc sit amet augue in metus commodo rutrum quis eu diam. Sed sagittis vitae ipsum eu pulvinar.
          Integer semper quam ac diam pretium cursus. Cras eros nunc, bibendum quis tortor nec, tristique luctus orci.
          Aliquam non nisi luctus, imperdiet massa sed, mattis eros. Sed a rutrum nibh, at tempus velit. Proin rutrum dictum turpis id finibus.
          Cras enim metus, pretium non fringilla eu, tincidunt ac dolor.
        </Text>
        <Text className="text-pink-50/80 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a feugiat nunc.
          Nunc sit amet augue in metus commodo rutrum quis eu diam. Sed sagittis vitae ipsum eu pulvinar.
          Integer semper quam ac diam pretium cursus. Cras eros nunc, bibendum quis tortor nec, tristique luctus orci.
          Aliquam non nisi luctus, imperdiet massa sed, mattis eros. Sed a rutrum nibh, at tempus velit. Proin rutrum dictum turpis id finibus.
          Cras enim metus, pretium non fringilla eu, tincidunt ac dolor.
        </Text>
      </ScrollView>
    </Screen>
  );
}
