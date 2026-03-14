import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ContactCTA() {

return (

<Box
sx={{
mt: 12,
background: "linear-gradient(120deg,#0d47a1,#1976d2)",
color: "white",
py: 8
}}
>

<Container>

<motion.div

initial={{ opacity: 0, y: 50 }}

whileInView={{ opacity: 1, y: 0 }}

transition={{ duration: 0.8 }}

viewport={{ once: true }}

>

<Typography
variant="h4"
align="center"
fontWeight="bold"
>

Need Packaging Contractor?

</Typography>

<Typography
align="center"
sx={{ mt: 2 }}
>

Contact Fast Packaging today for reliable industrial packaging services.

</Typography>

<Box sx={{ textAlign: "center", mt: 4 }}>

<Button

component={Link}

to="/contact"

variant="contained"

size="large"

sx={{
background: "#ff3d00",
px: 5,
py: 1.5,
fontSize: "16px"
}}

>

Request Service

</Button>

</Box>

</motion.div>

</Container>

</Box>

);
}

export default ContactCTA;




