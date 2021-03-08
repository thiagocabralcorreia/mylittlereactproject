import React from 'react';
import styles from './Button.module.css';

const Button = () => {
  const [color, setColor] = React.useState('');
  const [count, setCount] = React.useState(0);
  const [hide, setHide] = React.useState('true');

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className={styles.myButtons}>
      <button onClick={() => setHide(!hide)} className={styles.button}>
        {hide ? 'HIDE' : 'SHOW'}
      </button>
      {hide && (
        <section className={`${styles.myButtons} animeRight`}>
          <button
            onClick={() => setColor(!color)}
            className={styles.button}
            style={
              color
                ? { backgroundColor: '#111E6C', color: '#FFF' }
                : { backgroundColor: '#D40D12', color: '#FFF' }
            }
          >
            {color ? 'BLUE' : 'RED'}
          </button>
          <button onClick={handleClick} className={styles.button}>
            COUNT: {count}
          </button>
        </section>
      )}
    </div>
  );
};

export default Button;
