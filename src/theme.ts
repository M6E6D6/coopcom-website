import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F4A300', // warm orange/yellow from logo
      contrastText: '#2D1C0B', // deep brown/black for text
    },
    secondary: {
      main: '#F9D77E', // pale yellow accent
      contrastText: '#2D1C0B',
    },
    background: {
      default: '#FFF8ED', // soft cream background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2D1C0B', // deep brown/black
      secondary: '#F4A300', // accent orange
    },
    warning: {
      main: '#F4A300',
    },
    info: {
      main: '#F9D77E',
    },
  },
  shape: {
    borderRadius: 24, // more modern, rounded corners
  },
  typography: {
    fontFamily: 'Inter, Montserrat, Arial, sans-serif',
    h1: { fontWeight: 800, letterSpacing: 2 },
    h2: { fontWeight: 700, letterSpacing: 1.5 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 500 },
    button: { borderRadius: 24, textTransform: 'none', fontWeight: 700 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          fontWeight: 700,
          fontSize: '1.1rem',
          boxShadow: '0 4px 24px rgba(244, 163, 0, 0.08)',
        },
        containedPrimary: {
          backgroundColor: '#F4A300',
          color: '#2D1C0B',
          '&:hover': {
            backgroundColor: '#d48c00',
            color: '#fff',
          },
        },
        outlinedPrimary: {
          borderColor: '#F4A300',
          color: '#F4A300',
          '&:hover': {
            backgroundColor: '#FFF8ED',
            borderColor: '#d48c00',
            color: '#d48c00',
          },
        },
      },
    },
  },
});

export default theme; 