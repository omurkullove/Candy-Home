import s from '../PackageIdComponent.module.scss';
import Slider from 'react-slick';
import Image from 'next/future/image';
import { useEffect, useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none', background: 'green' }}
      onClick={onClick}
    />
  );
}

const PackageCarousel = ({ arr }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const settings = {
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div style={{ width: '20vw', maxWidth: '300px' }}>
      <div>
        <Slider asNavFor={nav2} ref={slider1} {...settings}>
          {arr.map((e) => (
            <div className={s.mainImg} key={e.id}>
              <Image src={e.img} layot={'raw'} alt='img' />
            </div>
          ))}
        </Slider>
        <br /> <br />
        <Slider
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          {...settings}
        >
          {arr.map((e) => (
            <div className={s.secondImg} key={e.id}>
              <Image src={e.img} layot={'raw'} alt='img' />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PackageCarousel;
