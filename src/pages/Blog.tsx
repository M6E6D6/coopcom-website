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

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: 'linear-gradient(135deg, #fffbe6 0%, #f5e9da 100%)',
}));

const BlogCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255,255,255,0.85)',
  borderRadius: 32,
  boxShadow: '0 12px 40px rgba(255,183,77,0.13)',
  border: '1.5px solid #ffb74d',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 16px 40px rgba(255,183,77,0.16)',
  },
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
      author: 'Younes EL KIRAM',
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
      <Section sx={{ backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '3rem' }, letterSpacing: 2, color: '#2d1c10', fontFamily: 'inherit' }}>
              Blog
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{ mb: 4, fontFamily: 'inherit' }}>
              Conseils et actualités du digital
            </Typography>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 66.66%' }, minWidth: { xs: '100%', md: '66.66%' } }}>
              <TextField
                fullWidth
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 33.33%' }, minWidth: { xs: '100%', md: '33.33%' } }}>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {categories.map((category) => (
                  <Chip
                    key={category}
                    label={category}
                    onClick={() => setSearchQuery(category)}
                    color={searchQuery === category ? 'primary' : 'default'}
                    sx={{
                      fontWeight: 600,
                      fontFamily: 'inherit',
                      borderRadius: 2,
                      background: searchQuery === category ? theme.palette.primary.main : theme.palette.background.paper,
                      color: searchQuery === category ? theme.palette.primary.contrastText : '#7a5c3e',
                      boxShadow: searchQuery === category ? '0 2px 8px rgba(244,163,0,0.12)' : 'none',
                      transition: 'background 0.2s, color 0.2s',
                      '&:hover': {
                        background: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>

          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4,
            '& > *': {
              width: { xs: '100%', md: 'calc(33.33% - 32px)' }
            }
          }}>
            {filteredPosts.map((post) => (
              <Box key={post.id} sx={{ width: { xs: '100%', md: 'calc(33.33% - 32px)' } }}>
                <BlogCard sx={{
                  borderRadius: 32,
                  boxShadow: '0 8px 32px rgba(244, 163, 0, 0.08)',
                  background: 'rgba(255,255,255,0.95)',
                  color: '#2d1c10',
                  fontFamily: 'inherit',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.03)',
                    boxShadow: '0 16px 40px rgba(44, 62, 80, 0.16)',
                  },
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.image}
                    alt={post.title}
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {post.excerpt}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="caption" color="text.secondary">
                        {post.date}
                      </Typography>
                      <Typography variant="caption" color="primary">
                        {post.category}
                      </Typography>
                    </Box>
                  </CardContent>
                </BlogCard>
              </Box>
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