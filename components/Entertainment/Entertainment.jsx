import React from 'react';
import EntertainmentLeftNavbar from './EntertainmentLeftNavbar/EntertainmentLeftNavbar';
import s from './Entertainment.module.scss';
import HistoryCard from '../../modules/HistoryCard/HistoryCard';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import profile from '../../public/profile.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Entertainment = () => {
  const HistoryItems = [
    {
      id: 1,
      hashtag: '#хэштэг #хэштэг #хэштэг',
      title: 'НАША ИСТОРИЯ',
      text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
      link: 'Читать дальше',
    },

    {
      id: 2,
      hashtag: '#хэштэг #хэштэг #хэштэг',
      title: 'НАША ИСТОРИЯ',
      text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
      link: 'Читать дальше',
    },
    {
      id: 3,
      hashtag: '#хэштэг #хэштэг #хэштэг',
      title: 'НАША ИСТОРИЯ',
      text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
      link: 'Читать дальше',
    },
  ];

  const PHOTOS = [
    {
      id: 1,
      url: '',
    },
    {
      id: 2,
      url: '',
    },
    {
      id: 3,
      url: '',
    },
    {
      id: 4,
      url: '',
    },
    {
      id: 5,
      url: '',
    },
    {
      id: 6,
      url: '',
    },
    {
      id: 7,
      url: '',
    },
    {
      id: 8,
      url: '',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  const router = useRouter();

  return (
    <div className='container'>
      <div className='content'>
        <EntertainmentLeftNavbar />
        <div className='mainContent'>
          <div>
            {HistoryItems?.map((item) => (
              <HistoryCard key={item.id} item={item} />
            ))}
          </div>
          <div className={s.photosBlock}>
            <p className={s.hashtag}>#хэштэг #хэштэг #хэштэг</p>
            <h1 className={s.title}>ФОТОКОНКУРС</h1>
            <Slider {...settings}>
              {PHOTOS.map((photo) => (
                <div
                  key={photo.id}
                  className={s.photoBlock}
                  onClick={() =>
                    router.push(`/entertainment/photos/${photo.id}`)
                  }
                >
                  {/* <Image
                    src={photo.url}
                    width={180}
                    height={125}
                    alt='img'
                    className={s.img}
                  /> */}
                </div>
              ))}
            </Slider>
            <Link href='/entertainment/photos/'>Читать дальше</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
