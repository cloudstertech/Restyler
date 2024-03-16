import light, { Theme as ThemeType } from "./light";
import dark from "./dark";
//import { ColorTokens, PaletteTokens } from "./common/colors.tokens";




// should be the same type across themes
export type Theme = ThemeType;




export default {
    light,
    dark    
};