import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Box } from './FavoriteContactsPage.styled';
import { contactsSelectors } from 'redux/contacts';
import { ContactList } from 'components/ContactList/ContactList';

const FavoriteContactsPage = () => {
  const contacts = useSelector(contactsSelectors.getFavoriteContacts);
  console.log(contacts);

  return (
    <Box>
      <ContactList contacts={contacts} />
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
