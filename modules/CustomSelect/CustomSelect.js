import s from './CustomSelect.module.scss';

const CustomSelect = ({
  selectArr,
  setCurrentSelect,
  currentSelect,
  setIsCurrentSelectOpen,
  isCurrentSelectOpen,
}) => {
  const onClick = (title) => {
    setCurrentSelect(title);
    setIsCurrentSelectOpen(!isCurrentSelectOpen);
  };

  return (
    <div className={s.customSelect}>
      <div
        className={s.input}
        onClick={() => setIsCurrentSelectOpen(!isCurrentSelectOpen)}
      >
        {currentSelect}
        <svg
          width='0.8vw'
          height='0.5vw'
          viewBox='0 0 12 8'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M6 8L11.1962 0.5H0.803848L6 8Z' fill='black' />
        </svg>
      </div>

      {isCurrentSelectOpen && (
        <div className={s.dropDown}>
          {selectArr.map((e) => (
            <p key={e.id} onClick={() => onClick(e.title)}>
              {e.title}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
