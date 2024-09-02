import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { nanoid } from 'nanoid';

export const Form = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();

    const todoEl = e.target.search.value;
    onSubmit({ id, text: todoEl });
    e.target.reset();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
