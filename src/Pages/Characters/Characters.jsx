import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CardCharacter from '../../Components/CardCharacter/CardCharacter'
import './Characters.css'
import NavPersonajes from '../../Components/NavPersonajes/NavPersonajes'

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [nextPage, setNextPage] = useState(null);
  const[nameSearch, setNameSearch] = useState('');
  
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setNextPage(data.info.next);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
        setLoading(false);
      });
  }, []);



  const handleLoadMore = () => {
    if (!nextPage) return;
    setLoadingMore(true);
    fetch(nextPage)
      .then(res => res.json())
      .then(data => {
       
        setCharacters(prev => {
          const ids = new Set(prev.map(c => c.id));
          const nuevos = data.results.filter(c => !ids.has(c.id));
          return [...prev, ...nuevos];
        });
        setNextPage(data.info.next);
        setLoadingMore(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoadingMore(false);
      });
  };

  const handleNameSearchChange = async()=> {
  const name = nameSearch.trim();
  if (!name) return;
   setLoading(true);
   try{
    const res = await fetch(`https://rickandmortyapi.com/api/character?name=${encodeURIComponent(name)}`);
    const data = await res.json();

    if (!data.results?.length) {
      setCharacters([]);
      setNextPage(null);
    }
    else{
      setCharacters(data.results);
      setNextPage(data.info?.next ?? null);
    
    }
   } catch{
    setCharacters([]);
   } finally{
    setLoading(false);
   }
 }

  return (
    <div className="containerPage">
      <NavPersonajes 
        value={nameSearch}
        onChange={(e) => setNameSearch(e.target.value)}
        onSubmit={handleNameSearchChange}
      />
      {loading ? (
        <p className="text-slate-600 text-lg">Cargando personajes...</p>
      ) : (
        characters.map(character => (
          <Link
            key={character.id}
            to={`/characters/${character.id}`}
            style={{ textDecoration: 'none' }}
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
      {nextPage && (
        <button
          type="button"
          className="containerPage-load-more"
          onClick={handleLoadMore}
          disabled={loadingMore}
        >
          {loadingMore ? 'Cargando...' : 'Cargar más'}
        </button>
      )}
    </div>
  );
};

export default Characters;