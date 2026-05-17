
export function isExternalHref(href) {
  if (!href || typeof href !== "string") return false;
  const t = href.trim().toLowerCase();
  return t.startsWith("http://") || t.startsWith("https://");
}


export const EXTERNAL_ANCHOR_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
  referrerPolicy: "no-referrer",
};

export const SOCIAL_LINKS = [
  {
    id: "instagram",
    href: "https://www.instagram.com/rickandmorty/",
    label: "Instagram",
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/RickandMorty/",
    label: "Facebook",
  },
  {
    id: "tiktok",
    href: "https://www.tiktok.com/@rickandmorty/",
    label: "TikTok",
  },
];
