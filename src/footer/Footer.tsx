import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import theme from "../tema/Theme";
import { FaLocationDot } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { TbClockHour4 } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";

const Footer: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <Box sx={{ background: "#000" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          padding: "5rem",
          fontFamily: "Montserrat",
          gap: "2rem"
        }}
      >
        {/* location */}
        <Box sx={{ display: "flex", marginBottom: "2rem" }}>
          <Box sx={{ color: theme.palette.primary.main, fontSize: "1.5rem" }}>
            <FaLocationDot />
          </Box>
          <Box sx={{ color: "#fff", marginLeft: ".5rem" }}>
            <Typography>Address</Typography>
            <Typography>A108 Adam Street New York, NY 535022</Typography>
          </Box>
        </Box>

        {/* Contact */}
        <Box sx={{ display: "flex", marginBottom: "2rem" }}>
          <Box sx={{ color: theme.palette.primary.main, fontSize: "1.5rem" }}>
            <LuPhone />
          </Box>
          <Box sx={{ color: "#fff", marginLeft: ".5rem" }}>
            <Typography>Phone</Typography>
            <Typography>+1 234 567 890</Typography>
          </Box>
        </Box>

        {/* Opening Hours */}
        <Box sx={{ display: "flex", marginBottom: "2rem" }}>
          <Box sx={{ color: theme.palette.primary.main, fontSize: "1.5rem" }}>
            <TbClockHour4 />
          </Box>
          <Box sx={{ color: "#fff", marginLeft: ".5rem" }}>
            <Typography>Opening Hours</Typography>
            <Typography>Mon-Fri: 9:00 AM - 5:00 PM</Typography>
          </Box>
        </Box>

        {/* Follow Us */}
        <Box>
          <Typography style={{ color: "#fff", marginBottom: "1rem" }}>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            {[
              { id: "twitter", icon: <BsTwitterX /> },
              { id: "facebook", icon: <MdFacebook /> },
              { id: "instagram", icon: <FaInstagram /> },
              { id: "linkedin", icon: <IoLogoLinkedin /> },
            ].map((social) => (
              <Box
                key={social.id}
                sx={{
                  color: hoveredIcon === social.id ? "red" : "#fff",
                  border: ".1rem solid #fff",
                  width: "2.5rem",
                  height: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  transition: "color 0.3s, border-color 0.3s",
                  cursor: "pointer",
                }}
                onMouseOver={() => setHoveredIcon(social.id)}
                onMouseOut={() => setHoveredIcon(null)}
              >
                {social.icon}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
