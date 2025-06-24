import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import { motion } from 'framer-motion';

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: 'linear-gradient(135deg, #fffbe6 0%, #f5e9da 100%)',
}));

const ModernTeamMemberCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255,255,255,0.85)',
  borderRadius: 32,
  boxShadow: '0 12px 40px rgba(255,183,77,0.13)',
  border: '1.5px solid #ffb74d',
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  transition: 'transform 0.2s, box-shadow 0.2s',
  fontFamily: 'Poppins, Lato, Open Sans, Arial, sans-serif',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.03)',
    boxShadow: '0 24px 60px rgba(255,183,77,0.22)',
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
  marginBottom: theme.spacing(2),
}));

const ModernValueCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255,255,255,0.85)',
  borderRadius: 32,
  boxShadow: '0 12px 40px rgba(255,183,77,0.13)',
  border: '1.5px solid #ffb74d',
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  fontFamily: 'Poppins, Lato, Open Sans, Arial, sans-serif',
}));

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const About: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Drim Mohamed',
      role: 'Fondateur & Directeur',
      image: '/images/team/jean.jpg',
      description: 'Plus de 15 ans d\'expérience dans le développement web et la gestion de projets.',
    },
    {
      name: 'Younes EL KIRAM',
      role: 'Directeur Créative',
      image: '/images/team/marie.jpg',
      description: 'Spécialiste en design d\'interface et expérience utilisateur.',
    },
    {
      name: 'Cissé Gaoussou',
      role: 'Designer',
      image: '/images/team/pierre.jpg',
      description: 'Expert en design graphique et identité visuelle.',
    },
    {
      name: 'Rahma Abdelouaret',
      role: 'Team Leader',
      image: '/images/team/pierre.jpg',
      description: 'Experte en gestion de projet et coordination d\'équipe.',
    },
    {
      name: 'Salima Fahmi',
      role: 'Community Manager',
      image: '/images/team/pierre.jpg',
      description: 'Spécialiste en gestion des réseaux sociaux et stratégie de contenu.',
    },
    {
      name: 'Meriem Bougader',
      role: 'Responsable Marketing',
      image: '/images/team/pierre.jpg',
      description: 'Experte en stratégie marketing et communication digitale.',
    },
    {
      name: 'Hicham Saïdi',
      role: 'Lead Developer',
      image: '/images/team/pierre.jpg',
      description: 'Expert en développement web et architecture logicielle.',
    },
    {
      name: 'Mohamed El Ouafi',
      role: 'Developer',
      image: '/images/team/pierre.jpg',
      description: 'Développeur full-stack passionné par les nouvelles technologies.',
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Nous repoussons les limites du possible pour créer des solutions innovantes.',
    },
    {
      title: 'Collaboration',
      description: 'Nous croyons en la force du travail d\'équipe et de la coopération.',
    },
    {
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet que nous entreprenons.',
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
            <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ color: '#2d1c10', fontWeight: 800, fontFamily: 'Poppins, Lato, Open Sans, Arial, sans-serif' }}>
              Notre Histoire
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Fondée en 2020, CoopCom est née de la vision de créer une entreprise digitale
              qui combine innovation technologique et valeurs humaines.
            </Typography>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ color: '#2d1c10', fontWeight: 800, fontFamily: 'Poppins, Lato, Open Sans, Arial, sans-serif' }}>
            Notre Équipe
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
            {teamMembers.map((member, index) => (
              <Box key={index} sx={{ width: { xs: '100%', md: 'calc(33.33% - 32px)' } }}>
                <ModernTeamMemberCard>
                  <StyledAvatar src={member.image} alt={member.name} />
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.description}
                    </Typography>
                  </CardContent>
                </ModernTeamMemberCard>
              </Box>
            ))}
          </Box>
        </Container>
      </Section>

      <Section sx={{ backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ color: '#2d1c10', fontWeight: 800, fontFamily: 'Poppins, Lato, Open Sans, Arial, sans-serif' }}>
            Nos Valeurs
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
            {values.map((value, index) => (
              <Box key={index} sx={{ width: { xs: '100%', md: 'calc(33.33% - 32px)' } }}>
                <ModernValueCard>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography variant="body1">
                      {value.description}
                    </Typography>
                  </CardContent>
                </ModernValueCard>
              </Box>
            ))}
          </Box>
        </Container>
      </Section>
    </Box>
  );
};

export default About; 