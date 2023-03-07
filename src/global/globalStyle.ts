interface IColors {
    backgroundPageColor: string;
    titleBackGround: string;
    backgroundButton: string;
  }
  
  interface IFontFamily {
    regular: string;
    semiBold: string;
    bold: string;
  }
  
  export const cores: IColors = {
    backgroundPageColor: '#1D1E26',
    titleBackGround: '#4382F0',
    backgroundButton: '#4382F0'
  };
  
  export const FONT_FAMILY: IFontFamily = {
    regular: 'OpenSans_400Regular',
    semiBold: 'OpenSans_600SemiBold',
    bold: 'OpenSans_700Bold',
  };
  