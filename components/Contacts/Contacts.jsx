import React, { useEffect } from 'react';
import ContactsLeftNavbar from './ContactsLeftNavbar/ContactsLeftNavbar';
import s from './Contacs.module.scss';
import Image from 'next/image';
import Slider from 'react-slick';
import profile from '../../public/profile.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// icons
import instagram from '../../public/instagram.svg';
import mail from '../../public/mail.svg';
import planet from '../../public/planet.svg';
import Telegram from '../../public/Telegram.svg';
import VK from '../../public/VK.svg';

// Map
import dynamic from 'next/dynamic';
import WorkerCard from '../../modules/workerCard/WorkerCard';

const MapWithNoSSR = dynamic(() => import('./Map'), {
  ssr: false,
});

const Contacts = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  const WORKERS = [
    {
      id: 1,
      name: 'Елена Ивановна',
      post: 'Cтарший менеджер',
      photo: profile,
    },
    {
      id: 2,
      name: 'Елена Ивановна',
      post: 'Cтарший менеджер',
      photo: profile,
    },
    {
      id: 3,
      name: 'Елена Ивановна',
      post: 'Cтарший менеджер',
      photo: profile,
    },
    {
      id: 4,
      name: 'Елена Ивановна',
      post: 'Cтарший менеджер',
      photo: profile,
    },
    {
      id: 5,
      name: 'Елена Ивановна',
      post: 'Cтарший менеджер',
      photo: profile,
    },
    {
      id: 6,
      name: 'Елена Ивановна',
      post: 'Cтарший менеджер',
      photo: profile,
    },
    {
      id: 7,
      name: 'Елена Ивановна',
      post: 'Cтарший менеджер',
      photo: profile,
    },
    {
      id: 8,
      name: 'Елена Ивановна',
      post: 'Cтарший менеджер',
      photo: profile,
    },
  ];

  return (
    <div className='container'>
      <div className='content'>
        <ContactsLeftNavbar />
        <div className='mainContent'>
          <div className={s.parent}>
            <div className={s.block1}>
              <p className={s.title}>
                Наш выставочный зал можно посетить по адресу:
              </p>
              <p className={s.subTitle}>
                г.Новосибирск, ул. Добролюбова 16а, вход 2, 2 этаж офис 5.
              </p>
              <ul className={s.list}>
                <li>Телефон офиса +7 (383) 311-08-56</li>
                <li>+7-913-007-27-05 приемная руководителя</li>
                <li>+7-913-912-98-10 отдел продаж</li>
                <li>+7-913-010-17-30 отдел продаж</li>
                <li>+7-913-700-37-82 отдел продаж</li>
                <li>+7-904-377-37-57 Кузбасс отдел продаж</li>
              </ul>
            </div>
            <div className={s.block2}>
              <div>
                <Image width={30} src={mail} alt='icon' />
                <p>darica@bk.ru</p>
              </div>
              <div>
                <Image width={30} src={planet} alt='icon' />
                <p>www.darica.ru</p>
              </div>
              <div>
                <Image width={30} src={Telegram} alt='icon' />
                <Image width={30} src={VK} alt='icon' />
                <Image width={30} src={instagram} alt='icon' />
                <p>@Darica</p>
              </div>
            </div>

            <div className={s.block3}>
              <MapWithNoSSR />
            </div>
            <div className={s.block4}>
              <Slider {...settings}>
                {WORKERS.map((worker) => (
                  <WorkerCard worker={worker} key={worker.id} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
