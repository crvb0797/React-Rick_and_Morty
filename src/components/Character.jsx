import { CgEditBlackPoint } from "react-icons/cg";


function Character({character}) {
  return (
    <div className="text-center p-5">
      <h3>{character.name}</h3>
      <div className="d-flex justify-content-center align-items-baseline">
      <CgEditBlackPoint className={character.status === "Alive" ? "text-success" : "text-danger"}/>
      <h4 className={character.status === "Alive" ? "text-success" : "text-danger"}> {character.status}</h4>
      </div>
      <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
    </div>
  );
}

export default Character;

