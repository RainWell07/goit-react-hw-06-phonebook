import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import css from '../Modules/phoneBook.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div className={`${css.container} ${css.basicFont}`}>
      <h1 className={`${css.basicFont} ${css.logo}`}>Phonebook</h1>
      <ContactForm/>
      <h2 className={`${css.basicFont} ${css.logo}`}>Contacts</h2>
      <Filter/>
      <ContactList/>
      <ToastContainer autoClose={6000} theme="dark" />
    </div>
  );
};

