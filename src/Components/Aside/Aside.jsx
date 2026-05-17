import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'
import { EXTERNAL_ANCHOR_PROPS, SOCIAL_LINKS } from '../../utils/externalLinks'
import './Aside.css'

const SOCIAL_ICONS = {
  instagram: FaInstagram,
  facebook: FaFacebook,
  tiktok: FaTiktok,
}

const Aside = () => {
  return (
    <aside className="aside">
      <div className="asideSocial">
        <h4 className="asideTitle">Redes sociales</h4>
        <ul className="asideList">
          {SOCIAL_LINKS.map(({ id, href, label }) => {
            const Icon = SOCIAL_ICONS[id]
            return (
              <li key={id}>
                <a href={href} aria-label={label} {...EXTERNAL_ANCHOR_PROPS}>
                  <Icon className="asideIcon" />
                </a>
              </li>
            )
          })}
        </ul>
        <p className="asideQuoteRick">¡Wubba Lubba Dub Dub!</p>
      </div>
    </aside>
  )
}

export default Aside
