// Motion tokens for Nusantara Paham AI
// Follows motion-foundations skill: tokens, springs, easing

export const motionTokens = {
  duration: {
    instant: 0.08,
    fast: 0.18,
    normal: 0.35,
    slow: 0.6,
    crawl: 1.0,
  },
  easing: {
    smooth: [0.22, 1, 0.36, 1] as const,
    sharp: [0.4, 0, 0.2, 1] as const,
    expOut: [0.16, 1, 0.3, 1] as const, // expo ease-out
  },
  distance: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 48,
  },
  scale: {
    subtle: 0.98,
    press: 0.95,
    pop: 1.04,
  },
};

export const springs = {
  snappy: { type: "spring" as const, stiffness: 300, damping: 30 },
  gentle: { type: "spring" as const, stiffness: 120, damping: 14 },
  bouncy: { type: "spring" as const, stiffness: 400, damping: 10 },
  instant: { type: "spring" as const, stiffness: 600, damping: 35 },
  float: { type: "spring" as const, stiffness: 50, damping: 12 },
};

// Stagger presets for lists/grids
export const stagger = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
};

// Scroll-triggered animation variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * stagger.normal,
      duration: motionTokens.duration.slow,
      ease: motionTokens.easing.expOut,
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.easing.smooth,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * stagger.normal,
      duration: motionTokens.duration.slow,
      ease: motionTokens.easing.expOut,
    },
  }),
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.easing.expOut,
    },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: motionTokens.duration.slow,
      ease: motionTokens.easing.expOut,
    },
  },
};
