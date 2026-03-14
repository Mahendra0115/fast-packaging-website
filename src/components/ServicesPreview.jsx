import {
Container,
Grid,
Card,
CardContent,
Typography
} from "@mui/material";

import { motion } from "framer-motion";

const services = [
"Electronics Packaging",
"Cosmetic Product Packing",
"Industrial Packing",
"Labour Supply"
];

function ServicesPreview() {

return (

<Container sx={{ mt: 10 }}>

<Typography
variant="h4"
align="center"
fontWeight="bold"
>

Our Services

</Typography>

<Grid container spacing={4} sx={{ mt: 4 }}>

{services.map((service, index) => (

<Grid item xs={12} sm={6} md={3} key={index}>

<motion.div

initial={{ opacity: 0, y: 60 }}

whileInView={{ opacity: 1, y: 0 }}

transition={{ duration: 0.6 }}

viewport={{ once: true }}

whileHover={{ scale: 1.05 }}

>

<Card sx={{ p: 3, textAlign: "center" }}>

<CardContent>

<Typography variant="h6">

{service}

</Typography>

</CardContent>

</Card>

</motion.div>

</Grid>

))}

</Grid>

</Container>

);

}

export default ServicesPreview;