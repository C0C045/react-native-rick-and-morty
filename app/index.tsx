import { Character } from "../interfaces/characters";
import { CharacterCard } from '../components/CharacterCard';
import { Screen } from '../components/Screen';
import { fetchAllCharacters } from '../service/rickandmorty';
import { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';

export default function Index() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetchAllCharacters().then((characters: Character[]) => {
      setCharacters(characters);
    })
  }, [])

  return (
    <Screen>
      {characters.length === 0 ? (
        <ActivityIndicator className="mt-6" color={"#558c8c"} size={"large"} />
      ) : (
        <>
          <FlatList
            className="w-screen"
            columnWrapperStyle={{justifyContent: 'space-evenly'}}
            numColumns={2}
            data={characters}
            keyExtractor={character => character.id}
            renderItem={({item}) => <CharacterCard character={item} />}
          />
        </>

        /*{characters.map((character) => (
          <CharacterCard key={character.id} character={character}/>
        ))}*/
      )}
    </Screen>
  );
}

