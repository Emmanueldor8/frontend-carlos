const BASE_URL = "https://rickandmortyapi.com/api";

// Obtener todos
export const getCharacters = async () => {
  const res = await fetch(`${BASE_URL}/character`);
  if (!res.ok) throw new Error("Error al obtener personajes");

  const data = await res.json();
  return data.results;
};

// Buscar por nombre
export const searchCharacters = async (name) => {
  const res = await fetch(`${BASE_URL}/character/?name=${name}`);
  if (!res.ok) return [];

  const data = await res.json();
  return data.results;
};

// Obtener por ID
export const getCharacterById = async (id) => {
  const res = await fetch(`${BASE_URL}/character/${id}`);
  if (!res.ok) throw new Error("No encontrado");

  return res.json();
};

// Paginación (IMPORTANTE: usa page, no skip/take)
export const getPaginatedCharacters = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/character/?page=${page}`);
  if (!res.ok) throw new Error("Error en paginación");

  const data = await res.json();
  return data.results;
};
