
import React from "react";

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Stack
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";

import { motion } from "framer-motion";

function Footer() {

  const socialStyle = {
    color: "white",
    mx: 1,
    background: "rgba(255,255,255,0.1)",
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.2)",
      background: "#ffffff",
      color: "#0d47a1"
    }
  };

  return (

    <Box
      sx={{
        mt: 10,
        pt: 8,
        pb: 4,
        color: "white",
        background:
          "linear-gradient(135deg,#0d47a1 0%,#1976d2 40%,#26a69a 100%)"
      }}
    >

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <Grid container spacing={5}>

            {/* Company Info */}

            <Grid item xs={12} md={3}>

              <Typography variant="h6" fontWeight="bold">
                FAST PACKAGING
              </Typography>

              <Typography sx={{ mt: 2, opacity: 0.9 }}>
                Professional packaging contractor providing labour and
                packaging services for electronics, cosmetic and industrial
                companies across Gujarat.
              </Typography>

              {/* Business Badges */}

              <Stack direction="row" spacing={2} sx={{ mt: 3 }}>

                <Box
                  sx={{
                    background: "white",
                    color: "#0d47a1",
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    fontWeight: "bold",
                    fontSize: 12
                  }}
                >
                  MSME Registered
                </Box>

                <Box
                  sx={{
                    background: "white",
                    color: "#0d47a1",
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    fontWeight: "bold",
                    fontSize: 12
                  }}
                >
                  Trusted Service
                </Box>

              </Stack>

            </Grid>


            {/* Quick Links */}

            <Grid item xs={12} md={3}>

              <Typography variant="h6" fontWeight="bold">
                Quick Links
              </Typography>

              <Typography sx={{ mt: 2 }}>
                <Link href="/" color="inherit" underline="hover">Home</Link>
              </Typography>

              <Typography>
                <Link href="/services" color="inherit" underline="hover">Services</Link>
              </Typography>

              <Typography>
                <Link href="/about" color="inherit" underline="hover">About</Link>
              </Typography>

              <Typography>
                <Link href="/contact" color="inherit" underline="hover">Contact</Link>
              </Typography>

            </Grid>


            {/* Services */}

            <Grid item xs={12} md={3}>

              <Typography variant="h6" fontWeight="bold">
                Our Services
              </Typography>

              <Typography sx={{ mt: 2 }}>
                Electronics Packaging
              </Typography>

              <Typography>
                Cosmetic Product Packing
              </Typography>

              <Typography>
                Industrial Packing
              </Typography>

              <Typography>
                Labour Supply
              </Typography>

            </Grid>


            {/* Contact Info */}

            <Grid item xs={12} md={3}>

              <Typography variant="h6" fontWeight="bold">
                Contact
              </Typography>

              <Stack spacing={2} sx={{ mt: 2 }}>

                <Stack direction="row" spacing={1} alignItems="center">
                  <LocationOnIcon />
                  <Typography>
                    Vapi, Gujarat
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <PhoneIcon />
                  <Typography>
                    +91 9106140115
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <EmailIcon />
                  <Typography>
                    pinkipackaging0115@gmail.com
                  </Typography>
                </Stack>

              </Stack>

            </Grid>

          </Grid>

        </motion.div>


        {/* Social Media */}

        <Box sx={{ textAlign: "center", mt: 5 }}>

          <Typography variant="h6" sx={{ mb: 2 }}>
            Connect With Us
          </Typography>

          <IconButton
            component="a"
            href="https://facebook.com"
            target="_blank"
            sx={socialStyle}
          >
            <FacebookIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://instagram.com"
            target="_blank"
            sx={socialStyle}
          >
            <InstagramIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://youtube.com"
            target="_blank"
            sx={socialStyle}
          >
            <YouTubeIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://wa.me/919106140115"
            target="_blank"
            sx={socialStyle}
          >
            <WhatsAppIcon />
          </IconButton>

          <IconButton
            component="a"
            href="mailto:pinkipackaging0115@gmail.com"
            sx={socialStyle}
          >
            <EmailIcon />
          </IconButton>

          {/* IndiaMART */}

          <IconButton
            component="a"
            href="https://www.indiamart.com"
            target="_blank"
            sx={socialStyle}
          >
            <LanguageIcon />
          </IconButton>

        </Box>


        {/* IndiaMART Trust Badge */}

        <Box sx={{ textAlign: "center", mt: 4 }}>

          <Typography sx={{ opacity: 0.8 }}>
            Trusted Business Listing
          </Typography>

          <Link
            href="https://www.indiamart.com"
            target="_blank"
            color="inherit"
            underline="hover"
          >
            View our IndiaMART profile
          </Link>

        </Box>


        {/* Copyright */}

        <Box
          sx={{
            textAlign: "center",
            mt: 5,
            borderTop: "1px solid rgba(255,255,255,0.3)",
            pt: 3
          }}
        >

          <Typography variant="body2">
            © {new Date().getFullYear()} Fast Packaging Service. All Rights Reserved.
          </Typography>

        </Box>

      </Container>

    </Box>

  );
}

export default Footer;