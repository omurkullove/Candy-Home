import s from './PackageItemIdComp.module.scss';
import PackageLeftNavBar from '../PackageLeftNavBar/PackageLeftNavBar';
import PackageCarousel from '../PackageIdComponent/PackageCarousel/PackageCarousel';
import fanushka from '../../../public/fanushka.png';
import { useRouter } from 'next/router';
const PackageItemIdComp = () => {
  const arr = [
    { img: fanushka, id: 1 },
    { img: fanushka, id: 2 },
    { img: fanushka, id: 3 },
    { img: fanushka, id: 4 },
  ];
  const router = useRouter();
  return (
    <div className={s.PackageItemIdComp}>
      <div className='container'>
        <div className='content'>
          <PackageLeftNavBar />
          <div className='mainContent'>
            <div className={s.wrap}>
              <div className={s.slider}>
                <PackageCarousel arr={arr} />
              </div>
              <div className={s.mainInfo}>
                <div className={s.infoTitle}>Митрофанушка</div>

                <div className={s.infoItem}>
                  Описание: <span>Упаковка- конфетница</span>
                </div>
                <div className={s.infoItem}>
                  Материал: <span>Велюр</span>
                </div>
                <div className={s.infoItem}>
                  Размер: <span>20 см.</span>
                </div>
                <div className={s.infoItem}>
                  Вес вложения: <span>до 200 гр.</span>
                </div>
                <div className={s.infoItem}>
                  Обьем вложения: <span>до 700 гр.</span>
                </div>
                <div className={s.subTitle}>
                  В 1 месте 200 шт. Габариты 300*450*480мм
                </div>

                <div className={s.price}>
                  Цена: Крупный Опт. от 50 шт 500 руб
                </div>
                <div className={s.price}>
                  Цена: Мелкий Опт. от 50 шт 500 руб
                </div>
                <div className={s.price}>Цена: Розница от 50 шт 500 руб</div>

                <div className={s.count}>
                  <input type='number' /> <span>шт.</span>
                  <div className={s.btn}>заказать</div>
                </div>

                <div className={s.back} onClick={() => router.back()}>
                  <svg
                    viewBox='0 0 34 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1.17788 8.26935C0.706402 8.74083 0.706402 9.50525 1.17788 9.97673L8.8611 17.6599C9.33258 18.1314 10.097 18.1314 10.5685 17.6599C11.04 17.1885 11.04 16.424 10.5685 15.9526L3.73895 9.12304L10.5685 2.29352C11.04 1.82204 11.04 1.05762 10.5685 0.586141C10.097 0.114661 9.33258 0.114661 8.8611 0.58614L1.17788 8.26935ZM33.4214 7.91575L2.03157 7.91574L2.03157 10.3303L33.4214 10.3303L33.4214 7.91575Z'
                      fill='black'
                    />
                  </svg>
                  Вернуться в каталог
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageItemIdComp;
