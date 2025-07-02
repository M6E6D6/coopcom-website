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
import coopcomLogo from '../images/logo.png';
import RahmaImg from '../images/Rahma.jpeg';
import SalimaImg from '../images/Salima Fahmi.jpeg';
import YounesImg from '../images/Younes El Kirame.jpeg';
import MohamedImg from '../images/Mohamed Elouafi.jpeg';
import Mohamed1Img from '../images/Drim Mohamed.jpeg';
import HichamImg from '../images/Hicham Saïdi.jpeg';
import MeriemImg from '../images/Meriem Bougader.jpeg';
import CisseImg from '../images/Cisse gaoussou.jpg';
import aboutBackgroundImg from '../images/about background.jpg';

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: 'linear-gradient(135deg, #fffbe6 0%, #f5e9da 100%)',
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

const TeamCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  background: 'rgba(255,255,255,0.97)',
  borderRadius: 32,
  boxShadow: '0 8px 32px rgba(44, 62, 80, 0.10)',
  padding: theme.spacing(3, 4),
  marginBottom: theme.spacing(4),
  transition: 'box-shadow 0.3s',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2, 2),
  },
}));

const ProAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  border: '4px solid #ffb74d',
  boxShadow: '0 4px 24px rgba(255,183,77,0.18)',
  transition: 'transform 0.4s, box-shadow 0.4s, border-color 0.4s',
  background: '#fff',
  marginRight: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    marginRight: 0,
    marginBottom: theme.spacing(2),
  },
  '&:hover': {
    transform: 'scale(1.18)',
    borderColor: '#ffa726',
    boxShadow: '0 8px 32px 0 #ffb74d55',
    zIndex: 2,
  },
}));

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
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
      src={aboutBackgroundImg}
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
    <Box
      sx={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
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
  </Box>
);

const About: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Rahma Abdelouaret',
      role: 'Présidente',
      image: RahmaImg,
      description: 'Fondatrice et leader de CoopCom, elle supervise la vision stratégique et le développement global de la coopérative.',
    },
    {
      name: 'Salima Fahmi',
      role: 'Vice Présidente',
      image: SalimaImg,
      description: 'Assiste la présidente et coordonne les projets majeurs, tout en assurant la continuité des activités.',
    },
    {
      name: 'Younes ElKiram',
      role: 'Secrétaire Générale',
      image: YounesImg,
      description: 'Responsable de la gestion administrative et de la communication interne de la coopérative.',
    },
    {
      name: 'Mohamed Drim',
      role: 'Trésorier',
      image: Mohamed1Img,
      description: 'Gère les finances, la comptabilité et le suivi budgétaire de CoopCom.',
    },
    {
      name: 'Hicham Saidi',
      role: 'Production',
      image: HichamImg,
      description: 'Supervise la création de contenu digital et la production multimédia.',
    },
    {
      name: 'Meryam Bougader',
      role: 'Qualité',
      image: MeriemImg,
      description: 'Veille à la qualité des livrables et à la satisfaction des clients.',
    },
    {
      name: 'Cisse Gaoussou',
      role: 'Communication',
      image: CisseImg,
      description: 'Développe la stratégie de communication externe et gère la présence sur les réseaux sociaux.',
    },
    {
      name: 'Mohamed Elouafi',
      role: 'Logistique',
      image: MohamedImg,
      description: 'Assure la logistique et l\'organisation des événements et des opérations.',
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
    <>
      <GlassySectionHeader title="Notre Histoire" description="CoopCom est une coopérative de communication digitale basée à Tétouan. Spécialisée dans la digitalisation des PME, coopératives et associations du nord du Maroc à travers la création d'identités visuelles, le développement des sites web, la création de contenu et la gestion de leurs réseaux sociaux. Elle adopte une approche humaine, solidaire et accessible." />
      <Section>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ color: '#2d1c10', fontWeight: 900, fontFamily: 'Poppins, Lato, Open Sans, Arial, sans-serif', fontSize: { xs: '2rem', md: '2.8rem' }, mb: 6, letterSpacing: 1 }}>
            Notre Équipe
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 5,
              alignItems: 'stretch',
              justifyItems: 'center',
              mt: 4,
            }}
          >
            {teamMembers.map((member, index) => (
              <TeamCard key={index}>
                <ProAvatar src={member.image} alt={member.name} />
                <Box sx={{ flex: 1, textAlign: { xs: 'center', sm: 'left' } }}>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 1, color: '#2d1c10', fontFamily: 'Poppins, Lato, Open Sans, Arial, sans-serif' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: '#ffa726', fontWeight: 600, mb: 1, fontFamily: 'Poppins, Lato, Open Sans, Arial, sans-serif' }}>
                    {member.role}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#7a5c3e', fontFamily: 'Lato, Open Sans, Arial, sans-serif' }}>
                    {member.description}
                  </Typography>
                </Box>
              </TeamCard>
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
    </>
  );
};

export default About; 