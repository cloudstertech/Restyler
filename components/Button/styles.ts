
import deepmerge from "deepmerge";
import { TextProps as RNTextProps, ActivityIndicatorProps } from "react-native";
import { TextProps, BoxProps } from "@shopify/restyle";
import { Theme } from "../../themes";
import { FontAwesome } from '@expo/vector-icons';

/**
 * Basic icons props
 */
export type ButtonIcon = {
    size?: number;
    color?: string;
    name?: keyof typeof FontAwesome.glyphMap;
}

/**
 * Ingredients to make a useful button
 */
export type ButtonStyle = {    
    text?:  RNTextProps & TextProps<Theme>;
    icon?: ButtonIcon,
    spinner?: ActivityIndicatorProps,
    button?: BoxProps<Theme>;
}

/**
 * Button elements with nested states; similar to scss style
 */
export type StatefulButton = {

    // default state of button
    defaults: ButtonStyle;

    // other various states for button
    active?: ButtonStyle;
    disabled?: ButtonStyle; 
    loading?:  ButtonStyle; 
}

/**
 * Base syle for all buttons
 */
const base: StatefulButton = {

    // default button state
    defaults: {
        text: {
            numberOfLines: 1
        },
        icon: {
            size: 24,
            color: "white"
        },        
        spinner: {
            size: "small",
            color: "primary"
        },
        button: {
            height: 50,
            borderWidth: 1,
            flexDirection: "row",
            borderRadius: "sm",
            paddingRight: "lg",
            paddingLeft: "md",
            alignItems: "center",
            justifyContent: "center"
        },
    },

    // different button states
    active: {},
    disabled: {        
        button: {
            opacity: 0.5
        }        
    },
    loading: {
        button: {
            opacity: 0.5
        }
    }
};


/**
 * Primary button; setup differences on top of base
 */
const primary: StatefulButton = deepmerge(base, {
    defaults: {
        text: {
            color: "btnPrimaryText"
        },
        icon: {
            color: "btnPrimaryText"
        },
        spinner: {
            color: "btnPrimaryText"            
        },
        button: {
            borderColor: "btnPrimaryBg",
            backgroundColor: "btnPrimaryBg"
        }
    },        
    active: {
        button: {
            backgroundColor: "btnPrimaryBgActive"
        }
    }    
});

/**
 * Secondary button; setup differences on top of base
 */
const secondary: StatefulButton = deepmerge(base, {
    defaults: {
        text: {
            color: "btnSecondaryText"
        },
        icon: {
            color: "btnSecondaryText"
        },
        spinner: {
            color: "btnSecondaryText"
        },
        button: {
            backgroundColor: "btnSecondaryBg",
            borderColor: "btnSecondaryText"
        },
    },
    active: {
        text: {
            color: "btnSecondaryText"
        },
        button: {
            borderColor: "btnSecondaryText",
            backgroundColor: "btnSecondaryBgActive"
        }
    }    
});


/**
 * Secondary button; setup differences on top of base
 */
const danger: StatefulButton = deepmerge(base, {
    defaults: {
        text: {
            color: "btnDangerText"
        },
        icon: {
            color: "btnDangerText"
        },
        spinner: {
            color: "btnDangerText"
        },
        button: {
            backgroundColor: "btnDangerBg",
            borderColor: "btnDangerBg"
        },
    },
    active: {       
        button: {
            borderColor: "btnDangerBgActive",
            backgroundColor: "btnDangerBgActive"
        }
    }    
});


/**
 * Secondary button; setup differences on top of base
 */
const success: StatefulButton = deepmerge(base, {
    defaults: {
        text: {
            color: "btnSuccessText"
        },
        icon: {
            color: "btnSuccessText"
        },
        spinner: {
            color: "btnSuccessText"
        },
        button: {
            backgroundColor: "btnSuccessBg",
            borderColor: "btnSuccessBg"
        },
    },
    active: {       
        button: {
            borderColor: "btnSuccessBgActive",
            backgroundColor: "btnSuccessBgActive"
        }
    }    
});


/**
 * Secondary button; setup differences on top of base
 */
const warning: StatefulButton = deepmerge(base, {
    defaults: {
        text: {
            color: "btnWarningText"
        },
        icon: {
            color: "btnWarningText"
        },
        spinner: {
            color: "btnWarningText"
        },
        button: {
            backgroundColor: "btnWarningBg",
            borderColor: "btnWarningBg"
        },
    },
    active: {       
        button: {
            borderColor: "btnWarningBgActive",
            backgroundColor: "btnWarningBgActive"
        }
    }    
});


// Base styling for size variants 
const small: StatefulButton = {   
    defaults: {
        text: {
            fontSize: 14,
            lineHeight: 28,
            paddingHorizontal: "xxs"
        },
        icon: {
            size: 14
        },
        spinner: {
            size: 16
        },
        button: {
            height: 35,
            paddingHorizontal: "xs",
            paddingVertical: "none"
        }
    }
};


/**
 * Size variations of the buttons
 */
const primarySmall: StatefulButton = deepmerge(primary, small);
const secondarySmall: StatefulButton = deepmerge(secondary, small);
const dangerSmall: StatefulButton = deepmerge(danger, small);
const successSmall: StatefulButton = deepmerge(success, small);
const warningSmall: StatefulButton = deepmerge(warning, small);



/**
 * Base styling for the pill buttons
 */
const pill: StatefulButton = {
    defaults: {    
        button: {
        
            //height: 44,
            alignSelf: "flex-start",
            paddingRight: "lg",
            paddingLeft: "lg",
            paddingTop: "none",
            paddingBottom: "none",

            borderTopLeftRadius: "xxl",
            borderTopRightRadius: "xxl",
            borderBottomRightRadius: "xxl",
            borderBottomLeftRadius: "xxl"
        }   
    } 
};


/**
 * Shape variations of the buttons
 */
const primaryPill: StatefulButton = deepmerge(primary, pill);
const secondaryPill: StatefulButton = deepmerge(secondary, pill);
const dangerPill: StatefulButton = deepmerge(danger, pill)
const warningPill: StatefulButton = deepmerge(warning, pill)
const successPill: StatefulButton = deepmerge(success, pill)


/**
 * Export typing
 */
export type PrimaryButton = typeof primary;
export type SecondaryButton = typeof secondary;

export type DangerButton = typeof danger;
export type SuccessButton = typeof success;
export type WarningButton = typeof warning;

export type PrimarySmallButton = typeof primarySmall;
export type SecondarySmallButton = typeof secondarySmall;

export type DangerSmallButton = typeof dangerSmall;
export type SuccessSmallButton = typeof successSmall;
export type WarningSmallButton = typeof warningSmall;

export type PrimaryPillButton = typeof primaryPill;
export type SecondaryPillButton = typeof secondaryPill;


export default {

    // main variants
    primary,
    secondary,

    danger,
    success,
    warning,
    
    // small variants
    "primary-small": primarySmall,
    "secondary-small": secondarySmall,
    "danger-small": dangerSmall,
    "success-small": successSmall,
    "warning-small": warningSmall,

    // shape variants
    "primary-pill": primaryPill,
    "secondary-pill": secondaryPill,
    "danger-pill": dangerPill,
    "success-pill": successPill,
    "warning-pill": warningPill,
};
