import React, { useState } from "react";
import { createBox, useTheme, BoxProps } from "@shopify/restyle";
import { GestureResponderEvent, Pressable, PressableProps, StyleProp, ViewStyle, ActivityIndicator } from "react-native";
import deepmerge from "deepmerge";
import Text from "../Text";
import Box from "../Box";
import { Theme } from "../../themes";
import { Feather } from '@expo/vector-icons';
import { getMappedColorFromToken } from "../../helpers/themeHelpers";

/**
 * Button variant types
 */
export enum ButtonVariant {
    Primary = "primary",
    Secondary = "secondary",
    PrimarySmall = "primary-small",
    SecondarySmall = "secondary-small",
    PrimaryPill = "primary-pill",
    SecondaryPill = "secondary-pill",
}

// create union string for the passed type
type ButtonVariants = `${ButtonVariant}`;

// create a button with box props
const BaseButton = createBox<Theme, PressableProps>(Pressable);

export type ButtonProps = {
    /**
     * The style of the themed button
     */
    variant: ButtonVariants;

    /**
     * Icon to display on the left
     */
    iconLeft?: string;

    /**
     * Icon to display; alias for icon
     */
    iconRight?: string;

    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;

    /**
     * Whether the button is disabled. A disabled button is greyed out and `onPress` is not called on touch.
     */
    disabled?: boolean;

    /**
     * Set the action of the button to be in a loading state
     */
    loading?: boolean;

    /**
     * Flag to determine if the active state should be forced
     */
    active?: boolean;

    /**
     * The test ID provided for unit testing and UI testing
     */
    testID?: string;

    /**
     * Label text of the button.
     */
    children?: React.ReactNode;

    /**
     * Arbitrary styles to pass into the button container
     */
    style?: StyleProp<ViewStyle>;

    /**
     * Accessibility label for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityLabel?: string;

    /**
     * Accessibility hint for the button. This is read by the screen reader when the user taps the button.
     */
    accessibilityHint?: string;

} & BoxProps<Theme>;

const Button = ({
    variant = ButtonVariant.Primary,
    children = null,
    iconLeft,
    iconRight,
    onPress = (e) => {
        console.log('Button pressed')
    },
    disabled = false,
    active = false,
    loading = false,
    testID = "button",
    accessibilityLabel,
    accessibilityHint,
    style = {},
    ...rest // BoxProps
}: ButtonProps) => {

    const theme = useTheme<Theme>();

    // prevent new presses when loading
    const onPressHandler = loading ? () => { } : onPress;

    // track this state so that we can apply an 'active' style
    const [isPressed, setIsPressed] = useState(false);

    ///////////////////////////////////////////////
    // START SETUP DEFAULTS //
    ///////////////////////////////////////////////    

    const {
        defaults: defaultStyles,
        active: activeStyles,
        disabled: disabledStyles,
        loading: loadingStyles
    } = theme.buttonVariants[variant];

    //let variantProps = theme.buttonVariants[variant];    
    let variantProps = defaultStyles;

    ///////////////////////////////////////////////
    // END SETUP DEFAULTS //
    ///////////////////////////////////////////////

    ///////////////////////////////////////////////
    // START STATE CHECK - MERGE IN STATE STYLES //
    ///////////////////////////////////////////////

    // check for state styles to apply
    if (true === disabled) {
        // disabled state; cannot re-press button in this stage
        variantProps = deepmerge(defaultStyles, disabledStyles);
    }
    // active is the same as pressed
    else if (true === isPressed || true === active) {
        // active is when the button is persistently selected (eg pill button array)        
        variantProps = deepmerge(defaultStyles, activeStyles);
    } else if (true === loading) {
        // loading state; cannot re-press button in this stage        
        variantProps = deepmerge(defaultStyles, loadingStyles);
    }

    /////////////////////////////////////////
    // END STATE CHECK //
    /////////////////////////////////////////            

    // find the named color by token; poor mans restyle here; could use Restyle instead if Icon / ActivityIndicator was a Restyle component
    const iconStyles = { color: getMappedColorFromToken(theme, variantProps?.icon?.color) };
    const spinnerColor = getMappedColorFromToken(theme, variantProps?.spinner?.color);

    return (
        <BaseButton
            {...variantProps?.button}
            {...rest}
            style={style}
            testID={testID}
            onPress={onPressHandler}
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabel}
            accessibilityHint={accessibilityHint}
            accessibilityState={{ disabled }}
            disabled={disabled || loading}
            hitSlop={{
                top: 10,
                left: 10,
                bottom: 10,
                right: 10
            }}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}>
            {loading && <ActivityIndicator {...variantProps?.spinner} color={spinnerColor} />}
            {!loading && iconLeft && (
                <Box mr={"xxs"}>
                    <Feather name={iconLeft} {...variantProps?.icon} style={iconStyles} />
                </Box>
            )}
            {!loading && (
                <Text variant={"bold"} {...variantProps?.text}>
                    {children}
                </Text>
            )}
            {!loading && iconRight && (
                <Box ml={"xxs"}>
                    <Feather name={iconRight} {...variantProps?.icon} style={iconStyles} />
                </Box>
            )}
        </BaseButton>
    );
};

export default React.memo(Button);
