import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../images/logo.png';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#fff',
  color: theme.palette.text.primary,
  boxShadow: '0 4px 24px rgba(44, 62, 80, 0.08)',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 1100,
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: 40,
  padding: '0 2rem',
  background: '#fff',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginLeft: theme.spacing(3),
  fontWeight: 600,
  fontSize: '1.1rem',
  borderRadius: 10,
  padding: '5px 24px',
  transition: 'background 0.2s, color 0.2s',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
}));

const Footer = styled('footer')(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  padding: theme.spacing(4, 0),
  marginTop: 'auto',
}));

interface MainLayoutProps {
  children: React.ReactNode;
}

interface GlassySectionHeaderProps {
  title: string;
  subtitle: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <StyledAppBar position="static">
        <Container maxWidth="lg" sx={{ py: 1 }}>
          <StyledToolbar>
            <Box sx={{ position: 'relative', height: 40, width: 120, overflow: 'visible' }}>
              <img
                src={logo}
                alt="CoopCom Logo"
                style={{
                  position: 'absolute',
                  height: 100,
                  top: '50%',
                  left: 0,
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  pointerEvents: 'auto',
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', height: 40 }}>
              <RouterLink to="/" style={{ textDecoration: 'none' }}>
                <NavButton>Accueil</NavButton>
              </RouterLink>
              <RouterLink to="/about" style={{ textDecoration: 'none' }}>
                <NavButton>À propos</NavButton>
              </RouterLink>
              <RouterLink to="/services" style={{ textDecoration: 'none' }}>
                <NavButton>Services</NavButton>
              </RouterLink>
              <RouterLink to="/portfolio" style={{ textDecoration: 'none' }}>
                <NavButton>Réalisations</NavButton>
              </RouterLink>
              <RouterLink to="/blog" style={{ textDecoration: 'none' }}>
                <NavButton>Blog</NavButton>
              </RouterLink>
              <RouterLink to="/contact" style={{ textDecoration: 'none' }}>
                <NavButton>Contact</NavButton>
              </RouterLink>
            </Box>
          </StyledToolbar>
        </Container>
      </StyledAppBar>

      <Box component="main" sx={{ flexGrow: 1, paddingTop: { xs: '4rem', md: '6rem' } }}>
        {children}
      </Box>

      <Footer>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              © 2024 CoopCom. Tous droits réservés.
            </Typography>
            <Box>
              <RouterLink to="/mentions-legales" style={{ textDecoration: 'none' }}>
                <NavButton>Mentions légales</NavButton>
              </RouterLink>
              <RouterLink to="/politique-confidentialite" style={{ textDecoration: 'none' }}>
                <NavButton>Politique de confidentialité</NavButton>
              </RouterLink>
            </Box>
          </Box>
        </Container>
      </Footer>
    </Box>
  );
};

export default MainLayout; 