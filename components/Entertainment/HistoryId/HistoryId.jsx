import React from 'react';
import s from './History.module.scss';
import { useRouter } from 'next/router';
import EntertainmentLeftNavbar from '../EntertainmentLeftNavbar/EntertainmentLeftNavbar';
import Image from 'next/image';
const HistoryId = () => {
  const { query } = useRouter();

  return (
    <div className='container'>
      <div className='content'>
        <EntertainmentLeftNavbar />
        <div className='mainContent'>
          <div className={s.parent}>
            <div className={s.block1}>
              <h1 className={s.title}>НАША ИСТОРИЯ</h1>
              <p className={s.hashtag}>#хэштэг #хэштэг #хэштэг</p>
            </div>
            <div className={s.block2}>
              <Image
                src={require('../../../public/Vector.png')}
                alt='img'
                width={995}
                height={400}
              />
            </div>
            <div className={s.block3}>
              <p className={s.text}>
                Товарищи! постоянный количественный рост и сфера нашей
                активности требуют определения и уточнения новых предложений.
                Идейные соображения высшего порядка, а также рамки и место
                обучения кадров требуют от нас анализа направлений
                прогрессивного развития. С другой стороны рамки и место обучения
                кадров влечет за собой процесс внедрения и модернизации
                существенных финансовых и административных условий. Идейные
                соображения высшего порядка, а также дальнейшее развитие
                различных форм деятельности позволяет выполнять важные задания
                по разработке дальнейших направлений развития. Идейные
                соображения высшего порядка, а также дальнейшее развитие
                различных форм деятельности позволяет оценить значение систем
                массового участия. Разнообразный и богатый опыт консультация с
                широким активом представляет собой интересный эксперимент
                проверки дальнейших направлений развития. и тд и тд....
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryId;
