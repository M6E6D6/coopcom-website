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
  Avatar,
} from '@mui/material';
import { motion } from 'framer-motion';
import identityImg from '../images/identity.jpg';
import webDevImg from '../images/web-dev.webp';
import socialImg from '../images/social-media.webp';
import coopcomLogo from '../images/logo.png';
import RahmaImg from '../images/Rahma.jpeg';
import SalimaImg from '../images/Salima Fahmi.jpeg';
import YounesImg from '../images/Younes El Kirame.jpeg';
import MohamedImg from '../images/Mohamed Elouafi.jpeg';
import Mohamed1Img from '../images/Drim Mohamed.jpeg';
import HichamImg from '../images/Hicham Saïdi.jpeg';
import MeriemImg from '../images/Meriem Bougader.jpeg';
import CisseImg from '../images/Cisse gaoussou.jpg';
import backgroundImg from '../images/background.jpg';

const HeroSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '80vh',
  textAlign: 'center',
  background: `linear-gradient(135deg, #fffbe6 0%, #f5e9da 100%)`,
  position: 'relative',
  padding: '0 24px',
  [theme.breakpoints.down('sm')]: {
    padding: '0 6px',
    minHeight: '60vh',
  },
}));

const BigLogo = styled('img')(({ theme }) => ({
  width: 260,
  height: 260,
  marginBottom: 32,
  borderRadius: '50%',
  boxShadow: '0 8px 32px rgba(255,183,77,0.13)',
  background: 'rgba(255,255,255,0.85)',
  [theme.breakpoints.down('sm')]: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  fontFamily: 'Poppins, Montserrat, Inter, Arial, sans-serif',
  color: '#2d1c10',
  marginBottom: theme.spacing(2),
  fontSize: '2.5rem',
  letterSpacing: 1,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    marginBottom: theme.spacing(1),
  },
}));

