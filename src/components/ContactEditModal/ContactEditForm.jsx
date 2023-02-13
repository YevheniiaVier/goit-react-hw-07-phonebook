import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';

import { ModalButton } from './Button';
import { Checkbox } from 'components/ContactForm/Checkbox/Checkbox';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  Box,
} from './ContactEditForm.styled';

export const ContactEditForm = ({
  contactId,
  name,
  avatar,
  number,
  favorite,
  onSubmit,
}) => {
  const initialState = { id: contactId, name, avatar, number, favorite };
  const [contact, setContact] = useState({
    ...initialState,
  });

  const nameInputId = shortid.generate();
  const telInputId = shortid.generate();
  const imgInputId = shortid.generate();

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;
    setContact(prevState => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...contact });
    setContact({ ...initialState });
  };

  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit}>
      <Box>
        <StyledInput
          type="text"
          value={contact.name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          onSubmit={onSubmit}
          id={nameInputId}
          placeholder=" "
        />
        <StyledLabel htmlFor={nameInputId}>Name</StyledLabel>
      </Box>
      <Box>
        <StyledInput
          value={contact.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          id={telInputId}
          placeholder=" "
        />
        <StyledLabel htmlFor={telInputId}>Number</StyledLabel>
      </Box>
      <Box>
        <StyledInput
          value={contact.avatar ?? ''}
          type="url"
          name="avatar"
          id={imgInputId}
          placeholder=" "
          onChange={handleChange}
        />
        <StyledLabel htmlFor={imgInputId}>
          {contact.avatar ? 'Photo' : 'Add path to photo if you like'}
        </StyledLabel>
      </Box>

      <Checkbox
        value={contact.favorite}
        label={contact.favorite ? 'Remove from favorite' : 'Add to favorite'}
        name="favorite"
        onChange={handleChange}
        isChecked={contact.favorite}
      />
      <ModalButton text="Edit contact" type="submit" />
    </StyledForm>
  );
};

ContactEditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  actualContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      favorite: PropTypes.bool,
    })
  ),
};
