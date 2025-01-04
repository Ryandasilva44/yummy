import React from "react";
import { Box, Container, Typography } from "@mui/material";
import theme from "../tema/Theme";
// react-icons importar
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BsClipboardData } from "react-icons/bs";
import { BsInboxes } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
//
import imageAbout from "../assets/imagem-about.jpg";
import imageAbout02 from "../assets/imagem-about-2.jpg";
import imageAbout03 from "../assets/imagem-about-3.jpg";

const About: React.FC = () => {
  return (
    
    <>
   
      <Container>
     
        <Box
        id="about"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5vw",
          }}
        >
          <Typography
            style={{ fontSize: ".8rem", color: "#566573", fontWeight: 500 }}
          >
            ABOUT US
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontFamily: "Amatic Sc", fontSize: "3rem" }}>
            LEARN MORE{" "}
            <span style={{ color: theme.palette.primary.main }}>ABOUT US</span>
          </Typography>
        </Box>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: "5rem",
          marginTop: "3rem",
        }}
      >
        <Box>
          <img
            src={imageAbout}
            alt="imagem de uma cozinha muito bem orgainizada"
            style={{ objectFit: "cover", width: "100%" }}
          />
          <Box
            sx={{
              border: ".20rem solid #566573",
              textAlign: "center",
              padding: { xs: "1.3rem", sm: ".5rem" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.3rem" },
                fontWeight: "bold",
                color: "#1c2833",
              }}
            >
              Book a Table
            </Typography>

            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontSize: { xs: "1.5rem", sm: "1.4rem" },
                fontWeight: "bolder",
                letterSpacing: ".15rem",
              }}
            >
              +1 5589 55488 55
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ marginBottom: "1.5rem", color: "#566573" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quidem
            quas commodi eligendi rerum explicabo dolore nulla porro laborum
            tenetur qui sint corporis maxime rem, quos officia iste, harum
            ducimus.
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: ".5rem",
            }}
          >
            <IoIosCheckmarkCircle
              style={{
                color: theme.palette.primary.main,
                fontSize: "1.5rem",
                marginBottom: ".5rem",
              }}
            />
            <Typography style={{ color: "#26282a" }}>
              Ullamco laborius nisi ut aliquip ex ea commod consequant
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: ".5rem",
            }}
          >
            <IoIosCheckmarkCircle
              style={{
                color: theme.palette.primary.main,
                fontSize: "1.5rem",
                marginBottom: ".5rem",
              }}
            />
            <Typography style={{ color: "#26282a" }}>
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: ".5rem",
              marginBottom: "3rem",
            }}
          >
            <IoIosCheckmarkCircle
              style={{ color: theme.palette.primary.main, fontSize: "1.5rem" }}
            />
            <Typography style={{ color: "#26282a" }}>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
            </Typography>
          </Box>

          <Box sx={{ marginBottom: "2rem" }}>
            <Typography>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </Typography>
          </Box>
          <Box>
            <img
              src={imageAbout02}
              alt="Imagem de uma mesa de jantar"
              style={{ objectFit: "cover", width: "100%" }}
            />
          </Box>
        </Box>
      </Container>
      <div
        style={{
          background: theme.palette.secondary.main,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "5rem",
          paddingBottom: "5rem",
          marginTop: "5em",
        }}
      >
        {/* seção com 4 colunas com textos dentro */}
        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: "2rem",
          }}
        >
          {/* primeira coluna */}
          <Box
            sx={{
              background: theme.palette.primary.main,
              width: { xs: "100%", sm: "50rem" },
              height: "20em",
              textAlign: "center",
              paddingTop: "3rem",
            }}
          >
            <Typography
              color="#fff"
              fontWeight="bolder"
              textAlign="start"
              paddingLeft="1em"
              fontSize="1.5em"
            >
              Why Choose Yummy
            </Typography>
            <p
              style={{
                color: "#fff",
                fontFamily: "Montserrat",
                textAlign: "start",
                paddingLeft: "1em",
                lineHeight: "1.5em",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              unde iste architecto voluptatum, amet nobis perferendis non vero
              id et ad eos, laboriosam voluptates ipsa in assumenda? Quisquam,
              ducimus quas!
            </p>
            <div style={{ marginTop: "3em" }}>
              <button
                style={{
                  border: "none",
                  borderRadius: "30em",
                  padding: ".8em 3em",
                  fontFamily: "Montserrat",
                  fontWeight: "bolder",
                  background: "#db4c4c",
                  color: "#fff",
                  transition: ".7s ease-out",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.color = theme.palette.primary.main;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "#db4c4c";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                Learn More{" "}
              </button>
            </div>
          </Box>
          {/* segunda coluna */}
          <Box
            sx={{
             
              background: "#f2f2f2",
              width: { xs: "100%", sm: "33em" },
              height: { xs: "15rem", sm: "25em" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                padding: "1rem",
                borderRadius: "50%",
                width: "2rem",
                height: "2rem",
                fontSize: "2rem",
                background: theme.palette.secondary.main,
                color: theme.palette.primary.main,
                marginTop: "1em",
                transition: ".7s ease-out",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = theme.palette.primary.main;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = theme.palette.secondary.main;
                e.currentTarget.style.color = theme.palette.primary.main;
              }}
            >
              <BsClipboardData />
            </div>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  lineHeight: "1.8em",
                }}
              >
                Corporis voluptates officia eiusmod
              </p>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: 500,
                  color: "#808b96",
                  lineHeight: "1.5em",
                }}
              >
                Consequuntur sunt aut quasi enim aliquam quae harun pariatur
                laboris nisi ut aliquip
              </p>
            </div>
          </Box>
          {/* terceira coluna */}
          <Box
            sx={{
            
              background: "#f2f2f2",
              width: { xs: "100%", sm: "33rem" },
              height: { xs: "15rem", sm: "25em" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: theme.palette.secondary.main,
                width: "2rem",
                height: "2rem",
                fontSize: "2rem",
                borderRadius: "50%",
                padding: "1rem",
                color: theme.palette.primary.main,
                marginTop: "1em",
                transition: ".7s ease-out",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = theme.palette.primary.main;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = theme.palette.secondary.main;
                e.currentTarget.style.color = theme.palette.primary.main;
              }}
            >
              <IoDiamondOutline />
            </div>
            <div
              style={{
                textAlign: "center",
                fontFamily: "Montserrat",
                fontWeight: "bolder",
                lineHeight: "1.8em",
              }}
            >
              <p>Ullamco laboris ladore lore pan</p>
              <p
                style={{
                  fontWeight: 500,
                  color: "#808b96",
                  lineHeight: "1.5em",
                }}
              >
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt
              </p>
            </div>
          </Box>
          {/* quarta coluna */}
          <Box
            sx={{
             
              background: "#f2f2f2",
              width: { xs: "100%", sm: "33rem" },
              height: { xs: "15rem", sm: "25em" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                padding: "1rem",
                background: theme.palette.secondary.main,
                color: theme.palette.primary.main,
                marginTop: "1em",
                transition: ".7s ease-in-out",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = theme.palette.primary.main;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = theme.palette.secondary.main;
                e.currentTarget.style.color = theme.palette.primary.main;
              }}
            >
              <BsInboxes />
            </div>
            <div
              style={{
                textAlign: "center",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                lineHeight: "1.8em",
              }}
            >
              <p>Labore consequatur incidid dolore</p>
              <p
                style={{
                  fontWeight: 500,
                  color: "#808b96",
                  lineHeight: "1.5em",
                }}
              >
                Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                maiores omnis facere
              </p>
            </div>
          </Box>
        </Container>
   </div>
 {/* outra seção com logica */}
      <Box
        sx={{
          backgroundImage: `url(${imageAbout03})`,
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          display: "flex",
          flexDirection: {xs: "column", sm: "row"},
          gap: "10em",
          padding: "8em",
          fontFamily: "Montserrat",
          filter: "brightness(60%)",
          
        
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "2.5em",
              fontWeight: "bolder",
              letterSpacing: ".05em",
            }}
          >
            232
          </p>
          <p
            style={{
              fontWeight: "bolder",
              color: theme.palette.secondary.main,
              opacity: 0.5,
            }}
          >
            Clients
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "2.5em",
              fontWeight: "bolder",
              letterSpacing: ".05em",
            }}
          >
            521
          </p>
          <p
            style={{
              fontWeight: "bolder",
              color: theme.palette.secondary.main,
              opacity: 0.5,
            }}
          >
            Projects
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "2.5em",
              fontWeight: "bolder",
              letterSpacing: ".05em",
            }}
          >
            1453
          </p>
          <p
            style={{
              fontWeight: "bolder",
              color: theme.palette.secondary.main,
              opacity: 0.5,
            }}
          >
            Hours Of Support
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "2.5em",
              fontWeight: "bolder",
              letterSpacing: ".05em",
            }}
          >
            32
          </p>
          <p
            style={{
              fontWeight: "bolder",
              color: theme.palette.secondary.main,
              opacity: 0.5,
            }}
          >
            Workers
          </p>
        </div>
      </Box>
    </>
  );
};

export default About;
