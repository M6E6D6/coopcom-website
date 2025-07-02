import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import coopcomLogo from '../images/logo.png';
import portfolioBackgroundImg from '../images/portfolio background.jpg';

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: 'linear-gradient(135deg, #fffbe6 0%, #f5e9da 100%)',
}));

const CenteredCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255,255,255,0.97)',
  borderRadius: 32,
  boxShadow: '0 8px 32px rgba(44, 62, 80, 0.10)',
  padding: theme.spacing(6, 4),
  maxWidth: 700,
  margin: '0 auto',
  textAlign: 'center',
  fontFamily: 'Poppins, Lato, Open Sans, Arial, sans-serif',
}));

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
}

const GlassySectionHeader = ({ title, description }: { title: string; description: string }) => (
  <Box sx={{ position: 'relative', width: '100%', minHeight: { xs: 340, md: 420 }, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 8, overflow: 'hidden' }}>
    <Box
      component="img"
      src={portfolioBackgroundImg}
      alt="Background"
      loading="lazy"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: 0,
        filter: 'brightness(0.55) blur(1.5px)',
      }}
    />
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
    >
      <div
        style={{
          background: 'rgba(255,255,255,0.7)',
          boxShadow: '0 8px 32px rgba(44, 62, 80, 0.13)',
          borderRadius: '2.5rem',
          padding: '2.5rem 2rem',
          maxWidth: 700,
          width: '100%',
          position: 'relative',
          textAlign: 'center',
          backdropFilter: 'blur(18px)',
        }}
      >
        <img
          src={coopcomLogo}
          alt="CoopCom Logo"
          style={{ width: 180, height: 180, objectFit: 'contain', marginBottom: 16, opacity: 0.7, display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        />
        <Typography variant="h2" sx={{ color: '#2d1c10', fontWeight: 800, fontFamily: 'Poppins, Lato, Open Sans, Arial, sans-serif', mb: 2 }}>{title}</Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 4 }}>
          {description}
        </Typography>
      </div>
    </motion.div>
  </Box>
);

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Identité visuelle pour COOPCOM',
      description: "Création de l\'identité visuelle complète de la coopérative COOPCOM, incluant logo, charte graphique et supports de communication.",
      image: require('../images/identity.jpg'),
      category: 'design',
      tags: ['Branding', 'Logo', 'Charte graphique'],
    },
    {
      id: 2,
      title: 'Site web vitrine pour une PME',
      description: "Développement d\'un site web moderne et responsive pour une PME locale afin d\'améliorer sa présence en ligne.",
      image: require('../images/web-dev.webp'),
      category: 'web',
      tags: ['Web', 'React', 'Responsive'],
    },
    {
      id: 3,
      title: 'Gestion des réseaux sociaux',
      description: 'Stratégie, création de contenu et animation des réseaux sociaux pour une association culturelle.',
      image: require('../images/social-media.webp'),
      category: 'social',
      tags: ['Social Media', 'Community Management'],
    },
    {
      id: 4,
      title: "Développement d\'une application mobile",
      description: "Application mobile pour la gestion d\'événements et d\'inscriptions, avec notifications et interface intuitive.",
      image: require('../images/tp-dev-web-web-mobile.jpeg'),
      category: 'mobile',
      tags: ['Mobile', 'React Native', 'UX/UI'],
    },
    {
      id: 5,
      title: 'Campagne de sensibilisation digitale',
      description: "Conception et diffusion d\'une campagne digitale pour sensibiliser à une cause sociale.",
      image: require('../images/COOPCOM.jpg'),
      category: 'campaign',
      tags: ['Campagne', 'Digital', 'Communication'],
    },
    {
      id: 6,
      title: 'Formation en communication digitale',
      description: "Ateliers et formations pour renforcer les compétences en communication digitale des membres d\'une coopérative.",
      image: require('../images/young-women-recording-podcast-in-studio.webp'),
      category: 'formation',
      tags: ['Formation', 'Digital', 'Atelier'],
    },
  ];

  return (
    <>
      <GlassySectionHeader title="Nos Réalisations" description="Découvrez nos projets réalisés et les stratégies digitales qui ont fait leur succès." />
      <Section>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
              gap: 5,
              mt: 2,
            }}
          >
            {projects.map((project) => (
              <Box
                key={project.id}
                sx={{
                  background: 'rgba(255,255,255,0.97)',
                  borderRadius: 4,
                  boxShadow: '0 4px 24px rgba(44, 62, 80, 0.10)',
                  overflow: 'hidden',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.03)',
                    boxShadow: '0 8px 32px rgba(44, 62, 80, 0.18)',
                  },
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{ width: '100%', height: 180, objectFit: 'cover' }}
                />
                <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#2d1c10' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flex: 1 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
                    {project.tags.map((tag, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          background: '#ffb74d',
                          color: '#fff',
                          borderRadius: 2,
                          px: 1.5,
                          py: 0.5,
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: 0.5,
                        }}
                      >
                        {tag}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Section>
      <Section sx={{ backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
              Vous avez un projet en tête ?
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Contactez-nous pour discuter de votre projet
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
            >
              Nous contacter
            </Button>
          </Box>
        </Container>
      </Section>
    </>
  );
};

export default Portfolio; 