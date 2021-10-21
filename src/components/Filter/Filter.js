import PropTypes from "prop-types";
import s from "./Filter.module.css";

function Filter({ filter, handlerChange }) {
  return (
    <section className={s.container}>
      <label>
        Find contact by name
        <input
          type="text"
          className={s.input}
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value={filter}
          onChange={handlerChange}
        />
      </label>
    </section>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  handlerChange: PropTypes.func,
};

export default Filter;
