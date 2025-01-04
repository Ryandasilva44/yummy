import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import theme from "../tema/Theme";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import imageTestimonials1 from "../assets/imagem-menu-7.jpg";
import imageTestimonials2 from "../assets/imagem-menu-8.jpg";
import imageTestimonials3 from "../assets/imagem-menu-9.jpg";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia consectetur quaerat labore molestias dolore odit.",
    image: imageTestimonials1,
    name: "SAUL GOODMAN",
    position: "CEO & FOUNDER",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia consectetur quaerat labore molestias dolore odit.",
    image: imageTestimonials2,
    name: "SARA WILSSON",
    position: "DESIGNER",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia consectetur quaerat labore molestias dolore odit.",
    image: imageTestimonials3,
    name: "JENA KARLIS",
    position: "STORE OWNER",
  },
];

const Testimonials: React.FC = () => {
  return (
    <Container
    
      sx={{
        marginBottom: "2rem",
        marginTop: "2rem",
        background: theme.palette.secondary.main,
        padding: "2rem 1rem",
        borderRadius: "8px",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          color: "#b0b0b0",
          fontFamily: "Montserrat",
          fontSize: "1rem",
        }}
      >
        TESTIMONIALS
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "2.2em", sm: "2.6rem" },
          fontFamily: "Amatic SC",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        WHAT ARE THEY{" "}
        <span style={{ color: theme.palette.primary.main }}>
          SAYING ABOUT US
        </span>
      </Typography>

      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
        }}
      >
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: ".4rem",
               
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  fontStyle: "italic",
                  marginBottom: "1rem",
                  background: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  padding: "1rem",
                }}
              >
                <BiSolidQuoteAltLeft
                  style={{ fontSize: "1.5rem", color: "#ccc" }}
                />
                <Typography sx={{ margin: "0.5rem 0", fontSize: "0.9rem" }}>
                  {testimonial.quote}
                </Typography>
                <BiSolidQuoteAltRight
                  style={{ fontSize: "1.5rem", color: "#ccc" }}
                />
              </Box>
              <img
                src={testimonial.image}
                alt={`Image of ${testimonial.name}`}
                style={{
                  width: "8rem",
                  height: "8rem",
                  borderRadius: "50%",
                  marginBottom: "1rem",
                  objectFit: "cover",
                }}
              />
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  fontFamily: "Montserrat",
                }}
              >
                {testimonial.name}
              </Typography>
              <Typography sx={{ fontSize: "0.8rem", color: "#777" }}>
                {testimonial.position}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "0.2rem",
                  marginTop: "0.5rem",
                }}
              >
                {Array(5)
                  .fill(0)
                  .map((_, starIndex) => (
                    <FaStar key={starIndex} style={{ color: "#f1c40f" }} />
                  ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default Testimonials;
