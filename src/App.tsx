import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import theme from './theme';
import { useState, useEffect } from 'react';
import coopcomLogo from './images/logo.png';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import landingBg from './images/landingpage.jpeg';

const SplashScreen = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2000,
  overflow: 'hidden',
}));

const SplashLogo = styled(motion.img)(() => ({
  width: 500,
  height: 500,
  objectFit: 'contain',
  marginBottom: 48,
}));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppWithSplash() {
  const [showSplash, setShowSplash] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const handleEnter = () => {
    setShowSplash(false);
    if (location.pathname !== '/') {
      navigate('/');
    }
  };
  if (showSplash) {
    return (
      <SplashScreen>
        <Box
          component="img"
          src={landingBg}
          alt="Landing Background"
          loading="lazy"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            zIndex: 0,
            filter: 'brightness(0.6) blur(1.5px)',
          }}
        />
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', bgcolor: 'rgba(0,0,0,0.25)', zIndex: 1 }} />
        <Box sx={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SplashLogo
            src={coopcomLogo}
            alt="CoopCom Logo"
            loading="lazy"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: [0.7, 1.1, 1], opacity: 1, y: [0, -18, 0] }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], times: [0, 0.7, 1], repeat: Infinity, repeatType: 'reverse', repeatDelay: 1.5 }}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ fontSize: '1.5rem', px: 6, py: 2, borderRadius: 8, fontWeight: 700, mt: 2 }}
            onClick={handleEnter}
          >
            Enter
          </Button>
        </Box>
      </SplashScreen>
    );
  }
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainLayout>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <AppWithSplash />
      </Router>
    </ThemeProvider>
  );
}

export default App;
