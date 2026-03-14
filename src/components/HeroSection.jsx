import React, { useState, useEffect } from "react";
import {
Box,
Typography,
Button,
Container,
IconButton
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [

{
image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
title: "Professional Packaging Contractor",
desc: "Electronics • Cosmetic • Industrial Packaging"
},

{
image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
title: "Reliable Industrial Packaging",
desc: "Secure and Safe Product Handling"
},

{
image: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b",
title: "Factory Packaging Services",
desc: "Professional Workforce for Production Lines"
},

{
image: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f",
title: "Cosmetic Product Packing",
desc: "Careful and Accurate Packaging Process"
},

{
image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088",
title: "Industrial Labour Supply",
desc: "Reliable Manpower for Manufacturing Units"
}

];

function HeroSection() {

const [index, setIndex] = useState(0);

const nextSlide = () => {
setIndex((prev) => (prev + 1) % slides.length);
};

const prevSlide = () => {
setIndex((prev) => (prev - 1 + slides.length) % slides.length);
};


// AUTO PLAY

useEffect(() => {

const interval = setInterval(() => {
setIndex((prev) => (prev + 1) % slides.length);
}, 5000);

return () => clearInterval(interval);

}, []);


// PARALLAX

const [offset, setOffset] = useState(0);

useEffect(() => {

const handleScroll = () => {
setOffset(window.pageYOffset);
};

window.addEventListener("scroll", handleScroll);

return () => window.removeEventListener("scroll", handleScroll);

}, []);


return (

<Box
sx={{
height: "95vh",
position: "relative",
color: "white",
backgroundImage: `url(${slides[index].image})`,
backgroundSize: "cover",
backgroundPosition: "center",
display: "flex",
alignItems: "center"
}}
>

{/* DARK OVERLAY */}

<Box
sx={{
position: "absolute",
top: 0,
left: 0,
width: "100%",
height: "100%",
background: "rgba(0,0,0,0.55)"
}}
/>


{/* HERO CONTENT */}

<Container
sx={{
position: "relative",
zIndex: 2,
transform: `translateY(${offset * 0.2}px)`
}}
>

<motion.div
key={slides[index].title}
initial={{ opacity: 0, y: 60 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
>

<Typography
variant="h2"
fontWeight="bold"
sx={{ maxWidth: "700px" }}
>

{slides[index].title}

</Typography>

<Typography variant="h6" sx={{ mt: 2 }}>

{slides[index].desc}

</Typography>

<Button
component={Link}
to="/contact"
variant="contained"
size="large"
sx={{
mt: 4,
background: "#ff3d00",
px: 5
}}
>

Request Service

</Button>

</motion.div>

</Container>


{/* LEFT ARROW */}

<IconButton
onClick={prevSlide}
sx={{
position: "absolute",
left: 30,
top: "50%",
color: "white",
background: "rgba(0,0,0,0.4)"
}}
>

<ArrowBackIosNewIcon />

</IconButton>


{/* RIGHT ARROW */}

<IconButton
onClick={nextSlide}
sx={{
position: "absolute",
right: 30,
top: "50%",
color: "white",
background: "rgba(0,0,0,0.4)"
}}
>

<ArrowForwardIosIcon />

</IconButton>


{/* DOTS */}

<Box
sx={{
position: "absolute",
bottom: 30,
width: "100%",
display: "flex",
justifyContent: "center",
gap: 1
}}
>

{slides.map((_, i) => (

<Box
key={i}
onClick={() => setIndex(i)}
sx={{
width: 12,
height: 12,
borderRadius: "50%",
cursor: "pointer",
background: i === index ? "#ff3d00" : "white"
}}
/>

))}

</Box>

</Box>

);
}

export default HeroSection;