import SlickSlider from 'react-slick';

import { Settings } from 'react-slick';
import { NextArrow } from './NextArrow';
import { PrevArrow } from './PrevArrow';
import { SliderItem } from './SliderItem';

import { Container } from './styles';

export function Slider() {
  const settings: Settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    className: 'center',
    centerPadding: '0px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container id="slider">
      <h2>
        Lorem <span className="light">ipsum</span> dolor{' '}
        <span className="strong">sit amet</span>
      </h2>

      <SlickSlider {...settings}>
        <SliderItem
          imageSource="https://avatars.githubusercontent.com/u/49157711?v=4"
          title="Lorem ipsum Dolor sit"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <SliderItem
          imageSource="https://avatars.githubusercontent.com/u/2254731?v=4"
          title="Lorem ipsum Dolor sit"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <SliderItem
          imageSource="https://avatars.githubusercontent.com/u/2254731?v=4"
          title="Lorem ipsum Dolor sit"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <SliderItem
          imageSource="https://avatars.githubusercontent.com/u/2254731?v=4"
          title="Lorem ipsum Dolor sit"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <SliderItem
          imageSource="https://avatars.githubusercontent.com/u/2254731?v=4"
          title="Lorem ipsum Dolor sit"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <SliderItem
          imageSource="https://avatars.githubusercontent.com/u/2254731?v=4"
          title="Lorem ipsum Dolor sit"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </SlickSlider>
    </Container>
  );
}
