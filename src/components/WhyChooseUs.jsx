import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box
} from "@mui/material";

import {
  Engineering,
  Verified,
  LocalShipping,
  Groups,
  WorkspacePremium,
  AccessTime
} from "@mui/icons-material";

import { motion } from "framer-motion";


const features = [

{
title: "Experienced Workforce",
icon: <Groups fontSize="large"/>,
image:"https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg",
desc: "Skilled labour team specialized in electronics and cosmetic packaging."
},

{
title: "Reliable Service",
icon: <AccessTime fontSize="large"/>,
image:"https://images.pexels.com/photos/6169053/pexels-photo-6169053.jpeg",
desc: "On-time project completion for companies and factories."
},

{
title: "Quality Packaging",
icon: <Verified fontSize="large"/>,
image:"https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg",
desc: "Professional handling and safe product packaging process."
},

{
title: "Flexible Labour Supply",
icon: <LocalShipping fontSize="large"/>,
image:"https://images.pexels.com/photos/6169052/pexels-photo-6169052.jpeg",
desc: "Available manpower according to company production demand."
},


];


function WhyChooseUs(){

return(

<Box sx={{ mt:14, py:10, background:"#f8fafc" }}>

<Container maxWidth="lg">

<Typography
variant="h4"
align="center"
fontWeight="bold"
>

Why Choose Fast Packaging

</Typography>

<Typography
align="center"
sx={{ mt:2, color:"gray", maxWidth:600, mx:"auto" }}
>

Professional packaging contractor service trusted by industries.

</Typography>


<Grid container spacing={4} sx={{ mt:6 }}>

{features.map((item,index)=>(
<Grid
item
xs={12}      // mobile
sm={6}       // tablet
md={4}       // desktop
key={index}
>

<motion.div
initial={{ opacity:0,y:40 }}
whileInView={{ opacity:1,y:0 }}
transition={{ duration:0.6 }}
viewport={{ once:true }}
whileHover={{ scale:1.05 }}
>

<Card
sx={{
height:240,
borderRadius:3,
position:"relative",
overflow:"hidden",
boxShadow:4
}}
>

<Box
sx={{
position:"absolute",
top:0,
left:0,
width:"100%",
height:"100%",
backgroundImage:`url(${item.image})`,
backgroundSize:"cover",
backgroundPosition:"center",
filter:"brightness(0.55)"
}}
/>

<CardContent
sx={{
position:"relative",
color:"white",
textAlign:"center",
mt:4
}}
>

<Box sx={{ mb:1 }}>
{item.icon}
</Box>

<Typography variant="h6" fontWeight="bold">
{item.title}
</Typography>

<Typography sx={{ mt:1,fontSize:14 }}>
{item.desc}
</Typography>

</CardContent>

</Card>

</motion.div>

</Grid>
))}

</Grid>

</Container>

</Box>

)
}

export default WhyChooseUs;