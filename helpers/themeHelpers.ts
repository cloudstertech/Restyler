
import { Theme } from "../themes";

// find the color using the color token; easier way to do this; 
// we could use Restyle instead here, but we only need color so seems like overkill
export const getMappedColorFromToken = (theme: Theme, token: string | undefined) => {
    if (token && theme.colors.hasOwnProperty(token)) {
        return theme.colors[token];
    }
    return null;
}