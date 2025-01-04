import React from "react";
import { Box, Container, Typography } from "@mui/material";
import theme from "../tema/Theme";

import imageMenu1 from "../assets/imagem-home.png";
import imageMenu2 from "../assets/imagem-menu-2.png";
import imageMenu3 from "../assets/imagem-menu-3.png";
import imageMenu4 from "../assets/imagem-menu-4.png";
import imageMenu5 from "../assets/imagem-menu-5.png";
import imageMenu6 from "../assets/imagem-menu-6.png";

const items = [
  {
    id: 1,
    image: imageMenu1,
    texts: ["Magnam Tiste", "Lorem, deren, trataro, filede, nerada", "$5.95"],
  },

  {
    id: 2,
    image: imageMenu2,
    texts: ["Aut Luia", "Lorem, deren, trataro, filede, nerada", "$14.95"],
  },

  {
    id: 3,
    image: imageMenu3,
    texts: ["Est Eligendi", "Lorem, deren, trataro, filede, nerada", "$8.95"],
  },

  {
    id: 4,
    image: imageMenu4,
    texts: ["Eos Luibusdam", "Lorem, deren, trataro, filede, nerada", "$12.95"],
  },

  {
    id: 5,
    image: imageMenu5,
    texts: ["Eos Luibusdam", "Lorem, deren, trataro, filede, nerada", "$12.95"],
  },

  {
    id: 6,
    image: imageMenu6,
    texts: [
      "Laboriosam Direva",
      "Lorem, deren, trataro, filede, nerada",
      "$5.95",
    ],
  },
];

const Menu: React.FC = () => {
  return (
    <Container>
      <Typography
      id="menu"
        style={{
          color: "#b0b0b0",
          fontFamily: "Montserrat",
          fontSize: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 500,
          marginTop: "3em",
        }}
      >
        OUR MENU
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Amatic Sc",
          fontSize: { xs: "2rem", sm: "3.3rem" },
          marginBottom: "1.5rem"
        }}
      >
        CHECK OUR
        <Box
          component="span"
          sx={{ color: theme.palette.primary.main, marginLeft: ".5rem" }}
        >
          YUMMY MENU
        </Box>
      </Typography>
      {/* pratos do menu */}
      <Container>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "4rem",
          }}
        >
          {items.map((item, index) => (
            <Box key={index} sx={{textAlign: "center"}}>
              <img
                style={{ width: "15em" }}
                src={item.image}
                alt={`Imagem${index + 1}`}
              />
              {item.texts.map((text, textIndex) => (
                <Typography
                  key={textIndex}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color:
                      text === "Lorem, deren, trataro, filede, nerada"
                        ? "#b0b0b0"
                        : text.startsWith("$")
                        ? theme.palette.primary.main
                        : "inherit",
                    fontFamily: "Montserrat", // Todas as condições usam Montserrat
                    fontSize: text.startsWith("$") ? "1rem" : "1rem",
                    fontWeight: text.startsWith("$") ? "bolder" : "bold",
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Container>
    </Container>
  );
};
export default Menu;
