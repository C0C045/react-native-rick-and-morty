import { Link } from "expo-router";
import { Character } from "../interfaces/characters";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Animated,
} from "react-native";
import { Situation } from "../components/Situation";

export function CharacterCard({ character }: Character) {
  return (
    <Link asChild href={`/${character.id}`}>
      <Pressable>
        {({ pressed }) => (
          <View
            key={character.id}
            style={[styles.characterCard, { opacity: pressed ? 0.5 : 1 }]}
            className="bg-[#152028] w-[190px] items-center justify-center mb-5 p-5 rounded-lg"
          >
            <Image
              source={{ uri: character.image }}
              className="w-[140px] h-[140px] rounded-lg"
            />
            <Text className="text-[#558c8c] text-xl font-bold my-2 text-center">
              {character.name}
            </Text>
            <Situation situation={character.status} />
            <Text className="text-[#a2a79e] font-bold tracking-wider mt-2">
              {character.species}
            </Text>
          </View>
        )}
      </Pressable>
    </Link>
  );
}

/*export function AnimatedCharacterCard({ character, index }: any) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: false
    }).start();
  },[opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <CharacterCard character={character}/>
    </Animated.View>
  );
}*/

const styles = StyleSheet.create({
  characterCard: {
    shadowColor: "#a2a79e",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
