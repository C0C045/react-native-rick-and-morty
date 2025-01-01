import { Linking, ScrollView, Text, View } from "react-native";
import { ParagraphIcon } from "../../components/Icons";
import { Screen } from "../../components/Screen";

export default function About() {
  const openGitHubProfile = () => {
    Linking.openURL("https://github.com/C0C045");
  };

  const openRickAndMortyAPI = () => {
    Linking.openURL("https://rickandmortyapi.com/");
  };

  return (
    <Screen>
      <ScrollView className="pt-5 px-5">
        <Text className="mb-5 text-center text-[#558c8c] tracking-wider font-bold text-2xl">
          ABOUT
        </Text>
        <Text className="text-pink-50/70 text-xl text-justify">
          This is a React Native app inspired by the animated series Rick and
          Morty, developed by{" "}
          <Text
            onPress={openGitHubProfile}
            className="text-[#B8B42D]/90 font-bold underline"
          >
            Steven Espejo
          </Text>
          . It uses the{" "}
          <Text
            onPress={openRickAndMortyAPI}
            className="text-[#B8B42D]/90 font-bold underline"
          >
            Rick and Morty API
          </Text>{" "}
          to display all the characters from the show. You can view a
          character's details by tapping on their card, including information
          such as name, status, species, gender, type, origin planet, and last
          known location.
        </Text>
        <View className="flex-1 justify-center items-center my-4">
          <ParagraphIcon size={28} color="#3E6565" />
        </View>
        <Text className="text-pink-50/60 text-xl text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          a feugiat nunc. Nunc sit amet augue in metus commodo rutrum quis eu
          diam. Sed sagittis vitae ipsum eu pulvinar. Integer semper quam ac
          diam pretium cursus. Cras eros nunc, bibendum quis tortor nec,
          tristique luctus orci. Aliquam non nisi luctus, imperdiet massa sed,
          mattis eros. Sed a rutrum nibh, at tempus velit. Proin rutrum dictum
          turpis id finibus. Cras enim metus, pretium non fringilla eu,
          tincidunt ac dolor.
        </Text>
        <View className="flex-1 justify-center items-center my-4">
          <ParagraphIcon size={28} color="#3E6565" />
        </View>
        <Text className="text-pink-50/60 text-xl text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          a feugiat nunc. Nunc sit amet augue in metus commodo rutrum quis eu
          diam. Sed sagittis vitae ipsum eu pulvinar. Integer semper quam ac
          diam pretium cursus. Cras eros nunc, bibendum quis tortor nec,
          tristique luctus orci. Aliquam non nisi luctus, imperdiet massa sed,
          mattis eros. Sed a rutrum nibh, at tempus velit. Proin rutrum dictum
          turpis id finibus. Cras enim metus, pretium non fringilla eu,
          tincidunt ac dolor.
        </Text>
        <View className="flex-1 justify-center items-center my-4">
          <ParagraphIcon size={28} color="#3E6565" />
        </View>
        <Text className="text-pink-50/60 text-xl text-justify mb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          a feugiat nunc. Nunc sit amet augue in metus commodo rutrum quis eu
          diam. Sed sagittis vitae ipsum eu pulvinar. Integer semper quam ac
          diam pretium cursus. Cras eros nunc, bibendum quis tortor nec,
          tristique luctus orci. Aliquam non nisi luctus, imperdiet massa sed,
          mattis eros. Sed a rutrum nibh, at tempus velit. Proin rutrum dictum
          turpis id finibus. Cras enim metus, pretium non fringilla eu,
          tincidunt ac dolor.
        </Text>
      </ScrollView>
    </Screen>
  );
}
