import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Box } from './FavoriteContactsPage.styled';
import { selectors, operations } from 'redux/contacts';
import { ContactList } from 'components/ContactList/ContactList';

const FavoriteContactsPage = () => {
  const contacts = useSelector(selectors.selectFavoriteContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

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
