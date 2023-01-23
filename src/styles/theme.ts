const breakpoints = ['320px', '768px', '1024px', '1280px', '1508px', '295px'];

const getBreakpoints = () => ({
  sm: breakpoints[0],
  md: breakpoints[1],
  lg: breakpoints[2],
  xl: breakpoints[3],
  xxl: breakpoints[4],
  print: breakpoints[5],
});

const themes = {
  light: {
    colors: {
      primary: 'red',
      secondary: 'black',
    },
    font: {
      size: {
        sm: '1.1rem',
        md: '20px',
        lg: '36px',
      },
    },
  },
  competidaily: {
    breakpoints: [...breakpoints],
    blur: {
      default: '5px',
    },
    maxWidth: {
      fluid: '100%',
      xs: '320px',
      sm: '360px',
      md: '405px',
      lg: '819px',
      fixed: '1508px',
    },
    colors: {
      lupino: '#333399',
      jasmin: '#fafafa',
      caralluma: '#333333',
      dahlia: '#ff6666',
      agapanto: '#dfe1ec',
      jade: '#33cccc',
      infoSuccess: {
        primary: '#214739',
        secondary: '#66b79a',
      },
      infoAttention: {
        primary: '#ffaa00',
        secondary: '#ffe285',
      },
      infoError: {
        primary: '#ee5135',
        secondary: '#3d1b1b',
      },
    },
    font: {
      size: {
        xxxs: '0.65rem',
        xxs: '0.75rem',
        xs: '0.875rem',
        sm: '1rem',
        md: '1.25rem',
        lg: '2rem',
      },
      weight: {
        bold: 'bold',
        normal: 'normal',
        heavy: '700',
        medium: '500',
        light: '300',
      },
      family: 'Roboto',
    },
    spacings: {
      xxxxs: '.125rem',
      xxxs: '.25rem',
      xxs: '.5rem',
      xs: '.75rem',
      sm: '1rem',
      md: '1.25rem',
      lg: '1.5rem',
      xl: '2rem',
      xxl: '2.5rem',
      xxxl: '7.5rem',
    },
    paddings: {
      xxxs: '2px',
      xxs: '4px',
      xs: '8px',
      md: '12px',
      lg: '18px',
      xl: '24px',
      xxl: '32px',
      xxxl: '50px',
    },
    borders: {
      type: {
        solid: 'solid',
      },
      size: {
        xs: '1px',
        sm: '2px',
      },
      radius: {
        xxxs: '2px',
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        xxl: '28px',
      },
    },
  },
};

const theme = {
  ...themes.competidaily,
  typography: {
    fontFamily: ['gilroymedium'],
  },
};


export { theme, themes, getBreakpoints };
