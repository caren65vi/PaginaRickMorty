import { GiUfo } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
import './NavFiltrado.css';

const NavFiltrado = ({
  speciesList,
  speciesLabels,
  activeSpecies,
  onSpeciesSelect,
  searchValue,
  onSearchChange,
  onSearchSubmit,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit();
  };

  return (
    <header className="nav">
      <div className="navTop">
        <div className="navBrand" aria-hidden>
          <GiUfo className="navShip" />
        </div>
        <form className="navSearchForm" onSubmit={handleSubmit}>
          <FaSearch className="navSearchIcon" aria-hidden />
          <input
            type="search"
            className="navSearchInput"
            placeholder="Buscar especie (ej. Humano, Alien...)"
            value={searchValue}
            onChange={onSearchChange}
            aria-label="Buscar por especie"
          />
        </form>
      </div>
      <nav className="navSpecies" aria-label="Filtrar por especie">
        <ul className="navSpeciesList">
          {speciesList.map((species) => {
            const isActive = species === activeSpecies;
            const label = speciesLabels[species] ?? species;
            return (
              <li key={species}>
                <button
                  type="button"
                  className={`navSpeciesLink${isActive ? ' navSpeciesLinkActive' : ''}`}
                  onClick={() => onSpeciesSelect(species)}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavFiltrado;
