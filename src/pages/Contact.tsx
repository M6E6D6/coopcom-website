import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import coopcomLogo from '../images/logo.png';

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: 'linear-gradient(135deg, #fffbe6 0%, #f5e9da 100%)',
}));

const ContactForm = styled(Paper)(({ theme }) => ({
  background: 'rgba(255,255,255,0.85)',
  borderRadius: 32,
  boxShadow: '0 12px 40px rgba(255,183,77,0.13)',
  border: '1.5px solid #ffb74d',
  padding: theme.spacing(4),
  height: '100%',
}));

const ContactInfo = styled(Paper)(({ theme }) => ({
  background: '#fffbe6',
  color: '#2d1c10',
  border: '1.5px solid #ffb74d',
  boxShadow: '0 12px 40px rgba(255,183,77,0.13)',
  borderRadius: 32,
  padding: theme.spacing(4),
  height: '100%',
}));

interface GlassySectionHeaderProps {
  title: string;
  subtitle: string;
}

const GlassySectionHeader = ({ title, subtitle }: GlassySectionHeaderProps) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 8 }}>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
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
      <motion.img
        src={coopcomLogo}
        alt="CoopCom Logo"
        style={{ width: 80, height: 80, objectFit: 'contain', marginBottom: 16, opacity: 0.7 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      />
      <Typography variant="h2" sx={{ color: '#2d1c10', fontWeight: 800, fontFamily: 'Poppins, Lato, Open Sans, Arial, sans-serif', mb: 2 }}>{title}</Typography>
      <Typography variant="h5" color="text.secondary" paragraph>{subtitle}</Typography>
    </motion.div>
  </Box>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      message: 'Votre message a été envoyé avec succès !',
      severity: 'success',
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box>
      <GlassySectionHeader
        title="Contactez-nous"
        subtitle="Nous sommes là pour répondre à toutes vos questions"
      />
      <Section>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mt: 4, justifyContent: 'center', '& > *': { width: { xs: '100%', md: 'calc(58.33% - 32px)' } } }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0 }}
              style={{ width: '100%' }}
            >
              <ContactForm elevation={3} sx={{ background: 'rgba(255,255,255,0.85)', border: '1.5px solid #ffb74d', boxShadow: '0 12px 40px rgba(255,183,77,0.13)' }}>
                <form onSubmit={handleSubmit}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, '& > *': { width: { xs: '100%', sm: 'calc(50% - 12px)' } } }}>
                    <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)' } }}>
                      <TextField
                        required
                        fullWidth
                        label="Nom"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </Box>
                    <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)' } }}>
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </Box>
                    <Box sx={{ width: '100%' }}>
                      <TextField
                        required
                        fullWidth
                        label="Sujet"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </Box>
                    <Box sx={{ width: '100%' }}>
                      <TextField
                        required
                        fullWidth
                        multiline
                        rows={4}
                        label="Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </Box>
                    <Box sx={{ width: '100%' }}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                      >
                        Envoyer
                      </Button>
                    </Box>
                  </Box>
                </form>
              </ContactForm>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{ width: '100%' }}
            >
              <ContactInfo elevation={3} sx={{ background: '#fffbe6', color: '#2d1c10', border: '1.5px solid #ffb74d', boxShadow: '0 12px 40px rgba(255,183,77,0.13)' }}>
                <Typography variant="h4" gutterBottom>
                  Nos coordonnées
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Adresse
                  </Typography>
                  <Typography variant="body1">
                    123 Rue de l'Innovation<br />
                    25000 Khouribga, Maroc
                  </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Téléphone
                  </Typography>
                  <Typography variant="body1">
                    +212 23 23 45 67 89
                  </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Email
                  </Typography>
                  <Typography variant="body1">
                    contact@coopcom.fr
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Horaires d'ouverture
                  </Typography>
                  <Typography variant="body1">
                    Lundi - Vendredi: 9h - 18h<br />
                    Samedi: 10h - 16h<br />
                    Dimanche: Fermé
                  </Typography>
                </Box>
              </ContactInfo>
            </motion.div>
          </Box>
        </Container>
      </Section>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 