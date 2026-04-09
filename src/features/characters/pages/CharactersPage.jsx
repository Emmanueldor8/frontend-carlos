import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import {
  getCharacters,
  searchCharacters,
  getPaginatedCharacters,
} from "../services/charactersApi";

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Carga inicial
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCharacters();
        setCharacters(data);
      } catch (error) {
        console.error("Error al cargar personajes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Buscar
  const handleSearch = async () => {
    try {
      setLoading(true);
      const data = await searchCharacters(search);
      setCharacters(data);
      setPage(1); // resetear página
    } catch (error) {
      console.error("Error en búsqueda:", error);
    } finally {
      setLoading(false);
    }
  };

  // Siguiente página
  const handleNext = async () => {
    try {
      setLoading(true);
      const newPage = page + 1;
      const data = await getPaginatedCharacters(newPage);
      setPage(newPage);
      setCharacters(data);
    } catch (error) {
      console.error("Error al paginar:", error);
    } finally {
      setLoading(false);
    }
  };

  // Página anterior
  const handlePrev = async () => {
    try {
      setLoading(true);
      const newPage = Math.max(page - 1, 1);
      const data = await getPaginatedCharacters(newPage);
      setPage(newPage);
      setCharacters(data);
    } catch (error) {
      console.error("Error al paginar:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Cargando...</h2>;
  }

  return (
    <div style={{ paddingTop: "80px", textAlign: "center" }}>
      <h1
        style={{
          color: "#6c93e1",
        }}
      >
        Personajes Rick and Morty
      </h1>

      {/* Buscador */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Buscar personaje..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      {/* Lista */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {characters.length > 0 ? (
          characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))
        ) : (
          <p>No se encontraron personajes</p>
        )}
      </div>

      {/* Paginación */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handlePrev} disabled={page === 1}>
          Anterior
        </button>
        <span style={{ margin: "0 10px" }}>Página {page}</span>
        <button onClick={handleNext}>Siguiente</button>
      </div>
    </div>
  );
}

export default CharactersPage;
