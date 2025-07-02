import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  TextField,
  InputAdornment,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import coopcomLogo from '../images/logo.png';
import homeBackgroundImg from '../images/home background.jpg';

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: 'linear-gradient(135deg, #fffbe6 0%, #f5e9da 100%)',
}));

const ModernCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255,255,255,0.92)',
  borderRadius: 32,
  boxShadow: '0 8px 32px rgba(44, 62, 80, 0.10)',
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  fontFamily: 'Poppins, Lato, Open Sans, Arial, sans-serif',
}));

const CenteredCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255,255,255,0.97)',
  borderRadius: 32,
  boxShadow: '0 8px 32px rgba(44, 62, 80, 0.10)',
  padding: theme.spacing(6, 4),
  maxWidth: 700,
  margin: '0 auto',
  textAlign: 'center',
  fontFamily: 'Poppins, Lato, Open Sans, Arial, sans-serif',
}));

const BlogCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255,255,255,0.97)',
  borderRadius: 24,
  boxShadow: '0 4px 24px rgba(44, 62, 80, 0.10)',
  padding: theme.spacing(3, 3, 2, 3),
  transition: 'transform 0.25s, box-shadow 0.25s',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0 12px 32px rgba(255,183,77,0.18)',
  },
  fontFamily: 'Poppins, Lato, Open Sans, Arial, sans-serif',
}));

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

const GlassySectionHeader = ({ title, description }: { title: string; description: string }) => (
  <Box
    sx={{
      position: 'relative',
      width: '100%',
      minHeight: { xs: 340, md: 420 },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      mb: 8,
      overflow: 'hidden',
    }}
  >
    <Box
      component="img"
      src={homeBackgroundImg}
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

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();

  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'Communication Digitale Éthique',
      excerpt: 'Découvrez comment adopter une communication digitale responsable et éthique pour votre PME ou association.',
      image: '/images/blog/ethique.jpg',
      category: 'Conseils',
      date: '15 Mars 2024',
      author: 'Marie Martin',
    },
    {
      id: 2,
      title: 'Comment gérer votre page Facebook ?',
      excerpt: 'Astuces pratiques pour animer et développer votre communauté sur Facebook.',
      image: '/images/blog/facebook.jpg',
      category: 'Réseaux Sociaux',
      date: '10 Mars 2024',
      author: 'Jean Dupont',
    },
    {
      id: 3,
      title: 'Optimiser son SEO en 5 étapes',
      excerpt: 'Guide pratique pour améliorer le référencement naturel de votre site web.',
      image: '/images/blog/seo.jpg',
      category: 'SEO',
      date: '5 Mars 2024',
      author: 'Pierre Durand',
    },
    {
      id: 4,
      title: 'Créer un site web accessible',
      excerpt: 'Les bonnes pratiques pour rendre votre site web accessible à tous.',
      image: '/images/blog/accessibilite.jpg',
      category: 'Web',
      date: '1 Mars 2024',
      author: 'Salima Fahmi',
    },
    {
      id: 5,
      title: "L'importance de l'identité visuelle",
      excerpt: "Pourquoi une identité visuelle forte est essentielle pour votre marque.",
      image: '/images/blog/identite.jpg',
      category: 'Design',
      date: '25 Février 2024',
      author: 'Younes ElKiram',
    },
    {
      id: 6,
      title: 'Stratégies de contenu pour Instagram',
      excerpt: 'Boostez votre présence sur Instagram avec des stratégies de contenu efficaces.',
      image: '/images/blog/instagram.jpg',
      category: 'Réseaux Sociaux',
      date: '20 Février 2024',
      author: 'Cissé Gaoussou',
    },
    {
      id: 7,
      title: 'Pourquoi former vos équipes au digital ?',
      excerpt: 'La formation digitale, un levier de croissance pour les PME et associations.',
      image: '/images/blog/formation.jpg',
      category: 'Conseils',
      date: '15 Février 2024',
      author: 'Rahma Abdelouaret',
    },
    {
      id: 8,
      title: 'Les tendances du web design en 2024',
      excerpt: "Un aperçu des dernières tendances en matière de design web et d'expérience utilisateur.",
      image: '/images/blog/web-design.jpg',
      category: 'Design',
      date: '10 Février 2024',
      author: 'Meriem Bougader',
    },
  ];

  const categories = [
    'Tous',
    'Marketing Digital',
    'Design',
    'SEO',
    'Développement Web',
    'Réseaux Sociaux',
  ];

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box>
      <GlassySectionHeader title="Blog" description="Découvrez nos conseils, actualités et stratégies pour réussir votre communication digitale." />
      <Section sx={{ backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, mt: 2 }}>
            {filteredPosts.map((post, idx) => (
              <BlogCard key={idx}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {post.excerpt}
                  </Typography>
                </CardContent>
              </BlogCard>
            ))}
          </Box>
        </Container>
      </Section>

      <Section sx={{ backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
              Restez informé
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Inscrivez-vous à notre newsletter pour recevoir nos derniers articles
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2, borderRadius: 24, fontWeight: 700, fontFamily: 'inherit', boxShadow: '0 4px 24px rgba(244,163,0,0.12)' }}
            >
              S'inscrire à la newsletter
            </Button>
          </Box>
        </Container>
      </Section>
    </Box>
  );
};

export default Blog; 