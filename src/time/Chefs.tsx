import { Box, Typography, Container } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import theme from "../tema/Theme";
import imageUrl from "../assets/imagem1-chef.jpg";
import imageUrl2 from "../assets/imagem2-chef.jpg";
import imageUrl3 from "../assets/imagem3-chef.jpg";
import imageUrl4 from "../assets/imagem4-chef.jpg";

// Definição dos dados dos chefs
const chefsData = [
  {
    name: "Walter White",
    role: "Master Chef",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati adipisci totam eveniet quas asperiores suscipit amet minima!",
    imageUrl: imageUrl,
  },
  {
    name: "Sara Jhonson",
    role: "Patissier",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati adipisci totam eveniet quas asperiores suscipit amet minima!",
    imageUrl: imageUrl2,
  },
  {
    name: "William Anderson",
    role: "Cook",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati adipisci totam eveniet quas asperiores suscipit amet minima!",
    imageUrl: imageUrl3,
  },
];

const Chefs: React.FC = () => {
  return (
    <>
      <Container>
        <Typography
        id="chefs"
          sx={{
            textAlign: "center",
            fontFamily: "Montserrat",
            color: "#b0b0b0",
            marginTop: "3rem",
          }}
        >
          CHEFS
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontFamily: "Amatic Sc",
            fontWeight: 500,
          }}
        >
          OUR{" "}
          <span style={{ color: theme.palette.primary.main }}>
            PROFESSIONAL CHEFS
          </span>
        </Typography>

        {/* Container para os chefs */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Flex em coluna para telas pequenas e em linha para telas grandes
            justifyContent: "space-between",
            gap: "2rem",
            marginTop: "3rem",
          }}
        >
          {/* Mapear os chefs e renderizar cada um */}
          {chefsData.map((chef, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "100%", md: "30%" }, // 100% de largura para telas pequenas e 30% para grandes
                border: "1px solid #b0b0b0", // Remova ou ajuste conforme necessário
                textAlign: "center",
                overFlow: "hidden",
                transition: "transform 0.3s ease-in-out",

                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0 0 .5em #b0b0b0",
                  cursor: "pointer",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "15rem",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={chef.imageUrl}
                  alt={`Imagem de ${chef.name}`}
                  sx={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Box
                  component="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                  sx={{
                    position: "absolute",
                    bottom: "-1px",
                    left: 0,
                    width: "100%",
                  }}
                >
                  <path
                    fill="#ffffff"
                    d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,133.3C672,149,768,203,864,197.3C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </Box>
              </Box>

              {/* Nome do chef */}
              <Typography
                sx={{
                  color: "#000",
                  fontFamily: "Montserrat",
                  fontWeight: "bolder",
                  fontSize: "1.5rem",
                }}
              >
                {chef.name}
              </Typography>
              <Typography
                sx={{
                  color: "#b0b0b0",
                  fontFamily: "Montserrat",
                  fontSize: "1rem",
                }}
              >
                {chef.role}
              </Typography>
              <p style={{ fontFamily: "Montserrat", color: "#b0b0b0" }}>
                {chef.description}
              </p>
            </Box>
          ))}
        </Box>
      </Container>
      {/* formulário de cadastro simples */}
      <Container>
        <Typography
          sx={{
            marginTop: "3rem",
            textAlign: "center",
            fontFamily: "Montserrat",
            color: "#b0b0b0",
            fontWeight: 500,
          }}
        >
          BOOK A TABLE
        </Typography>
        <Typography
          sx={{
            fontFamily: "Amatic Sc",
            textAlign: "center",
            fontSize: {xs:"2.5rem", sm: "3rem"},
            fontWeight: 500,
            marginBottom: "2.5rem"
          }}
        >
          BOOK YOUR{" "}
          <span style={{ color: theme.palette.primary.main }}>
            STAY WITH US
          </span>
        </Typography>

        <Box
          sx={{
            background: "#b0b0b0",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            padding: "1rem",
            gap: "1rem",
          }}
        >
          <Box sx={{ flex: 1, maxWidth: "100%" }}>
            <img
              src={imageUrl4}
              alt="Imagem de talheres de prata em cima de uma mesa"
              style={{ width: "100%", height: "30rem", objectFit: "cover" }}
            />
          </Box>
          <Box sx={{ flex: 1, maxWidth: "50%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: "1rem",
                marginTop: "1rem",
                input: {
                  width: "100%",
                  padding: ".5rem",
                  outline: "none",
                  color: "#b0b0b0",
                  "@media(max-width: 600px)": {
                    width: "72vw",
                  },
                },
              }}
            >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Your Phone"
                required
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: "1rem",
                marginTop: "1rem",
                input: {
                  width: "100%",
                  padding: ".5rem",
                  outline: "none",
                   fontWeight: 500,
                   color: "#b0b0b0",
                   fontFamily: "Montserrat",
                  "@media(max-width: 600px)":{
                    width: "72vw",
                  },
                },
              }}
            >
              <input type="date" name="date" id="date" required />

              <input type="time" name="time" id="time" />
              <input
                type="number"
                name="quantity"
                min="1"
                max="10"
                placeholder="#of people"
              />
            </Box>
            <Box
              sx={{
                marginTop: "1rem",
                textarea: {
                  width: "100%",
                  height: "10rem",
                  outline: "none",
                  color: "#b0b0b0",
                  "@media (max-width: 600px)": {
                    width: "76vw",
                  },
                },
              }}
            >
              <textarea
                name="message"
                id="message"
                placeholder="Message"
              ></textarea>
            </Box>
            <Button variant="contained" color="primary">
              Book a Table
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Chefs;
