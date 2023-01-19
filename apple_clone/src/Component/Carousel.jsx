
import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const cards = [
    'https://cdn.mos.cms.futurecdn.net/QRfVN5A778x4K5CT6qrCoZ.jpg',
    'https://www.apple.com/tv-pr/articles/2022/10/apples-hit-espionage-drama-slow-horses-debuts-season-two-trailer/images/big-image/big-image-01/101922_Slow_Horses_Season_Two_Trailer_Big_Image_01_big_image_post.jpg.og.jpg',
    'https://www.apple.com/tv-pr/shows-and-films/e/echo-3/images/season-01/show-home-graphic-header/key-art-02/4x1/Apple_TV_Echo_3_Key_Art_graphic_header_4_1_show_home.jpg.og.jpg?1673289805080',
    'https://i.ytimg.com/vi/-L7JUzwyNDs/maxresdefault.jpg',
    'https://www.apple.com/tv-pr/shows-and-films/l/louis-armstrongs-black-blues/images/show-home-graphic-header/key-art-01/4x1/Apple_TV_Louis_Armstrongs_Black_Blues_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1673559864361',
    'https://www.apple.com/tv-pr/shows-and-films/r/raymond-and-ray/images/show-home-graphic-header/key-art-01/4x1/Apple_TV_Raymond_Ray_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1665772275897'
  ];
  const [slider, setSlider] = React.useState({Slider});

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide


  return (
    <Box
      position={'relative'}
      height={'500px'}
      width={'100%'}
      marginTop={'10px'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'2xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}