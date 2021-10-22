import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";

function ContactForm({ onSave }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handlerChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onSaveContact = (e) => {
    e.preventDefault();

    const newContact = { id: uuidv4(), name, number };

    setName("");
    setNumber("");

    onSave(newContact);
  };

  return (
    <form className={s.form} onSubmit={onSaveContact}>
      <label className={s.label}>
        Name
        <input
          type="text"
          className={s.input}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handlerChange}
        />
      </label>

      <label className={s.label}>
        Number
        <input
          type="tel"
          className={s.input}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handlerChange}
        />
      </label>

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

// class OldContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   handlerChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   onSaveContact = (event) => {
//     event.preventDefault();

//     const newContact = {
//       id: uuidv4(),
//       name: this.state.name,
//       number: this.state.number,
//     };

//     this.setState({
//       name: "",
//       number: "",
//     });

//     this.props.onSave(newContact);
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <form className={s.form} onSubmit={this.onSaveContact}>
//         <label className={s.label}>
//           Name
//           <input
//             type="text"
//             className={s.input}
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//             value={name}
//             onChange={this.handlerChange}
//           />
//         </label>

//         <label className={s.label}>
//           Number
//           <input
//             type="tel"
//             className={s.input}
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//             value={number}
//             onChange={this.handlerChange}
//           />
//         </label>

//         <button className={s.button} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

ContactForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default ContactForm;
