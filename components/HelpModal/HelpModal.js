import s from '../../styles/helpModal.module.scss';

const HelpModal = ({ isOpen, setIsOpen }) => {
  return (
    <div className={isOpen ? s.helpModal : 'd-none'}>
      <div className={s.content}>
        <div className={s.closeBtn} onClick={() => setIsOpen(false)}>
          <svg width='24' height='24' viewBox='0 0 24 24'>
            <path d='m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z'></path>
          </svg>
        </div>
        <form className={s.wrap}>
          <h3>Чем я могу помочь?</h3>
          <input type='text' required placeholder='Ваш текст' />

          <h3>ФИО или Организация </h3>
          <input type='text' required placeholder='Ваш текст' name='name' />

          <h3>Ваш город</h3>
          <input type='text' required placeholder='Ваш текст' name='city' />

          <h3>Выберите форму связи:</h3>
          <div className={s.chooseMetod}>
            <div className={s.input}>
              <input
                type='number'
                required
                placeholder='Ваш телефон'
                name='phone'
              />
              <span>*</span>
            </div>
            <div className={s.input}>
              <input
                type='number'
                required
                placeholder='WhatsApp'
                name='phone'
              />
              <span>*</span>
            </div>
            <div className={s.input}>
              <input type='email' required placeholder='E-mail' name='email' />
              <span>*</span>
            </div>
          </div>
          <div className={s.submitBlock}>
            <button className={s.submit} type='submit'>
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HelpModal;
