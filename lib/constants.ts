export const FADE_IN_ANIMATION_SETTINGS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2 },
};

export const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export const ATOM_URL = "https://twitter.com/atomprotocol_";
export const ATOM_TWITTER = "https://twitter.com/atomprotocol_";
export const ATOM_TITLE = "Atom - The next generation of science funding.";
export const ATOM_DESCRIPTION =
  "The complete, end to end, grants platform funding the future of science.";
