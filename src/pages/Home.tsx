import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { motion } from 'framer-motion';
import identityImg from '../images/identity.jpg';
import webDevImg from '../images/web-dev.webp';
import socialImg from '../images//social-media.webp';
import HeroSection from '../components/HeroSection';

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const TestimonialSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  padding: theme.spacing(8, 0),
}));

const ServicesSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #fff8ed 0%, #f9fafc 100%)',
  padding: theme.spacing(10, 0),
}));

const ModernServiceCard = styled(Card)(({ theme }) => ({
  borderRadius: 24,
  boxShadow: '0 8px 32px rgba(44, 62, 80, 0.08)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  background: '#fff',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.03)',
    boxShadow: '0 16px 40px rgba(44, 62, 80, 0.16)',
  },
}));

const Home: React.FC = () => {
  const services = [
    {
      title: "Création d'identité visuelle",
      description: 'Logo, charte graphique et éléments de marque',
      image: identityImg,
    },
    {
      title: 'Développement web',
      description: 'Sites vitrine, e-commerce et applications web',
      image: webDevImg,
    },
    {
      title: 'Gestion des réseaux sociaux',
      description: 'Stratégie et contenu pour vos réseaux sociaux',
      image: socialImg,
    },
  ];

  return (
    <Box>
      <HeroSection />
      <Box id="about">
        {/* About section content will be rendered here if needed for one-page scroll */}
      </Box>
      <Box id="services">
        <ServicesSection>
          <Container maxWidth="lg">
            <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 800, fontSize: { xs: '2rem', md: '2.75rem' }, letterSpacing: 1, mb: 6, fontFamily: 'inherit' }}>
              Nos Services
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 4, 
              mt: 4,
              justifyContent: 'center',
              '& > *': {
                flex: { xs: '1 1 100%', md: '1 1 calc(33.33% - 32px)' },
                minWidth: { xs: '100%', md: 'calc(33.33% - 32px)' }
              }
            }}>
              {services.map((service, index) => (
                <Box key={index} sx={{ width: { xs: '100%', md: 'calc(33.33% - 32px)' } }}>
                  <ModernServiceCard>
                    <CardMedia
                      component="img"
                      height="200"
                      image={service.image}
                      alt={service.title}
                      sx={{ objectFit: 'cover', borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 700, fontSize: '1.5rem', fontFamily: 'inherit' }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.1rem', fontFamily: 'inherit' }}>
                        {service.description}
                      </Typography>
                    </CardContent>
                  </ModernServiceCard>
                </Box>
              ))}
            </Box>
          </Container>
        </ServicesSection>
      </Box>
      <Box id="portfolio">
        {/* Portfolio section content will be rendered here if needed for one-page scroll */}
      </Box>
      <Box id="blog">
        {/* Blog section content will be rendered here if needed for one-page scroll */}
      </Box>
      <Box id="contact">
        {/* Contact section content will be rendered here if needed for one-page scroll */}
      </Box>
      <TestimonialSection>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Ils nous font confiance
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4, 
            mt: 4,
            '& > *': {
              width: { xs: '100%', md: 'calc(33.33% - 32px)' }
            }
          }}>
            {[
              {
                quote: "CoopCom a transformé notre présence en ligne",
                author: "Meriem Bougader",
                role: "Responsable Marketing",
              },
              {
                quote: "Une équipe professionnelle et à l'écoute",
                author: "Drim Mohamed",
                role: "Fondateur",
              },
              {
                quote: "Des solutions adaptées à nos besoins",
                author: "Rahma Abdelouaret",
                role: "Team Leader",
              },
            ].map((testimonial, index) => (
              <Box key={index} sx={{ width: { xs: '100%', md: 'calc(33.33% - 32px)' } }}>
                <Card>
                  <CardContent>
                    <Typography variant="body1" paragraph>
                      "{testimonial.quote}"
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      {testimonial.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.role}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </TestimonialSection>
    </Box>
  );
};

export default Home; 