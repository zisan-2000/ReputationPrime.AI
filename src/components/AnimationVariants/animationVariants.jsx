// src/animationVariants.js

export const fadeInUp = {
  initial: { y: 100, opacity: 0, scale: 0.8 },
  animate: { y: 0, opacity: 1, scale: 1 },
  transition: { delay: 0.3, duration: 1, ease: "easeInOut" },
};

export const rotateIn = {
  initial: { y: -100, opacity: 0, rotate: -10 },
  animate: { y: 0, opacity: 1, rotate: 0 },
  transition: { duration: 0.8, ease: "easeInOut" },
};

export const scaleUp = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: "easeInOut" },
  viewport: { once: true },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -100, scale: 0.9 },
  animate: { opacity: 1, x: 0, scale: 1 },
  transition: { duration: 0.8 },
};

export const rotateXUp = {
  initial: { opacity: 0, y: 50, rotateX: 90 },
  whileInView: { opacity: 1, y: 0, rotateX: 0 },
  transition: { duration: 1, delay: 0.5 },
  viewport: { once: true },
};

export const rotateY3D = {
  initial: { opacity: 0, y: -50, rotateY: -45 },
  whileInView: { opacity: 1, y: 0, rotateY: 0 },
  transition: { delay: 0.4, duration: 0.8 },
  viewport: { once: true },
};

export const rotateZUp = {
  initial: { opacity: 0, y: -50, rotateZ: -15 },
  whileInView: { opacity: 1, y: 0, rotateZ: 0 },
  transition: { delay: 0.5, duration: 1 },
  viewport: { once: true },
};

export const scaleInLeft = {
  initial: { opacity: 0, x: -100, scale: 0.8, rotate: -10 },
  whileInView: { opacity: 1, x: 0, scale: 1, rotate: 0 },
  transition: { delay: 0.4, duration: 0.8 },
  viewport: { once: true },
};

export const rotateX3D = {
  initial: { opacity: 0, y: 100, rotateX: 90 },
  whileInView: { opacity: 1, y: 0, rotateX: 0 },
  transition: { duration: 1, ease: "easeOut" },
  viewport: { once: true },
};

export const scaleUpRight = {
  initial: { opacity: 0, x: 100, scale: 0.9 },
  animate: { opacity: 1, x: 0, scale: 1 },
  transition: { duration: 0.8 },
};
