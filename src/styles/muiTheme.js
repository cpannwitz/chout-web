import { createMuiTheme } from '@material-ui/core/styles'
import {
  red,
  deepPurple,
  indigo,
  green,
  lightGreen,
  yellow,
  orange,
  grey,
  blueGrey,
  // amber,
  // blue,
  // brown,
  // common,
  // cyan,
  // deepOrange,
  // lightBlue,
  // lime,
  // pink,
  // purple,
  // teal,
} from '@material-ui/core/colors'

export const muiTheme = createMuiTheme({
  palette: {
    common: {
      black: '#29323C',
      white: '#FFFCFF',
    },
    background: {
      paper: '#ffffff',
      default: '#FFFCFF',
    },
    primary: {
      light: '#a797e8',
      main: '#6950cf',
      dark: '#2e0fac',
      A100: '#d6cdf6',
      A200: '#c1b5f0',
      A300: '#a797e8',
      A400: '#8974dd',
      A500: '#6950cf',
      A600: '#4a2cbf',
      A700: '#2e0fac',
      A800: '#1f0099',
      A900: '#1A007F',
    },
    secondary: {
      light: '#e897ba',
      main: '#cf5087',
      dark: '#ac0f53',
      A100: '#f6cddf',
      A200: '#f0b5cf',
      A300: '#e897ba',
      A400: '#dd74a2',
      A500: '#cf5087',
      A600: '#bf2c6c',
      A700: '#ac0f53',
      A800: '#990042',
      A900: '#820038',
    },
    gradient: {
      primary: 'linear-gradient(135deg, #bf2c6c 0%, #6950cf 100%)',
    },
    error: {
      light: '#E86055',
      main: '#E34234',
      dark: '#A62217',
    },
    warning: {
      light: '#F8CD4A',
      main: '#F6C324',
      dark: '#BA8F08',
    },
    success: {
      light: '#5ADF1B',
      main: '#4CBB17',
      dark: '#2C6D0D',
    },

    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    all: {
      red,
      deepPurple,
      indigo,
      green,
      lightGreen,
      yellow,
      orange,
      grey,
      blueGrey,
      // amber,
      // blue,
      // brown,
      // common,
      // cyan,
      // deepOrange,
      // lightBlue,
      // lime,
      // pink,
      // purple,
      // teal,
    },
  },

  typography: {
    fontSize: 14,
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeightMedium: 700,
    fontWeightRegular: 400,
    fontWeightLight: 300,
  },
  overrides: {
    MuiDialog: {
      paper: {
        overflowY: 'visible',
        minWidth: '40vw',
        minHeight: '10rem',
      },
    },
    MuiDialogContent: {
      root: {
        overflowY: 'visible',
      },
    },
  },
})

console.log('LOG | muiTheme', muiTheme)
