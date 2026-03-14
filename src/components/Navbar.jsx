import React, { useState } from "react";
import {
AppBar,
Toolbar,
Typography,
Button,
IconButton,
Box,
InputBase,
Drawer,
List,
ListItem,
ListItemText
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {

const [open, setOpen] = useState(false);

const menu = [
{ name: "Home", path: "/" },
{ name: "Services", path: "/services" },
{ name: "About", path: "/about" },
{ name: "Contact", path: "/contact" }
];

return (

<AppBar
position="sticky"
sx={{
background: "white",
color: "black",
boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
}}
>

<Toolbar>

{/* Logo */}

<Typography
variant="h6"
sx={{
flexGrow: 1,
fontWeight: "bold",
color: "#0d47a1"
}}
>

FAST PACKAGING

</Typography>

{/* Desktop Menu */}

<Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>

{menu.map((item, index) => (

<motion.div
whileHover={{ y: -2 }}
key={index}
>

<Button
component={Link}
to={item.path}
sx={{
color: "black",
fontWeight: "600",
position: "relative",

"&:after": {
content: '""',
position: "absolute",
width: "0%",
height: "2px",
left: 0,
bottom: 0,
backgroundColor: "#1976d2",
transition: "0.3s"
},

"&:hover:after": {
width: "100%"
}

}}
>

{item.name}

</Button>

</motion.div>

))}

</Box>

{/* Search Bar */}

<Box
sx={{
display: { xs: "none", md: "flex" },
alignItems: "center",
background: "#f1f1f1",
px: 2,
py: 0.5,
borderRadius: "20px",
ml: 2
}}
>

<SearchIcon />

<InputBase
placeholder="Search..."
sx={{ ml: 1 }}
/>

</Box>

{/* Mobile Menu Icon */}

<IconButton
sx={{ display: { xs: "block", md: "none" } }}
onClick={() => setOpen(true)}
>

<MenuIcon />

</IconButton>

</Toolbar>

{/* Mobile Drawer */}

<Drawer
anchor="right"
open={open}
onClose={() => setOpen(false)}
>

<List sx={{ width: 220 }}>

{menu.map((item) => (

<ListItem
button
component={Link}
to={item.path}
key={item.name}
onClick={() => setOpen(false)}
>

<ListItemText primary={item.name} />

</ListItem>

))}

</List>

</Drawer>

</AppBar>

);
}

export default Navbar;