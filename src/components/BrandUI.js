import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BrandSection = styled.section`
  padding: 64px 0;
  background: linear-gradient(135deg, #fffbe6 0%, #f5e9da 100%);
`;

export const BrandCard = styled(motion.div)`
  background: rgba(255,255,255,0.85);
  border-radius: 32px;
  box-shadow: 0 12px 40px rgba(255,183,77,0.13);
  border: 1.5px solid #ffb74d;
  padding: 2.5rem 2rem;
  margin-bottom: 2rem;
  font-family: 'Poppins', 'Lato', 'Open Sans', Arial, sans-serif;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 24px 60px rgba(255,183,77,0.22);
  }
`;

export const BrandImage = styled(motion.img)`
  border-radius: 24px;
  border: 3px solid #ffb74d;
  box-shadow: 0 4px 24px rgba(255,183,77,0.10);
  object-fit: cover;
  width: 100%;
  max-height: 260px;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 32px rgba(255,183,77,0.18);
  }
`; 