import { Themes } from '../types';

const ThemesColors: Record<Themes, string> = {
  [Themes.DARK]: 'var(--secondary-color)',
  [Themes.PRIMARY]: 'var(--primary-color)',
};

const ThemesSecondaryColors: Record<Themes, string> = {
  [Themes.DARK]: 'var(--primary-color)',
  [Themes.PRIMARY]: 'var(--secondary-color)',
};

export function getColorFromTheme(theme: Themes = Themes.PRIMARY) {
  return ThemesColors[theme];
}

export function getSecondaryColorFromTheme(theme: Themes = Themes.PRIMARY) {
  return ThemesSecondaryColors[theme];
}