const SectionSub = styled(Typography)(({ theme }) => ({
  color: '#7a5c3e',
  fontFamily: 'Inter, Montserrat, Arial, sans-serif',
  fontSize: '1.25rem',
  marginBottom: theme.spacing(3),
  maxWidth: 700,
  marginLeft: 'auto',
  marginRight: 'auto',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginBottom: theme.spacing(2),
  },
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

  const portfolio = [
    { title: 'Projet Identité Visuelle', image: identityImg },
    { title: 'Projet Web', image: webDevImg },
    { title: 'Projet Réseaux Sociaux', image: socialImg },
  ];

  const blog = [
    { title: "L'importance de la digitalisation", excerpt: "Découvrez pourquoi la digitalisation est cruciale pour les PME et associations du nord du Maroc." },
    { title: "Créer une identité visuelle forte", excerpt: "Nos conseils pour une image de marque mémorable." },
  ];

  const teamMembers = [
    {
      name: 'Rahma Abdelouaret',
      role: 'Présidente',
      image: RahmaImg,
      description: 'Fondatrice et leader de CoopCom, elle supervise la vision stratégique et le développement global de la coopérative.',
      article: "Rahma possède plus de 10 ans d'expérience dans la gestion de projets digitaux et la transformation numérique des organisations. Elle a accompagné de nombreuses PME et associations dans leur transition vers le digital, en mettant l'accent sur l'innovation et l'inclusion.",
    },
    {
      name: 'Salima Fahmi',
      role: 'Vice Présidente',
      image: SalimaImg,
      description: 'Assiste la présidente et coordonne les projets majeurs, tout en assurant la continuité des activités.',
      article: "Salima est experte en communication et gestion d'équipe. Elle a mené avec succès des campagnes de communication pour des entreprises et des ONG, et se distingue par sa capacité à fédérer les talents autour d'objectifs communs.",
    },
    {
      name: 'Younes ElKiram',
      role: 'Secrétaire Générale',
      image: YounesImg,
      description: 'Responsable de la gestion administrative et de la communication interne de la coopérative.',
      article: "Younes a une solide expérience en administration et en organisation d'événements. Il veille à la bonne circulation de l'information et à la cohésion de l'équipe.",
    },
    {
      name: 'Mohamed Drim',
      role: 'Trésorier',
      image: Mohamed1Img,
      description: 'Gère les finances, la comptabilité et le suivi budgétaire de CoopCom.',
      article: "Mohamed est diplômé en finance et a travaillé dans plusieurs structures associatives et coopératives. Il est reconnu pour sa rigueur et sa transparence dans la gestion financière.",
    },
    {
      name: 'Hicham Saidi',
      role: 'Production',
      image: HichamImg,
      description: 'Supervise la création de contenu digital et la production multimédia.',
      article: "Hicham est passionné par la vidéo et la photographie. Il a produit de nombreux contenus pour des marques et des institutions, et maîtrise les outils de création digitale.",
    },
    {
      name: 'Meryam Bougader',
      role: 'Qualité',
      image: MeriemImg,
      description: 'Veille à la qualité des livrables et à la satisfaction des clients.',
      article: "Meryam a une grande expérience dans le contrôle qualité et la relation client. Elle s'assure que chaque projet livré répond aux standards les plus élevés.",
    },
    {
      name: 'Cisse Gaoussou',
      role: 'Communication',
      image: CisseImg,
      description: 'Développe la stratégie de communication externe et gère la présence sur les réseaux sociaux.',
      article: "Cisse est spécialiste des réseaux sociaux et du marketing digital. Il a accompagné plusieurs entreprises dans le développement de leur notoriété en ligne.",
    },
    {
      name: 'Mohamed Elouafi',
      role: 'Logistique',
      image: MohamedImg,
      description: "Assure la logistique et l'organisation des événements et des opérations.",
      article: "Mohamed a organisé de nombreux événements et ateliers pour CoopCom et d'autres structures. Il est apprécié pour son efficacité et son sens de l'organisation.",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection sx={{ position: 'relative', overflow: 'hidden' }}>
        <Box
          component="img"
          src={backgroundImg}
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
        <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <BigLogo src={coopcomLogo} alt="CoopCom Logo" />
          <Typography variant="h1" sx={{ fontWeight: 900, fontFamily: 'Poppins, Montserrat, Inter, Arial, sans-serif', fontSize: { xs: '2.5rem', md: '3.5rem' }, color: '#2d1c10', mb: 2, letterSpacing: 2 }}>
            CoopCom
          </Typography>
          <SectionSub sx={{ color: '#fff', textShadow: '0 2px 8px rgba(44,62,80,0.25)' }}>
            CoopCom est une coopérative de communication digitale basée à Tétouan. Spécialisée dans la digitalisation des PME, coopératives et associations du nord du Maroc à travers la création d'identités visuelles, le développement des sites web, la création de contenu et la gestion de leurs réseaux sociaux. Elle adopte une approche humaine, solidaire et accessible.
          </SectionSub>
          <Button href="#about" variant="contained" color="primary" size="large" sx={{ borderRadius: 12, fontWeight: 700, fontSize: '1.1rem', px: 5, py: 1.5, mt: 2 }}>
            Découvrir CoopCom
          </Button>
        </Box>
      </HeroSection>

      {/* About Section Preview */}
      <Container id="about" sx={{ py: 8 }}>
        <SectionTitle variant="h2">À propos</SectionTitle>
        <SectionSub>
          CoopCom accompagne les entreprises et associations dans leur transformation digitale avec une approche humaine, solidaire et accessible.
        </SectionSub>
        <Button href="/about" variant="outlined" color="primary" sx={{ borderRadius: 12, fontWeight: 700, fontSize: '1.1rem', px: 4, py: 1 }}>
          En savoir plus
        </Button>
      </Container>

      {/* Team Section */}
      <Container id="team" sx={{ py: 8 }}>
        <SectionTitle variant="h2">Notre Équipe</SectionTitle>
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
                <Typography variant="body1" sx={{ color: '#7a5c3e', fontFamily: 'Lato, Open Sans, Arial, sans-serif', mb: 2 }}>
                  {member.description}
                </Typography>
                <Card sx={{ background: '#fffbe6', borderRadius: 3, boxShadow: '0 2px 8px #ffb74d22', p: 2 }}>
                  <Typography variant="subtitle2" sx={{ color: '#2d1c10', fontWeight: 700, mb: 1 }}>Expérience</Typography>
                  <Typography variant="body2" sx={{ color: '#7a5c3e' }}>{member.article}</Typography>
                </Card>
              </Box>
            </TeamCard>
          ))}
        </Box>
      </Container>

      {/* Services Preview */}
      <Box id="services" sx={{ background: 'linear-gradient(135deg, #fff8ed 0%, #f9fafc 100%)', py: 10 }}>
        <Container>
          <SectionTitle variant="h2">Nos Services</SectionTitle>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
            {services.map((service, index) => (
              <Box key={index} sx={{ width: { xs: '100%', md: 'calc(33.33% - 32px)' } }}>
                <ModernServiceCard>
                  <CardMedia
                    component="img"
                    height="180"
                    image={service.image}
                    alt={service.title}
                    sx={{ objectFit: 'cover', borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 700, fontFamily: 'inherit' }}>
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
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button href="/services" variant="outlined" color="primary" sx={{ borderRadius: 12, fontWeight: 700, fontSize: '1.1rem', px: 4, py: 1 }}>
              Voir tous les services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Portfolio Preview */}
      <Container id="portfolio" sx={{ py: 8 }}>
        <SectionTitle variant="h2">Nos Réalisations</SectionTitle>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
          {portfolio.map((item, index) => (
            <Box key={index} sx={{ width: { xs: '100%', md: 'calc(33.33% - 32px)' } }}>
              <Card sx={{ borderRadius: 20, boxShadow: '0 4px 24px rgba(44, 62, 80, 0.10)' }}>
                <CardMedia
                  component="img"
                  height="160"
                  image={item.image}
                  alt={item.title}
                  sx={{ objectFit: 'cover', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: 'inherit' }}>{item.title}</Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button href="/portfolio" variant="outlined" color="primary" sx={{ borderRadius: 12, fontWeight: 700, fontSize: '1.1rem', px: 4, py: 1 }}>
            Voir le portfolio
          </Button>
        </Box>
      </Container>

      {/* Blog Preview */}
      <Box id="blog" sx={{ background: 'linear-gradient(135deg, #fffbe6 0%, #f5e9da 100%)', py: 10 }}>
        <Container>
          <SectionTitle variant="h2">Blog</SectionTitle>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
            {blog.map((post, index) => (
              <Box key={index} sx={{ width: { xs: '100%', md: 'calc(50% - 32px)' } }}>
                <Card sx={{ borderRadius: 20, boxShadow: '0 4px 24px rgba(44, 62, 80, 0.10)' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: 'inherit', mb: 1 }}>{post.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'inherit' }}>{post.excerpt}</Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button href="/blog" variant="outlined" color="primary" sx={{ borderRadius: 12, fontWeight: 700, fontSize: '1.1rem', px: 4, py: 1 }}>
              Voir le blog
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contact/Team Preview */}
      <Container id="contact" sx={{ py: 8, textAlign: 'center' }}>
        <SectionTitle variant="h2">Contact & Équipe</SectionTitle>
        <SectionSub>
          Notre équipe est à votre écoute pour vous accompagner dans tous vos projets digitaux.
        </SectionSub>
        <Button href="/contact" variant="contained" color="primary" size="large" sx={{ borderRadius: 12, fontWeight: 700, fontSize: '1.1rem', px: 5, py: 1.5 }}>
          Contactez-nous
        </Button>
      </Container>
    </Box>
  );
};

export default Home; 