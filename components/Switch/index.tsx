
import { Switch as RNSwitch, SwitchProps, StyleSheet } from 'react-native'
import { Theme } from '../../themes';
import { BoxProps, createBox, useTheme } from '@shopify/restyle';

const StyledSwitch = createBox<Theme, SwitchProps>(RNSwitch);

export enum SwitchSize {
    Small = "small",
    Medium = "medium",
    Large = "large"
};

export type StyledSwitchProps = {
    size?: SwitchSize
} & SwitchProps & BoxProps<Theme>;

/**
 * Extends the react-native switch to be themeable and sizeable
 * @param param
 * @returns 
 */
const Switch = ({ size = SwitchSize.Medium, style = {}, ...rest }: StyledSwitchProps) => {

    const theme = useTheme<Theme>();  

    return (
        <StyledSwitch
            {...rest}
            thumbColor={theme.colors["switchThumb"]}
            trackColor={{
                true: theme.colors["switchTrackOn"],
                false: theme.colors["switchTrackOff"]
            }}
            style={{ ...styles[size] }}            
        />);
}

export default Switch;


const styles = StyleSheet.create({
    small: {
        transform: [{ scaleX: .6 }, { scaleY: .6 }] 
    },
    medium: {
        transform: [{ scaleX: .8 }, { scaleY: .8 }] 
    },
    large: {
        transform: [{ scaleX: 1 }, { scaleY: 1 }] 
    }
});