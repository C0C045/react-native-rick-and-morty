import { Character, ApiResponse } from "../interfaces/characters"

// Función para obtener todos los personajes
export const fetchAllCharacters = async (): Promise<Character[]> => {
  const baseUrl = "https://rickandmortyapi.com/api/character";
  let allCharacters: Character[] = [];
  let nextPage: string | null = baseUrl;

  try {
    // Bucle para recorrer todas las páginas de resultados
    while (nextPage) {
      const response = await fetch(nextPage);
      if (!response.ok) {
        throw new Error(`Error al obtener datos: ${response.statusText}`);
      }

      const data: ApiResponse = await response.json();
      allCharacters = [...allCharacters, ...data.results];
      nextPage = data.info.next; // Actualizamos la URL para la próxima página
    }
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
    throw error;
  }

  return allCharacters;
};

export const getCharacterInfo = async (id: number):Promise<Character> => {
  const baseUrl = `https://rickandmortyapi.com/api/character/${id}`;
  let Character: Character;

  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error(`Error al obtener datos: ${response.statusText}`);
    }
    Character = await response.json()
  } catch (error) {
    console.error("Error al obtener los personajes:", error);
    throw error;
  }

  return Character;
};
