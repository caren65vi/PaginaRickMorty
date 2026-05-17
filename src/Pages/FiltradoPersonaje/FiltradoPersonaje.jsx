import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import NavFiltrado from '../../Components/NavFiltrado/NavFiltrado';
import CardCharacter from '../../Components/CardCharacter/CardCharacter';
import './FiltradoPersonaje.css';

const traducir = {
  humano: 'Human',
  alien: 'Alien',
  alienígena: 'Alien',
  alienigena: 'Alien',
  robot: 'Robot',
  animal: 'Animal',
  desconocido: 'Unknown',
  humanoide: 'Humanoid',
  'criatura mítica': 'Mythological Creature',
  'criatura mitica': 'Mythological Creature',
  cronenberg: 'Cronenberg',
  enfermedad: 'Disease',
  poopybutthole: 'Poopybutthole',
};

const speciesLabels = {
  Human: 'Humano',
  Alien: 'Alienígena',
  Humanoid: 'Humanoide',
  'Mythological Creature': 'Criatura mítica',
  Unknown: 'Desconocido',
  Animal: 'Animal',
  Robot: 'Robot',
  Cronenberg: 'Cronenberg',
  Disease: 'Enfermedad',
  Poopybutthole: 'Poopybutthole',
};

const knownSpecies = [
  'Alien',
  'Animal',
  'Cronenberg',
  'Disease',
  'Human',
  'Humanoid',
  'Mythological Creature',
  'Poopybutthole',
  'Robot',
  'Unknown',
];

const translateSpecies = (input) => {
  const trimmed = input.trim();
  if (!trimmed) return '';
  const key = trimmed.toLowerCase();
  return traducir[key] ?? trimmed;
};

const resolveSpecies = (query, list) => {
  const translated = translateSpecies(query);
  const match = list.find(
    (s) =>
      s.toLowerCase() === translated.toLowerCase() ||
      s.toLowerCase() === query.trim().toLowerCase() ||
      (speciesLabels[s]?.toLowerCase() === keyFromQuery(query))
  );
  return match ?? (translated || null);
};

const keyFromQuery = (query) => query.trim().toLowerCase();

const FiltradoPersonaje = () => {
  const [speciesList, setSpeciesList] = useState(knownSpecies);
  const [activeSpecies, setActiveSpecies] = useState('Human');
  const [searchValue, setSearchValue] = useState('');
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [nextPage, setNextPage] = useState(null);
  const [emptyMessage, setEmptyMessage] = useState('');

  useEffect(() => {
    let cancelled = false;

    const loadSpecies = async () => {
      const speciesSet = new Set(knownSpecies);
      try {
        const res = await fetch('https://rickandmortyapi.com/api/character');
        const data = await res.json();
        data.results?.forEach((c) => speciesSet.add(c.species));
      } catch (error) {
        console.error('Error al cargar especies:', error);
      }
      if (!cancelled) {
        const sorted = [...speciesSet].sort((a, b) =>
          (speciesLabels[a] || a).localeCompare(speciesLabels[b] || a, 'es')
        );
        setSpeciesList(sorted);
      }
    };

    loadSpecies();
    return () => {
      cancelled = true;
    };
  }, []);

  const fetchBySpecies = useCallback(async (species, pageUrl = null) => {
    const url =
      pageUrl ??
      `https://rickandmortyapi.com/api/character?species=${encodeURIComponent(species)}`;

    const res = await fetch(url);
    const data = await res.json();

    if (!data.results?.length) {
      return { characters: [], next: null, notFound: true };
    }

    return {
      characters: data.results,
      next: data.info?.next ?? null,
      notFound: false,
    };
  }, []);

  useEffect(() => {
    if (!activeSpecies) return;

    let cancelled = false;

    fetchBySpecies(activeSpecies)
      .then(({ characters: results, next, notFound }) => {
        if (cancelled) return;
        setCharacters(results);
        setNextPage(next);
        if (notFound) {
          setEmptyMessage(`No hay personajes para la especie "${speciesLabels[activeSpecies] ?? activeSpecies}".`);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
        if (!cancelled) {
          setCharacters([]);
          setNextPage(null);
          setEmptyMessage('No se pudieron cargar los personajes.');
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [activeSpecies, fetchBySpecies]);

  const handleSpeciesSelect = (species) => {
    setLoading(true);
    setEmptyMessage('');
    setActiveSpecies(species);
    setSearchValue(speciesLabels[species] ?? species);
  };

  const handleSearchSubmit = () => {
    const resolved = resolveSpecies(searchValue, speciesList);
    if (resolved && speciesList.includes(resolved)) {
      setLoading(true);
      setEmptyMessage('');
      setActiveSpecies(resolved);
      setSearchValue(speciesLabels[resolved] ?? resolved);
      return;
    }
    if (resolved) {
      setLoading(true);
      setEmptyMessage('');
      setActiveSpecies(resolved);
      setSearchValue(speciesLabels[resolved] ?? resolved);
      return;
    }
    setLoading(false);
    setCharacters([]);
    setNextPage(null);
    setEmptyMessage('Especie no reconocida. Prueba: Humano, Alien, Robot...');
  };

  const handleLoadMore = () => {
    if (!nextPage || loadingMore) return;
    setLoadingMore(true);
    fetchBySpecies(activeSpecies, nextPage)
      .then(({ characters: more, next }) => {
        setCharacters((prev) => {
          const ids = new Set(prev.map((c) => c.id));
          const nuevos = more.filter((c) => !ids.has(c.id));
          return [...prev, ...nuevos];
        });
        setNextPage(next);
        setLoadingMore(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoadingMore(false);
      });
  };

  return (
    <div className="filtradoPage">
      <NavFiltrado
        speciesList={speciesList}
        speciesLabels={speciesLabels}
        activeSpecies={activeSpecies}
        onSpeciesSelect={handleSpeciesSelect}
        searchValue={searchValue}
        onSearchChange={(e) => setSearchValue(e.target.value)}
        onSearchSubmit={handleSearchSubmit}
      />

      <section className="filtradoGrid" aria-live="polite">
        {loading ? (
          <p className="filtradoMessage">Cargando personajes...</p>
        ) : emptyMessage ? (
          <p className="filtradoMessage">{emptyMessage}</p>
        ) : characters.length === 0 ? (
          <p className="filtradoMessage">No hay personajes para mostrar.</p>
        ) : (
          characters.map((character) => (
            <Link
              key={character.id}
              to={`/characters/${character.id}`}
              className="filtradoCardLink"
            >
              <CardCharacter
                name={character.name}
                image={character.image}
                gender={character.gender}
                species={character.species}
                status={character.status}
                location={character.location.name}
              />
            </Link>
          ))
        )}

        {!loading && !emptyMessage && nextPage && (
          <button
            type="button"
            className="filtradoLoadMore"
            onClick={handleLoadMore}
            disabled={loadingMore}
          >
            {loadingMore ? 'Cargando...' : 'Cargar más'}
          </button>
        )}
      </section>
    </div>
  );
};

export default FiltradoPersonaje;
