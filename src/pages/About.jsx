import { Container, Typography, Grid, Box, Button } from "@mui/material";
import { motion } from "framer-motion";

function About() {

const images = [
"https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
"https://images.unsplash.com/photo-1598515214211-89d3c73ae83b",
"https://images.unsplash.com/photo-1605902711622-cfb43c4437d1"
];

return (

<Box>

{/* HERO SECTION */}

<Box
sx={{
height: "50vh",
backgroundImage:
"url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d)",
backgroundSize: "cover",
backgroundPosition: "center",
display: "flex",
alignItems: "center",
justifyContent: "center",
color: "white",
textAlign: "center"
}}
>

<Box sx={{background:"rgba(0,0,0,0.6)",p:4}}>

<Typography variant="h3" fontWeight="bold">
About Fast Packaging Service
</Typography>

<Typography mt={2}>
Reliable Contract Packaging Support
</Typography>

</Box>

</Box>

{/* COMPANY INTRO */}

<Container sx={{py:8}}>

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
>

<Typography variant="h4" fontWeight="bold" mb={3}>
Who We Are
</Typography>

<Typography paragraph>

<b><i>Fast Packaging Service</i></b> is a Gujarat-based 
<b> Udyam-registered contract packaging and manual packaging service provider</b>, 
committed to delivering reliable and cost-effective packaging support for businesses 
across multiple product categories.
<br/><br/>

We specialize in providing outsourced packaging solutions for products such as   
<b> cosmetics, toothpaste / Colgate type tubes, pharmacy / ointment / cream tubes, 
chargers, cables, earbuds, and other small electronic accessories.</b>

<br/><br/>

Our services are designed to support 
<b> manufacturers, distributors, wholesalers, packaging companies, and e-commerce sellers</b> 
who require dependable manual packaging assistance.

</Typography>

</motion.div>

</Container>


{/* SERVICES OVERVIEW */}

<Box sx={{background:"#f5f5f5",py:8}}>

<Container>

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
>

<Typography variant="h4" fontWeight="bold" mb={4}>
Our Core Packaging Services
</Typography>

<Typography paragraph>

Our core services include 
<b>manual packing, repacking, labeling, sticker pasting, poly packing, 
box packing, combo packing, bundling, counting, sorting, and 
basic quality-check support.</b>

<br/><br/>

We also provide <b>secondary packaging support</b>, helping businesses during:

<br/><br/>

• Urgent dispatch requirements <br/>
• Seasonal demand spikes <br/>
• Extra production load <br/>
• Relabeling work <br/>
• Promotional combo packing <br/>
• Overflow packaging operations

</Typography>

</motion.div>

</Container>

</Box>


{/* WORK APPROACH */}

<Container sx={{py:8}}>

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
>

<Typography variant="h4" fontWeight="bold" mb={4}>
Our Working Approach
</Typography>

<Typography paragraph>

We operate with an <b>organized home-based packaging setup</b> supported by 
<b> trained manpower</b>, allowing us to manage 
<b>small to bulk packaging orders</b> with focus on:

<br/><br/>

• Quality <br/>
• Accuracy <br/>
• Cleanliness <br/>
• Proper product handling <br/>
• Timely completion

<br/><br/>

Our working approach is simple:

<br/><br/>

<b><i>Every order is handled with responsibility, care, and commitment 
to client satisfaction.</i></b>

</Typography>

</motion.div>

</Container>


{/* IMAGE GALLERY */}

<Box sx={{background:"#f5f5f5",py:8}}>

<Container>

<Typography variant="h4" fontWeight="bold" textAlign="center" mb={6}>
Our Packaging Work Environment
</Typography>

<Grid container spacing={4}>

{images.map((img,index)=>(
<Grid item xs={12} sm={6} md={3} key={index}>

<Box
component="img"
src={img}
sx={{
width:"100%",
height:"220px",
objectFit:"cover",
borderRadius:"10px",
transition:"0.4s",
"&:hover":{
transform:"scale(1.05)"
}
}}
/>

</Grid>
))}

</Grid>

</Container>

</Box>


{/* COMPANY PHILOSOPHY */}

<Container sx={{py:8}}>

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
>

<Typography variant="h4" fontWeight="bold" mb={4}>
Our Commitment
</Typography>

<Typography paragraph>

At <b>Fast Packaging Service</b>, we understand that 
<b>packaging is not just about packing products.</b>

<br/><br/>

It is about ensuring the product is:

<br/><br/>

• Properly prepared <br/>
• Safely handled <br/>
• Professionally presented <br/>
• Ready for dispatch or sale

<br/><br/>

That is why we emphasize 
<b>precision, consistency, and timely execution</b> 
in every packaging task we undertake.

</Typography>

</motion.div>

</Container>


{/* CTA */}

<Box
sx={{
background:"#1e3a8a",
color:"white",
textAlign:"center",
py:8
}}
>

<Typography variant="h4" fontWeight="bold">
Work With Fast Packaging
</Typography>

<Typography mt={2}>

We are available for <b>trial orders</b> as well as 
<b> long-term outsourcing partnerships</b>.

</Typography>

<Button
variant="contained"
color="error"
sx={{mt:3}}
href="/contact"
>
Contact Us
</Button>

</Box>

</Box>

);

}

export default About;