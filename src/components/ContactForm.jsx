// import { useState } from "react";
// import { sendEmail } from "../services/emailService";
// // import { saveLeadToSheet } from "../services/sheetService";

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     service: "",
//     location: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await sendEmail(formData);  //EmailJs
//       // await saveLeadToSheet(formData); // Google Sheet save

//       alert("Request Sent Successfully");

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         company: "",
//         service: "",
//         location: "",
//         message: "",
//       });
//     } catch (error) {
//       console.log("Email Error:", error);
//       alert("Failed to send request");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Contact For Packaging Service</h2>

//       <input
//         type="text"
//         name="name"
//         placeholder="Your Name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />

//       <input
//         type="email"
//         name="email"
//         placeholder="Your Email"
//         value={formData.email}
//         onChange={handleChange}
//       />

//       <input
//         type="text"
//         name="phone"
//         placeholder="Phone Number"
//         value={formData.phone}
//         onChange={handleChange}
//         required
//       />

//       <input
//         type="text"
//         name="company"
//         placeholder="Company Name"
//         value={formData.company}
//         onChange={handleChange}
//       />

//       <input
//         type="text"
//         name="service"
//         placeholder="Service Required"
//         value={formData.service}
//         onChange={handleChange}
//       />

//       <input
//         type="text"
//         name="location"
//         placeholder="Location"
//         value={formData.location}
//         onChange={handleChange}
//       />

//       <textarea
//         name="message"
//         placeholder="Message"
//         value={formData.message}
//         onChange={handleChange}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default ContactForm;

import { useState } from "react";
import { sendEmail } from "../services/emailService";
// import { saveLeadToSheet } from "../services/sheetService";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

import {
  Email,
  Phone,
  LocationOn,
  Business,
  LocalShipping,
  Send,
} from "@mui/icons-material";

import { motion } from "framer-motion";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendEmail(formData); // EmailJs
      // await saveLeadToSheet(formData); // Google Sheet save

      alert("Request Sent Successfully");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        location: "",
        message: "",
      });
    } catch (error) {
      console.log("Email Error:", error);
      alert("Failed to send request");
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: 2,
        background:
          "linear-gradient(180deg, #f7fbff 0%, #eef6ff 45%, #f8fbff 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="stretch">
          {/* Left Content Section */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Stack spacing={3} sx={{ height: "100%" }}>
                <Box>
                  <Chip
                    label="Fast Packaging Service"
                    sx={{
                      mb: 2,
                      fontWeight: 700,
                      backgroundColor: "#e3f2fd",
                      color: "#0d47a1",
                    }}
                  />

                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      lineHeight: 1.2,
                      color: "#0f172a",
                      fontSize: { xs: "2rem", md: "3rem" },
                    }}
                  >
                    Contact Us for Professional Packaging Solutions
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mt: 2,
                      color: "#475569",
                      maxWidth: "90%",
                      lineHeight: 1.8,
                    }}
                  >
                    Share your packaging requirement with us. We provide
                    reliable contractor support for electronics, cosmetic items,
                    manual packing, and dispatch-related work with a
                    professional approach.
                  </Typography>
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2.5,
                        borderRadius: 4,
                        height: "100%",
                        border: "1px solid #dbeafe",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background:
                              "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                            color: "#fff",
                          }}
                        >
                          <Phone />
                        </Box>
                        <Box>
                          <Typography
                            variant="subtitle2"
                            color="text.secondary"
                          >
                            Call Us
                          </Typography>
                          <Typography variant="body1" fontWeight={700}>
                            +91 9106140115
                          </Typography>
                        </Box>
                      </Stack>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2.5,
                        borderRadius: 4,
                        height: "100%",
                        border: "1px solid #dbeafe",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background:
                              "linear-gradient(135deg, #00897b 0%, #26a69a 100%)",
                            color: "#fff",
                          }}
                        >
                          <Email />
                        </Box>
                        <Box sx={{ minWidth: 0 }}>
                          <Typography
                            variant="subtitle2"
                            color="text.secondary"
                          >
                            Email
                          </Typography>
                          <Typography
                            variant="body1"
                            fontWeight={700}
                            sx={{ wordBreak: "break-word" }}
                          >
                            pinkipackaging0115@gmail.com
                          </Typography>
                        </Box>
                      </Stack>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2.5,
                        borderRadius: 4,
                        height: "100%",
                        border: "1px solid #dbeafe",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background:
                              "linear-gradient(135deg, #ef5350 0%, #e53935 100%)",
                            color: "#fff",
                          }}
                        >
                          <LocationOn />
                        </Box>
                        <Box>
                          <Typography
                            variant="subtitle2"
                            color="text.secondary"
                          >
                            Location
                          </Typography>
                          <Typography variant="body1" fontWeight={700}>
                            Vapi, Gujarat
                          </Typography>
                        </Box>
                      </Stack>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2.5,
                        borderRadius: 4,
                        height: "100%",
                        border: "1px solid #dbeafe",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background:
                              "linear-gradient(135deg, #7b1fa2 0%, #ab47bc 100%)",
                            color: "#fff",
                          }}
                        >
                          <LocalShipping />
                        </Box>
                        <Box>
                          <Typography
                            variant="subtitle2"
                            color="text.secondary"
                          >
                            Support
                          </Typography>
                          <Typography variant="body1" fontWeight={700}>
                            Quick Service Response
                          </Typography>
                        </Box>
                      </Stack>
                    </Paper>
                  </Grid>
                </Grid>
              </Stack>
            </motion.div>
          </Grid>

          {/* Right Form Section */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Card
                elevation={0}
                sx={{
                  borderRadius: 6,
                  overflow: "hidden",
                  border: "1px solid #dbeafe",
                  boxShadow: "0 20px 50px rgba(15, 23, 42, 0.08)",
                }}
              >
                <Box
                  sx={{
                    px: { xs: 3, md: 4 },
                    py: 3,
                    color: "#fff",
                    background:
                      "linear-gradient(135deg, #0d47a1 0%, #1976d2 45%, #26a69a 100%)",
                  }}
                >
                  <Typography variant="h5" fontWeight={800}>
                    Request a Packaging Service
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
                    Fill out the form below and we will connect with you
                    shortly.
                  </Typography>
                </Box>

                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={2.5}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          variant="outlined"
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          variant="outlined"
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          variant="outlined"
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Company Name"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          variant="outlined"
                          InputProps={{
                            startAdornment: (
                              <Business sx={{ mr: 1, color: "#90a4ae" }} />
                            ),
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Service Required"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          variant="outlined"
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          variant="outlined"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          multiline
                          rows={6}
                          variant="outlined"
                        />
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        sx={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          endIcon={<Send />}
                          sx={{
                            mt: 1,
                            py: 1.6,
                            px: 5,
                            borderRadius: 3,
                            fontWeight: 700,
                            textTransform: "none",
                            background:
                              "linear-gradient(135deg, #1565c0 0%, #1976d2 50%, #26a69a 100%)",
                            boxShadow: "0 12px 24px rgba(25,118,210,0.28)",
                          }}
                        >
                          Submit Request
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactForm;
