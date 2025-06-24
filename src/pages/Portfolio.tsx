import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Tabs,
  Tab,
} from '@mui/material';
import { motion } from 'framer-motion';

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: 'linear-gradient(135deg, #fffbe6 0%, #f5e9da 100%)',
}));

const ModernProjectCard = styled(Card)(({ theme }) => ({
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

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
}

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Site E-commerce',
      description: 'Création d\'une boutique en ligne pour une marque de mode',
      image: '/images/portfolio/ecommerce.jpg',
      category: 'web',
      tags: ['E-commerce', 'React', 'Node.js'],
    },
    {
      id: 2,
      title: 'Identité Visuelle',
      description: 'Refonte complète de l\'identité visuelle d\'une startup',
      image: '/images/identity.jpg',
      category: 'design',
      tags: ['Branding', 'Logo', 'Charte graphique'],
    },
    {
      id: 3,
      title: 'Application Mobile',
      description: 'Développement d\'une application de gestion de tâches',
      image: '/images/portfolio/mobile.jpg',
      category: 'mobile',
      tags: ['React Native', 'Firebase', 'UI/UX'],
    },
  ];

  const categories = [
    { value: 'all', label: 'Tous' },
    { value: 'web', label: 'Web' },
    { value: 'design', label: 'Design' },
    { value: 'mobile', label: 'Mobile' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

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
              Nos Réalisations
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{ color: '#7a5c3e' }}>
              Découvrez nos projets et réalisations
            </Typography>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <Tabs
              value={selectedCategory}
              onChange={(_, newValue) => setSelectedCategory(newValue)}
              centered
            >
              {categories.map((category) => (
                <Tab
                  key={category.value}
                  value={category.value}
                  label={category.label}
                />
              ))}
            </Tabs>
          </Box>

          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4,
            '& > *': {
              width: { xs: '100%', md: 'calc(33.33% - 32px)' }
            }
          }}>
            {filteredProjects.map((project) => (
              <Box key={project.id} sx={{ width: { xs: '100%', md: 'calc(33.33% - 32px)' } }}>
                <ModernProjectCard>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          onClick={() => setSelectedCategory(tag)}
                          color={selectedCategory === tag ? 'primary' : 'default'}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </ModernProjectCard>
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
    </Box>
  );
};

export default Portfolio; 