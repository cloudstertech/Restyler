import light, { Theme as ThemeType } from "./light";
import dark from "./dark";

// should be the same type across themes
export type Theme = ThemeType;

export default {
    light,
    dark
};