import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Image from 'next/image';
import img1 from '../../../public/img1.png';
import Link from 'next/link';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <Link href={'/'}>
        <a>
          <Image src={img1} alt='' />
        </a>
      </Link>
      <Link href={'/candies'}>
        <a>
          <Image src={img1} alt='' />
        </a>
      </Link>
      <Link href={'/'}>
        <a>
          <Image src={img1} alt='' />
        </a>
      </Link>
      <Link href={'/candies'}>
        <a>
          <Image src={img1} alt='' />
        </a>
      </Link>
    </Slider>
  );
};

export default Carousel;
