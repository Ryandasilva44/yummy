import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";


const NavBar: React.FC = () => {
  // Estado para controlar o menu
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Estado para controlar se a navbar está fixa
  const [isSticky, setIsSticky] = useState(false);

  // Funções para abrir e fechar o menu
  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  // Links do menu
  const menuLinks = [
    "Home",
    "About",
    "Menu",
    "Events",
    "Chefs",
    "Gallery",
    "Contact",
  ];

  //   Usando o hook useTheme para acessar o tema
  const theme = useTheme();

  // Detectar a rolagem e fixar a navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Limpar o ouvinte de evento ao desmontar
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Barra de Navegação */}
      <AppBar
        position={isSticky ? "fixed" : "static"}
        color="inherit"
        elevation={isSticky ? 4 : 0}
        sx={{top: 0,
          left: 0,
          right: 0,
          transition: "top .3s, box-shadow .3s"
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Título */}
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 900 }}
          >
            Yummy.
          </Typography>

          {/* Ícone de Hambúrguer (Somente em Telas Pequenas) */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Links (Somente em Telas Médias e Maiores) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {menuLinks.map((link, index) => (
              <Link
                key={index}
                href={`#${link.toLowerCase()}`}
                color="inherit"
                underline="none"
                sx={{
                  color: theme.palette.secondary.main,
                  fontFamily: "Montserrat",
                  fontWeight: 700,
                  position: "relative",
                  display: "inline-block",
                  paddingBottom: ".1rem",
                  borderBottom: ".15rem solid transparent",
                  transition: "border-color .5s ease-in-out",

                  "&:hover": {
                    color: "#000",
                    borderBottomColor: theme.palette.primary.main,

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "0.5rem",
                      transform: "scaleX(0)",
                      transformOrigin: "bottom right",
                      transition: "transform 7s ease",
                    },
                  },

                  "&:hover::after": {
                    transform: "scaleX(1)",
                    transformOrigin: "bottom left",
                  },
                }}
              >
                {link}
              </Link>
            ))}
          </Box>

          {/* Botão de Ação */}
          <Button
            variant="contained"
            color="primary"
            sx={{
              ml: 2,
              display: { xs: "none", md: "block" },
            }}
          >
            Book a Table
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer (Menu Deslizante) */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          <List>
            {menuLinks.map((text, index) => (
              <ListItemButton key={index}>
                <ListItemText primary={text} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
