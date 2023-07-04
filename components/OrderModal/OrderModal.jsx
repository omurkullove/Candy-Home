import React from 'react';
import s from './OrderModal.module.scss';

const OrderModal = ({ isModal, setIsModal }) => {
  return (
    <div className={isModal ? s.body : 'd-none'}>
      <form className={s.parent}>
        <div className={s.block1}>
          <svg
            width='34'
            height='34'
            viewBox='0 0 24 24'
            onClick={() => setIsModal(false)}
          >
            <path d='m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z'></path>
          </svg>
        </div>
        <div className={s.block2}>
          <h3>ФИО или Организация </h3>
          <div>
            <input type='text' placeholder='Ваш текст' name='name' required />
            <span></span>
          </div>
          <h3>Ваш город</h3>
          <div>
            <input type='text' required placeholder='Ваш текст' name='city' />
            <span></span>
          </div>
          <h3>Реквизиты</h3>
          <div>
            <input
              type='text'
              required
              placeholder='Ваш текст'
              name='requisites'
            />
            <span></span>
          </div>
          <h3>ИНН</h3>
          <div>
            <input type='text' required placeholder='Ваш текст' name='id' />
            <span></span>
          </div>

          <h3>Выберите форму связи:</h3>
          <div className={s.childBlock2}>
            <div>
              <input
                type='text'
                required
                placeholder='Ваш телефон'
                name='phone'
              />
              <span></span>
            </div>
            <div>
              <input
                type='text'
                required
                placeholder='WhatsApp'
                name='whatsapp'
              />
              <span></span>
            </div>
            <div>
              <input type='email' required placeholder='E-mail' name='email' />
              <span></span>
            </div>
          </div>
        </div>
        <div className={s.block3}>
          <span>Заполнить все поля</span>
        </div>
        <div className={s.block4}>
          <button type='submit'>Отправить</button>
        </div>
      </form>
    </div>
  );
};

export default OrderModal;
