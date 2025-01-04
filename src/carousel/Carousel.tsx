import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography, Box } from "@mui/material";
import theme from "../tema/Theme";
import imageCarousel1 from "../assets/imagem1-carousel.jpg";
import imageCarousel2 from "../assets/imagem2-carousel.jpg";
import imageCarousel3 from "../assets/imagem3-carousel.jpg";
import imageCarousel4 from "../assets/imagem4-carousel.jpg";

const slides = [
  { image: imageCarousel1, title: "CUSTOM PARTIES", price: "$99" },
  { image: imageCarousel2, title: "PRIVATE PARTIES", price: "$289" },
  { image: imageCarousel3, title: "BIRTHDAY PARTIES", price: "$499" },
  { image: imageCarousel4, title: "WEDDING PARTIES", price: "$499" },
];

const Carousel: React.FC = () => {
  return (
    <Swiper
    id="events"
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100vh",
            filter: "brightness(62%)",
          }}
        >
          <Box
            sx={{
              color: "#fff",
              position: "absolute",
              bottom: "10%",
              left: "50%",
              transform: "translateX(-90%)",
              textAlign: "start",
            }}
          >
            <Typography sx={{ fontFamily: "Amatic Sc", fontSize: "2rem" }}>
              {slide.title}
            </Typography>
            <p
              style={{
                fontSize: "2rem",
                fontFamily: "Montserrat",
                fontWeight: "bolder",
                borderBottom: `.1em solid ${theme.palette.primary.main}`,
                paddingBottom: ".5rem",
                width: "5rem",
              }}
            >
              {slide.price}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique sint repellat explicabo quo mollitia? Eos, consectetur
              repudiandae! Corporis mollitia possimus ad dicta minus perferendis
              excepturi quidem, debitis ullam facilis amet!
            </p>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  
  );
};

export default Carousel;
