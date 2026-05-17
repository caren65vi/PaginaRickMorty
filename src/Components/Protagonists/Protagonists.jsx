import { useState, useEffect } from "react";
import "./Protagonists.css";

const Protagonists = () => {
  const [protagonists, setProtagonists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => {
        setProtagonists(data.results.slice(0, 5));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="protagonists-section protagonists-section--loading">
        <h2 className="protagonists__title">Protagonistas</h2> 
        <p className="protagonists__status">Cargando protagonistas…</p>
      </section>
    );
  }

  return (
    <section className="protagonists-section">
      <h2 className="protagonists__title">Protagonistas</h2>
      <div className="protagonists__grid">
        {protagonists.map((character) => (
          <article key={character.id} className="protagonist-card">
            <img
              className="protagonist-card__image"
              src={character.image}
              alt={character.name}
            />
            <p className="protagonist-card__name">{character.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Protagonists;
