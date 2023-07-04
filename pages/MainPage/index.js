import s from '../../styles/main.module.scss';
import MainLeftNavBar from '../../components/Main/MainLeftNavBar/MainLeftNavBar';
import img1 from '../../public/img1.png';
import Image from 'next/image';
import Link from 'next/link';
import MainItem from '../../components/Main/MainItems/MainItem';
import darichok from '../../public/darichok.png';
import Carousel from '../../components/Main/Carousel/Carousel';

const MainPage = () => {
  return (
    <div className={s.mainPage}>
      <div className='container'>
        <div className={s.content}>
          {/*nav bar*/}
          <MainLeftNavBar />
          <div className={s.mainContent}>
            <div className={s.mainImg}>
              <Carousel />
              {/*<Image src={img1} alt=""/>*/}
            </div>
            {/*info item*/}
            <MainItem right={true} />
            <MainItem right={false} />
            <MainItem right={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
