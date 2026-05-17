import "./Seasons.css";
import {
  EXTERNAL_ANCHOR_PROPS,
  isExternalHref,
} from "../../utils/externalLinks";

const SEASONS = [
  {
    id: 8,
    label: "Temporada 8",
    year: 2025,
    episodeCount: 10,
    posterUrl: "https://culturageek.com.ar/wp-content/uploads/2025/05/Rick-y-Morty-www.culturageek.com_.ar_.webp",
    detailUrl: "https://rickymortylatam.com/temporada/7",
  },
  {
    id: 7,
    label: "Temporada 7",
    year: 2023,
    episodeCount: 10,
    posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Jb4ydGQSIje42kapySuZ2B-5JUcYU_HXYA&s",
    detailUrl: "https://rickymortylatam.com/temporada/7",
  },
  {
    id: 6,
    label: "Temporada 6",
    year: 2022,
    episodeCount: 10,
    posterUrl: "https://i.blogs.es/669147/ram-s6-key--rt-1920x1080/1366_2000.jpeg",
    detailUrl: "https://rickymortylatam.com/temporada/6",
  },
  {
    id: 5,
    label: "Temporada 5",
    year: 2021,
    episodeCount: 10,
    posterUrl: "https://i.blogs.es/f340be/rick-y-morty-trailer-temporada-5-1619898958/840_560.jpeg",
    detailUrl: "https://rickymortylatam.com/temporada/5",
  },
  {
    id: 4,
    label: "Temporada 4",
    year: 2019,
    episodeCount: 10,
    posterUrl: "https://hips.hearstapps.com/hmg-prod/images/rick-y-morty-temporada-4-trailer-1570443725.jpeg?crop=0.979xw:1.00xh;0.0112xw,0&resize=1200:*",
    detailUrl: "https://rickymortylatam.com/temporada/4",
  },
  {
    id: 3,
    label: "Temporada 3",
    year: 2017,
    episodeCount: 10,
    posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK35aBrBCOWWGyUq0Ag15txvXKmTnXcRex5Q&s",
    detailUrl: "https://rickymortylatam.com/temporada/3",
  },
  {
    id: 2,
    label: "Temporada 2",
    year: 2015,
    episodeCount: 10,
    posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCkx3rMWVkFRoTKyw9qqbd7QUNpgMZS5nHZg&s",
    detailUrl: "https://rickymortylatam.com/temporada/2",
  },
  {
    id: 1,
    label: "Temporada 1",
    year: 2013,
    episodeCount: 11,
    posterUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFdhUJjBJV7fPbJXeAb5BoNlj0HMnY1_lm8Q&s",
    detailUrl: "https://rickymortylatam.com/temporada/1",
  },
];

const Seasons = () => {
  return (
    <section className="seasonsSection">
      <h2 className="seasonsTitle">Temporadas</h2>
      <div className="seasonsGrid">
        {SEASONS.map((season) => {
          const href = season.detailUrl?.trim?.() ?? "";
          const hrefSafe = href || "#";
          const hasLink = Boolean(href);
          const linkIsExternal = hasLink && isExternalHref(href);

          const showPoster =
            typeof season.posterUrl === "string" &&
            season.posterUrl.trim() !== "";

          const posterExternal =
            showPoster && isExternalHref(season.posterUrl.trim());

          return (
            <a
              key={season.id}
              className="seasonCard"
              href={hrefSafe}
              {...(linkIsExternal ? EXTERNAL_ANCHOR_PROPS : {})}
              onClick={(e) => {
                if (!hasLink) e.preventDefault();
              }}
              aria-label={
                hasLink ? `${season.label}, abrir enlace` : season.label
              }
            >
              <div className="seasonCardMedia">
                {showPoster ? (
                  <img
                    className="seasonCardImage"
                    src={season.posterUrl}
                    alt={season.label}
                    referrerPolicy={
                      posterExternal ? "no-referrer" : undefined
                    }
                  />
                ) : (
                  <div className="seasonCardPlaceholder" aria-hidden />
                )}
                <span className="seasonCardOverlay">{season.label}</span>
              </div>
              <div className="seasonCardFooter">
                <span className="seasonCardMeta">
                  {season.year} · {season.episodeCount} capitulos
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Seasons;
