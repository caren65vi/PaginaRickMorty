import "./Antagonists.css";
import evilMortyImg from "../../assets/antagonists/evilMorty.png";
import rickPrimeImg from "../../assets/antagonists/rickPrime.png";

const ANTAGONISTS = [
  { id: "evil-morty", name: "Evil Morty", image: evilMortyImg },
  { id: "rick-prime", name: "Rick Prime", image: rickPrimeImg },
];

const Antagonists = () => {
  return (
    <section className="antagonistsSection">
      <h2 className="antagonistsTitle">Antagonistas</h2>
      <div className="antagonistsGrid">
        {ANTAGONISTS.map((character) => (
          <article key={character.id} className="antagonistCard">
            <img
              className="antagonistCardImage"
              src={character.image}
              alt={character.name}
            />
            <p className="antagonistCardName">{character.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Antagonists;
