import { Container, Typography, Card, CardMedia, CardContent, Box, Grid } from "@mui/material";

function Services() {
const services = [

{
title:"Manual Packaging",
image:"https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg",
desc:"Manual packaging support for industrial and retail products."
},

{
title:"Repacking",
image:"https://images.pexels.com/photos/6169053/pexels-photo-6169053.jpeg",
desc:"Bulk products ko retail packs me convert karna."
},

{
title:"Labeling / Sticker Pasting",
image:"https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg",
desc:"Barcode aur brand label application."
},

{
title:"Poly Packing",
image:"https://images.pexels.com/photos/6169047/pexels-photo-6169047.jpeg",
desc:"Plastic pouch packaging support."
},

{
title:"Combo Packing",
image:"https://images.pexels.com/photos/6169052/pexels-photo-6169052.jpeg",
desc:"Retail combo pack bundling."
},

{
title:"Quality Check",
image:"https://images.pexels.com/photos/6169051/pexels-photo-6169051.jpeg",
desc:"Counting, sorting and inspection before dispatch."
}

]

return (

<Box>

{/* HERO SECTION */}

<Box
sx={{
height:"35vh",
display:"flex",
alignItems:"center",
justifyContent:"center",
background:"linear-gradient(135deg,#0f172a,#1e3a8a)",
color:"white"
}}
>

<Typography variant="h3" fontWeight="bold">
Our Packaging Services
</Typography>

</Box>


{/* SERVICES */}

<Container sx={{py:8}}>

<Typography variant="h4" textAlign="center" mb={6}>
What We Offer
</Typography>

<Grid container spacing={4}>

{services.map((service,index)=>(
<Grid item xs={12} sm={6} md={4} key={index}>

<Card
sx={{
transition:"0.3s",
"&:hover":{boxShadow:6}
}}
>

<CardMedia
component="img"
height="200"
image={service.image}
/>

<CardContent>

<Typography variant="h6" fontWeight="bold">
{service.title}
</Typography>

<Typography variant="body2" color="text.secondary">
{service.desc}
</Typography>

</CardContent>

</Card>

</Grid>
))}

</Grid>

</Container>

</Box>

);

}

export default Services;