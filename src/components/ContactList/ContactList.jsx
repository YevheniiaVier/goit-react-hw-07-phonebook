import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { StyledContacts } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/contacts-slice';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const onRemoveContact = payload => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      dispatch(removeContact(payload));
    }
  };

  return (
    <StyledContacts>
      {contacts.map(contact => {
        const { id, avatar, name, number, favorite } = contact;

        return (
          <ContactItem
            key={id}
            id={id}
            number={number}
            avatar={avatar}
            name={name}
            favorite={favorite}
            removeContact={() => onRemoveContact(id)}
          />
        );
      })}
    </StyledContacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      favorite: PropTypes.bool,
    })
  ),
};
