import React, { useState } from "react";
import { Container, Modal, Box, Typography } from "@mui/material";
import theme from "../tema/Theme";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/imagem-gallery-1.jpg";
import img2 from "../assets/imagem-gallery-2.jpg";
import img3 from "../assets/imagem-gallery-3.jpg";
import img4 from "../assets/imagem-gallery-4.jpg";
import img5 from "../assets/imagem-gallery-5.jpg";
import img6 from "../assets/imagem-gallery-6.jpg";
import img7 from "../assets/imagem-gallery-7.jpg";
import img8 from "../assets/imagem-gallery-8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Gallery: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container sx={{ marginTop: "3rem" }}>
      <Typography
      id="gallery"
        sx={{
          color: "#b0b0b0",
          textAlign: "center",
          fontFamily: "Montserrat",
          fontWeight: 600,
        }}
      >
        GALLERY
      </Typography>
      <Typography
        sx={{
          fontFamily: "Amatic Sc",
          fontSize: { xs: "2.5rem", sm: "3rem" },
          textAlign: "center",
        }}
      >
        CHECK{" "}
        <span style={{ color: theme.palette.primary.main }}>OUR GALLERY</span>
      </Typography>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={`image-${index}`} style={{ padding: "0 1rem" }}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{
                width: "100%",
                height: "20rem",
                cursor: "pointer",
                borderRadius: "8px",
                objectFit: "cover",
                
              }}
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </Slider>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Zoomed"
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                borderRadius: "8px",
              }}
            />
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default Gallery;
