import React from "react";
import { Container, Typography, Box } from "@mui/material";
import theme from "../tema/Theme";
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";
import { TbClockHour4 } from "react-icons/tb";

const Contact: React.FC = () => {
  return (
    <>
      <Container sx={{ marginTop: "3rem" }}>
        <Typography
        id="contact"
          sx={{
            color: "#b0b0b0",
            fontWeight: 500,
            fontFamily: "Montserrat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: ".6rem",
          }}
        >
          CONTACT
        </Typography>
        <Typography
          sx={{
            fontFamily: "Amatic Sc",
            fontSize: "2.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
        >
          NEED HELP?{" "}
          <span
            style={{ color: theme.palette.primary.main, marginLeft: ".3rem" }}
          >
            CONTACT US
          </span>
        </Typography>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3614657904045!2d-74.00871262539368!3d40.710058571393816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1spt-BR!2sbr!4v1735667919072!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>

      {/* address */}

      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          gap: "1rem"
        }}
      >
        <Box>
          <Box
            sx={{
              marginTop: "3rem",
              display: "flex",
              width: { xs: "16rem", sm: "30rem" },
              padding: {xs: "2rem", sm: "2.1rem"},
              background: "#f2f2f2",
              borderRadius: ".5rem",
             boxShadow: "0 0 1rem rgba(0, 0, 0, .5)"
            }}
          >
            <Box
              sx={{ 
                width: {xs: "50px", sm: "3rem"},
                height:{xs: "50px", sm: "3rem"},
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5rem",
                background: theme.palette.primary.main,
                color: "#fff",
                
              }}
            >
              <FaLocationDot />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: ".5rem",
                fontFamily: "Montserrat",
              }}
            >
              <Typography sx={{ fontWeight: "bold", color: "#b0b0b0" }}>
                Address
              </Typography>
              <Typography sx={{ fontWeight: 500 }}>
                A108 Adam Street, New York, NY 535022
              </Typography>
            </Box>
          </Box>

          {/* email  */}

          <Box
            sx={{
             
              marginTop: "3rem",
              display: "flex",
              width: { xs: "16rem", sm: "30rem" },
              padding: {xs: "2rem", sm: "2.1rem"},
              background: "#f2f2f2",
              borderRadius: ".5rem",
             boxShadow: "0 0 1rem rgba(0, 0, 0, .5)"
            }}
          >
            <Box
              sx={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5rem",
                background: theme.palette.primary.main,
                color: "#fff",
                
              
              }}
            >
              <TfiEmail />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: ".4rem",
                fontFamily: "Montserrat",
              }}
            >
              <Typography sx={{ fontWeight: "bold", color: "#b0b0b0" }}>
                Email Us
              </Typography>
              <Typography sx={{ fontWeight: 500 }}>info@example.com</Typography>
            </Box>
          </Box>
        </Box>

        {/* phone */}

        <Box>
          <Box
            sx={{
              
              marginTop: "3rem",
              display: "flex",
              width: { xs: "16rem", sm: "30rem" },
              padding: {xs: "2rem", sm: "2.1rem"},
              background: "#f2f2f2",
              borderRadius: ".5rem",
             boxShadow: "0 0 1rem rgba(0, 0, 0, .5)"
            }}
          >
            <Box
              sx={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5rem",
                background: theme.palette.primary.main,
                color: "#fff",
              }}
            >
              <LuPhone />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: ".4rem",
                fontFamily: "Montserrat",
              }}
            >
              <Typography sx={{ fontWeight: "bold", color: "#b0b0b0" }}>
                Call Us
              </Typography>
              <Typography sx={{ fontWeight: 500 }}>+1 5589 55488 55</Typography>
            </Box>
          </Box>

          {/* Opening Hours */}

          <Box
            sx={{
              
              marginTop: "3rem",
              display: "flex",
              width: { xs: "16rem", sm: "30rem" },
              padding: {xs: "2rem", sm: "2.1rem"},
              background: "#f2f2f2",
              borderRadius: ".5rem",
             boxShadow: "0 0 1rem rgba(0, 0, 0, .5)"
            }}
          >
            <Box
              sx={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5rem",
                background: theme.palette.primary.main,
                color: "#fff",
              }}
            >
              <TbClockHour4 />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: ".4rem",
                fontFamily: "Montserrat",
              }}
            >
              <Typography sx={{ fontWeight: "bold", color: "#b0b0b0" }}>
                Opening Hours
              </Typography>
              <Typography sx={{ fontWeight: 500 }}>
                <span style={{ fontWeight: "bolder" }}>Mon-Sat:</span>11AM -
                23PM;
                <span style={{ fontWeight: "bolder" }}>Sunday:</span>Closed
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Contact;
