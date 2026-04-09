function CharacterCard({ character }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
        width: "200px",
        textAlign: "center",
      }}
    >
      <h3>{character.name}</h3>
      <img
        src={character.image}
        alt={character.name}
        width="150"
        style={{ borderRadius: "10px" }}
      />
      <p>
        <strong>Status:</strong> {character.status}
      </p>
      <p>
        <strong>Species:</strong> {character.species}
      </p>
    </div>
  );
}

export default CharacterCard;
