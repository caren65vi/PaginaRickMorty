import { useEffect, useState } from "react";
import { EXTERNAL_ANCHOR_PROPS } from "../../utils/externalLinks";
import "./CharacterDetails.css";
import { useNavigate, useParams } from "react-router-dom";

const CharacterDetails = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      .catch((error) =>
        console.error("Error fetching character details:", error),
      );
  }, []);

  return (
    <div className="character-details-container">
      {character ? (
        <article className="character-details-card">
          <div className="character-image-panel">
            <img
              src={character.image}
              alt={character.name}
              className="character-details-img"
            />
            <span
              className={`character-status-badge ${character.status.toLowerCase()}`}
            >
              {character.status}
            </span>
          </div>

          <div className="character-info-panel">
            <div className="character-header-row">
              <div>
                <h1 className="character-name">{character.name}</h1>
                <p className="character-subtitle">
                  <span className="character-subitem">{character.species}</span>
                  <span className="character-subdot">•</span>
                  <span className="character-subitem">{character.gender}</span>
                </p>
              </div>
            </div>

            <div className="character-pill-row">
              <span className="character-pill">{character.origin?.name}</span>
              <span className="character-pill">{character.location?.name}</span>
            </div>

            <div className="character-card-row">
              <div className="character-stat-card">
                <span className="stat-label">ID</span>
                <strong className="stat-value">#{character.id}</strong>
              </div>
              <div className="character-stat-card">
                <span className="stat-label">CREADO EN API</span>
                <strong className="stat-value">
                  {new Date(character.created).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </strong>
              </div>
            </div>

            <div className="character-episodes-row">
              <span className="episodes-label">
                CANTIDAD DE EPISODIOS DONDE APARECE
              </span>
              <span className="episodes-count">{character.episode.length}</span>
            </div>
            <div className="episodes-progress-track">
              <div
                className="episodes-progress-bar"
                style={{
                  width: `${Math.min((character.episode.length / 51) * 100, 100)}%`,
                }}
              />
            </div>

            <div className="character-actions-row">
              <a
                href={character.url}
                {...EXTERNAL_ANCHOR_PROPS}
                className="action-button api-button"
              >
                Ver en API
                <span className="action-icon">↗</span>
              </a>
              <button
                onClick={() => navigate(-1)}
                className="action-button back-button"
                type="button"
              >
                ←
              </button>
            </div>
          </div>
        </article>
      ) : (
        <p className="loading">Cargando detalles del personaje...</p>
      )}
    </div>
  );
};

export default CharacterDetails;
