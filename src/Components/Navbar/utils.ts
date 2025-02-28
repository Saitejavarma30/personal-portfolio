export const hideNavItemsVariant = {
  opened: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  closed: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 1.2,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const mobileMenuVariant = {
  opened: {
    y: "0%",
    transition: {
      delay: 0.15,
      duration: 1.2,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
  closed: {
    y: "-120%",
    transition: {
      delay: 0.35,
      duration: 1.2,
      ease: [0.74, 0, 0.19, 1.02],
    },
  },
};

export const fadeInVariant = {
  opened: {
    opacity: 1,
    transition: {
      delay: 1.2,
    },
  },
  closed: { opacity: 0 },
};

export const ulVariant = {
  opened: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.18,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

export const liVariant = {
  opened: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
  closed: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};
