import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Box } from './FavoriteContactsPage.styled';
import { getFavoriteContacts } from 'redux/contacts/contacts-selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { removeContact } from 'redux/contacts/contacts-slice';
import { useDispatch } from 'react-redux';

const FavoriteContactsPage = () => {
  const contacts = useSelector(getFavoriteContacts);
  console.log(contacts);
  const dispatch = useDispatch();

  const onRemoveContact = payload => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      dispatch(removeContact(payload));
    }
  };

  return (
    <Box>
      <ContactList contacts={contacts} removeContact={onRemoveContact} />
    </Box>
  );
};

FavoriteContactsPage.defaultProps = {
  contacts: [],
};

FavoriteContactsPage.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default FavoriteContactsPage;
