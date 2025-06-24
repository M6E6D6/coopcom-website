import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import identityImg from '../images/identity.jpg';
import webDevImg from '../images/web-dev.webp';
import socialImg from '../images/social-media.webp';
import contentIcon from '../images/influencer-from-south-africa-vlogging-while-self-isolating.webp';
import trainingIcon from '../images/young-women-recording-podcast-in-studio.webp';
import seoIcon from '../images/Logo_Google_Analytics.png';

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: 'linear-gradient(135deg, #fffbe6 0%, #f5e9da 100%)',
}));

const ModernServiceCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255,255,255,0.85)',
  borderRadius: 32,
  boxShadow: '0 12px 40px rgba(255,183,77,0.13)',
  border: '1.5px solid #ffb74d',
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  transition: 'transform 0.2s, box-shadow 0.2s',
  fontFamily: 'inherit',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.03)',
    boxShadow: '0 16px 40px rgba(255,183,77,0.16)',
  },
}));

const Services: React.FC = () => {
  const services = [
    {
      title: 'Création d\'identité visuelle',
      description: 'Donnez vie à votre marque avec une identité visuelle unique et professionnelle.',
      image: identityImg,
      features: [
        'Création de logo',
        'Charte graphique complète',
        'Design de cartes de visite',
        'Templates pour réseaux sociaux',
      ],
      price: 'À partir de 1500€',
    },
    {
      title: 'Développement web',
      description: 'Sites web modernes et performants adaptés à vos besoins.',
      image: webDevImg,
      features: [
        'Sites vitrine',
        'E-commerce',
        'Applications web',
        'Optimisation SEO',
      ],
      price: 'À partir de 2000€',
    },
    {
      title: 'Gestion des réseaux sociaux',
      description: 'Stratégie et contenu pour une présence sociale efficace.',
      image: socialImg,
      features: [
        'Stratégie de contenu',
        'Création de posts',
        'Community management',
        'Analyse de performance',
      ],
      price: 'À partir de 800€/mois',
    },
    {
      title: 'Création de contenu',
      description: 'Photo, vidéo, rédaction pour tous vos supports digitaux',
      image: contentIcon,
      features: [
        'Photographie professionnelle',
        'Production vidéo',
        'Rédaction web',
        'Création de visuels',
      ],
      price: 'Sur devis',
    },
    {
      title: 'Formation & Support digital',
      description: 'Ateliers, accompagnement et support pour maîtriser le digital',
      image: trainingIcon,
      features: [
        'Formations personnalisées',
        'Support technique',
        'Ateliers pratiques',
        'Accompagnement individuel',
      ],
      price: 'Sur devis',
    },
    {
      title: 'SEO & Analytics',
      description: 'Optimisation du référencement et analyse de performance',
      image: seoIcon,
      features: [
        'Audit SEO',
        'Optimisation technique',
        'Suivi des performances',
        'Rapports détaillés',
      ],
      price: 'Sur devis',
    },
  ];

  return (
    <Box>
      <Section sx={{ backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ color: '#2d1c10' }}>
              Nos Services
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{ color: '#7a5c3e' }}>
              Des solutions digitales sur mesure pour votre entreprise
            </Typography>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4,
            '& > *': {
              width: { xs: '100%', md: 'calc(33.33% - 32px)' }
            }
          }}>
            {services.map((service, index) => (
              <Box key={index} sx={{ width: { xs: '100%', md: 'calc(33.33% - 32px)' } }}>
                <ModernServiceCard>
                  <CardContent>
                    <Typography variant="h4" component="h2" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {service.description}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                    >
                      En savoir plus
                    </Button>
                  </CardContent>
                </ModernServiceCard>
              </Box>
            ))}
          </Box>
        </Container>
      </Section>

      <Section sx={{ backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Besoin d'une solution personnalisée ?
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Contactez-nous pour discuter de votre projet
          </Typography>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mr: 2 }}
            >
              Nous contacter
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
            >
              Voir nos réalisations
            </Button>
          </Box>
        </Container>
      </Section>
    </Box>
  );
};

export default Services; 