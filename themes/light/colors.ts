
import { ColorTokens, PaletteTokens } from "../common/colors.tokens"



// https://www.figma.com/file/W05kN81GNcfGVKltnMomiT/Finalui-mobile-PREVIEW?type=design&node-id=2-35&mode=design&t=yqoD7xqRN7Eg2EKE-0

const palette: PaletteTokens = {

    primary: '#3348FF',
    primaryDark: '#0F25E0',
    primaryLight: '#5C6CFF',
    primaryVeryLight: '#EBF1FF',

    warning: '#F68500',
    warningDark: '#CB6E00',
    warningLight: '#F99A2A',
    warningVeryLight: '#FFEBC6',

    danger: '#F32051',
    dangerDark: '#D90D3C',
    dangerLight: '#F93E6A',
    dangerVeryLight: '#FFD8E1',

    success: '#03A01C',
    successDark: '#07851B',
    successLight: '#06B722',
    successVeryLight: '#CEFDDE',

    gray900: '#181D25',
    gray800: '#404B5A',
    gray700: '#606E80',
    gray600: '#929FB1',
    gray500: '#BOBECB',
    gray400: '#C3CED7',
    gray300: '#D3DBE4',
    gray200: '#E1E5EA',
    gray100: '#EDF0F2',
    gray50: '#F6F7F9',  
}


const colors: ColorTokens = {
    // theme
    primary: "#4a89dc",
    onPrimary: "white",
    secondary: "white",
    onSecondary: "#4a89dc",

    // general
    background: "#fefefe",
    line: palette.gray300,
    border: palette.gray200,

    // text
    body: palette.gray900,
    headings: palette.gray900,
    muted: palette.gray500,   

    // Buttons
    btnPrimaryBg: palette.primary,
    btnPrimaryText: "white",
    btnPrimaryBgActive: palette.primaryDark,   
  
    btnSecondaryBg: "white",
    btnSecondaryText: palette.primary, 
    btnSecondaryBgActive: palette.primaryVeryLight,    

    btnDangerBg: palette.danger,
    btnDangerText: "white",
    btnDangerBgActive: palette.dangerDark, 
    
    btnSuccessBg: palette.success,
    btnSuccessText: "white",
    btnSuccessBgActive: palette.successDark, 

    btnWarningBg: palette.warning,
    btnWarningText: "white",
    btnWarningBgActive: palette.warningDark, 

    switchThumb: 'white',
    switchTrackOn: palette.primary,
    switchTrackOff: palette.gray200,
}

export { colors, palette };