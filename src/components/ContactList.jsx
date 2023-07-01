import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from '../Redux/ContactsSlice';
import { getFilter } from '../Redux/filterSlice';
import PropTypes from 'prop-types';
import css from "../Modules/phoneBook.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filtered = useSelector(getFilter);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(({ id, name, number }) => (
      <li className={`${css.basicFont} ${css.contactInfo}`} key={id}>{name}: {number}
      <button className={`${css.basicFont} ${css.buttonContacts}`} onClick={() => dispatch(deleteContact(id))}>Delete</button>
      </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
