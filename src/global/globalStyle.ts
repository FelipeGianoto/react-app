interface IColors {
    primaryDark: string;
    primaryLight: string;
    secondaryLight: string;
    titleDark: string;
    iconsBackground: string;
    titleLight: string;
    textDark: string;
    textLight: string;
    backgroundPageColor: string;
  }
  
  interface IFontFamily {
    regular: string;
    semiBold: string;
    bold: string;
  }
  
  export const COLORS: IColors = {
    primaryDark: '#008c99',
    primaryLight: '#00AEBF',
    secondaryLight: '#17B0A2',
    iconsBackground: '#EDF9F8',
    titleDark: '#008c99',
    titleLight: '#17B0A2',
    textDark: '#8992A3',
    textLight: '#8F9BB3',
    backgroundPageColor: '#F7F9FC',
  };
  
  export const FONT_FAMILY: IFontFamily = {
    regular: 'OpenSans_400Regular',
    semiBold: 'OpenSans_600SemiBold',
    bold: 'OpenSans_700Bold',
  };
  