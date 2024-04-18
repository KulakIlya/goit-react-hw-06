import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import SearchBox from '../SearchBox';

import styles from './App.module.css';

const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('saved-contacts')) ?? INITIAL_CONTACTS
  // );

  // useEffect(() => {
  //   localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
export default App;
