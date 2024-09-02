import FadeLoader from 'react-spinners/FadeLoader';
import style from './Loader.module.css';
export const Loader = () => {
  return (
    <div className={style.backdrop}>
      <FadeLoader color="#ffffff" />;
    </div>
  );
};
