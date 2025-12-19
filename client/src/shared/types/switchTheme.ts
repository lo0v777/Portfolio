export const ThemeSwitch = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type ThemeSwitch = typeof ThemeSwitch[keyof typeof ThemeSwitch];

