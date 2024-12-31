import { BackIcon } from '../components/Icons';
import { Text, View, Pressable, ActivityIndicator, ScrollView, Image } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { Screen } from '../components/Screen';
import { Logo } from '../components/Logo';
import { useState, useEffect } from 'react';
import { getCharacterInfo } from '../service/rickandmorty';
import { Situation } from '../components/Situation';
import { UnknownIcon, MaleIcon, FemaleIcon, OriginIcon, LocationIcon } from '../components/Icons';

export default function Detail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [characterInfo, setCharacterInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getCharacterInfo(id).then(setCharacterInfo);
    }
  }, [id])

  //Elimina todo el stack de páginas de atras
  const handleDismissAll = () => {
    // router.dismissAll()
    router.dismissTo('/')
  };

  return (
    <Screen>
      <Stack.Screen
        options = {{
          headerTitle: ()=> (
            <Text className="text-center text-[#558c8c] font-bold text-2xl">
              {characterInfo ? characterInfo.name : "loading..." }
            </Text>
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => {
                handleDismissAll();
              }}
            >
              <BackIcon size={34} color="#B8B42D"/>
            </Pressable>
          ),
          headerRight: () => (
            <Situation  situation={characterInfo ? characterInfo.status : ""}/>
          )
        }}
      />
      <View className="w-[90%] h-[90%] rounded-lg">
        {characterInfo == null ? (
          <View className="flex-1 justify-center items-center">
            <Logo />
            <ActivityIndicator className="mt-6" color={"#558c8c"} size={"large"} />
          </View>
        ):(
          <ScrollView>
            <View className="flex-1 justify-center items-center">
              <Image source={{ uri: characterInfo.image }} className="w-[20em] h-[20em] rounded-lg" />

              <View className="bg-[#152028] px-3 py-2 rounded-lg w-[20em] mt-6 flex-row justify-between items-center">
                <Text className="text-pink-50/80 font-bold text-xl">{characterInfo.species}</Text>
                {characterInfo.gender == 'Male' ? (
                  <MaleIcon size={31} color="#0e7490"/>
                ) : characterInfo.gender == 'Female' ? (
                  <FemaleIcon size={31} color="#be185d"/>
                ) : (
                  <UnknownIcon size={31} color="#a16207"/>
                )}
              </View>

              {characterInfo.type != "" &&
                <View className="bg-[#152028] px-3 py-2 rounded-lg w-[20em] mt-3 flex-1 justify-center items-center">
                  <Text className="text-pink-50/70 text-lg text-center">{characterInfo.type}</Text>
                </View>
              }

              <View className=" rounded-lg w-[20em] mt-3 flex-row items-center">
                <View className="bg-[#152028] rounded-lg py-2 flex-row h-full w-[18%] justify-center items-center">
                  <OriginIcon size={31} color="#701a75"/>
                </View>
                <View className="bg-[#152028] rounded-lg py-2 h-full flex-row justify-center items-center w-[80%] ml-[2%]">
                  <Text className="text-pink-50/70 text-xl font-bold">{characterInfo.origin.name}</Text>
                </View>
              </View>

              <View className=" rounded-lg w-[20em] mt-3 flex-row items-center">
                <View className="bg-[#152028] rounded-lg py-2 h-full flex-row justify-center items-center w-[80%]">
                  <Text className="text-pink-50/70 text-lg">{characterInfo.location.name}</Text>
                </View>
                <View className="bg-[#152028] rounded-lg py-2 flex-row h-full w-[18%] ml-[2%] justify-center items-center">
                  <LocationIcon size={31} color="#115e59"/>
                </View>
              </View>


              <View className="w-[20em] mt-16 flex-1 justify-center items-center">
                <Logo />
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
