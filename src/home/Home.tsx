import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import imageHome from "../assets/imagem-home.png";
import "./Home.scss";

const Home: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
    id="home"
      sx={{
        padding: "4rem",
        background: theme.palette.secondary.main,
        display: "flex",
        flexDirection: { xs: "column-reverse", sm: "row" },
        justifyContent: { xs: "start", sm: "space-between" },
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: "Amatic Sc",
            fontSize: {
              xs: "1.5rem",
              sm: "4rem",
              width: "20rem",
              fontWeight: 900,
              marginTop: "5rem",
              marginBottom: "2rem",
              
            },
          }}
        >
          ENJOY YOUR HEALTH DELICIOUS FOOD
        </Typography>

        <Button variant="contained" color="primary">
          Book a Table
        </Button>
      </Box>

      <img
        src={imageHome}
        alt="Imagem de um prato com comida"
        className="floating-image"
        style={{
          width: "22rem",
          height: "22rem",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default Home;
