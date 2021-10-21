import PropTypes from "prop-types";
import { IoCloseCircleSharp } from "react-icons/io5";
import s from "./ContactList.module.css";

function ContactList({ list, deleteContact }) {
  return (
    <ul className={s.list}>
      {list.map(({ id, name, number }) => {
        const tel = `tel:` + number.replace(/^(\+)|\D/g, "$1");
        return (
          <li className={s.item} key={id}>
            <p>
              {name}: <a href={tel}>{number}</a>
            </p>
            <button
              className={s.button}
              type="button"
              data-id={id}
              onClick={deleteContact}
            >
              <IoCloseCircleSharp />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  deleteContact: PropTypes.func,
};

export default ContactList;
