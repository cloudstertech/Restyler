
type ColorTokens = {

     // brand
     primary: string;
     onPrimary: string;
     secondary: string;
     onSecondary: string;

     background: string;
     line: string;
     border: string;

     // text
     body: string;
     headings: string;
     muted: string;

     // buttons    
    btnPrimaryBg: string;
    btnPrimaryText: string;
    btnPrimaryBgActive: string;    

    btnSecondaryBg: string;
    btnSecondaryText: string;
    btnSecondaryBgActive: string;        

    btnDangerBg: string;
    btnDangerText: string;
    btnDangerBgActive: string;

    btnSuccessBg: string;
    btnSuccessText: string;
    btnSuccessBgActive: string;

    btnWarningBg: string;
    btnWarningText: string;
    btnWarningBgActive: string;

    switchThumb: string;
    switchTrackOn: string;
    switchTrackOff: string;
}


type PaletteTokens = {

    primary: string;
    primaryDark: string;
    primaryLight: string;
    primaryVeryLight: string;

    warning: string;
    warningDark: string;
    warningLight: string;
    warningVeryLight: string;

    danger: string;
    dangerDark: string;
    dangerLight: string;
    dangerVeryLight: string;

    success: string;
    successDark: string;
    successLight: string;
    successVeryLight: string;


    gray900: string;
    gray800: string;
    gray700: string;
    gray600: string;
    gray500: string;
    gray400: string;
    gray300: string;
    gray200: string;
    gray100: string;
    gray50: string;

}


export type { ColorTokens, PaletteTokens };