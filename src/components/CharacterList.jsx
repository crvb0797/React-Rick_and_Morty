import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage(props) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <p>Page: {props.page}</p>
      <div className="pagination">
        <button
          className="btn btn-small btn-primary mx-2 my-4 page-link"
          onClick={() => {
            props.setPage(props.page - 1);
          }}
        >
          Prev page
        </button>
        <button
          className="btn btn-small btn-primary page-link mx-2 my-4"
          onClick={() => {
            props.setPage(props.page + 1);
          }}
        >
          Next page
        </button>
      </div>
    </header>
  );
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />
      {loading ? (
        <h1>Cargando</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CharacterList;
