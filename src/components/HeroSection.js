import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import coopcomLogo from '../images/logo.png';

const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  background: linear-gradient(120deg, #fffbe6 0%, #fff 100%);
  padding: 0 0 2rem 0;
  position: relative;
  overflow: hidden;
`;

const SideLogoWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 320px;
  width: 340px;
  height: 340px;
  @media (max-width: 900px) {
    width: 180px;
    height: 180px;
    min-width: 120px;
  }
`;

const SideLogoImg = styled(motion.img)`
  width: 260px;
  height: 260px;
  object-fit: contain;
  border-radius: 50%;
  background: rgba(255,255,255,0.85);
  box-shadow: 0 8px 32px rgba(255,183,77,0.13);
  @media (max-width: 900px) {
    width: 120px;
    height: 120px;
  }
`;

const GlassCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px rgba(44, 62, 80, 0.13);
  border-radius: 2.5rem;
  padding: 3.5rem 3rem 2.5rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 540px;
  margin-left: 2rem;
  backdrop-filter: blur(18px);
  @media (max-width: 900px) {
    margin: 0;
    padding: 2.5rem 1.2rem 2rem 1.2rem;
    max-width: 98vw;
  }
`;

const Title = styled(motion.h1)`
  font-family: 'Poppins', 'Lato', 'Open Sans', sans-serif;
  font-size: 2.7rem;
  color: #2d1c10;
  margin-bottom: 1.1rem;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 1.1;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: #7a5c3e;
  margin-bottom: 2.2rem;
  line-height: 1.6;
  font-weight: 500;
  text-align: center;
`;

const GlassNav = styled(motion.nav)`
  display: flex;
  gap: 1.1rem;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px rgba(44, 62, 80, 0.12);
  border-radius: 2rem;
  padding: 0.7rem 2rem;
  backdrop-filter: blur(12px);
  margin-top: 1.5rem;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    padding: 0.7rem 1rem;
  }
`;

const NavButton = styled(ScrollLink)`
  background: rgba(255, 183, 77, 0.22);
  color: #2d1c10;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 18px;
  padding: 0.7rem 2.2rem;
  box-shadow: 0 4px 24px rgba(44, 62, 80, 0.08);
  border: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  text-decoration: none;
  outline: none;
  backdrop-filter: blur(8px);
  &:hover {
    background: #ffb74d;
    color: #fff;
    transform: translateY(-2px) scale(1.04);
  }
`;

const HeroSection = () => (
  <HeroWrapper id="hero">
    <SideLogoWrapper
      initial={{ opacity: 0, scale: 0.85, x: -60 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ scale: 1.08 }}
    >
      <SideLogoImg
        src={coopcomLogo}
        alt="CoopCom Logo"
        animate={{ y: [0, -18, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      />
    </SideLogoWrapper>
    <GlassCard>
      <Title>
        CoopCom : Communication Digitale Humaine
      </Title>
      <Subtitle>
        Nous accompagnons les PME, coopératives et associations dans leur transformation digitale, avec une approche éthique, collaborative et accessible.
      </Subtitle>
      <GlassNav>
        <NavButton to="about" smooth={true} duration={600} offset={-80}>À propos</NavButton>
        <NavButton to="services" smooth={true} duration={600} offset={-80}>Services</NavButton>
        <NavButton to="portfolio" smooth={true} duration={600} offset={-80}>Réalisations</NavButton>
        <NavButton to="blog" smooth={true} duration={600} offset={-80}>Blog</NavButton>
        <NavButton to="contact" smooth={true} duration={600} offset={-80}>Contact</NavButton>
      </GlassNav>
    </GlassCard>
  </HeroWrapper>
);

export default HeroSection; 