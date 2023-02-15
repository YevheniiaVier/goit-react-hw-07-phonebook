import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { initialState } from './initialState';
import { selectors, operations } from 'redux/contacts';
import { Checkbox } from './Checkbox/Checkbox';
import { Button } from './Button';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  Box,
} from './ContactForm.styled';

const notify = text =>
  toast.error(text, { theme: 'colored', pauseOnHover: true });

export const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.selectContacts);

  const nameInputId = shortid.generate();
  const telInputId = shortid.generate();
  const imgInputId = shortid.generate();

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;
    setState(prevState => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { elements } = e.currentTarget;
    const normalizedName = elements.name.value.toLowerCase();
    const normalizedPhone = elements.phone.value.toLowerCase();
    if (
      contacts.find(contact => normalizedName === contact.name.toLowerCase())
    ) {
      return notify(`${elements.name.value} is already in contacts`);
    }

    const foundNumber = contacts.find(
      contact => normalizedPhone === contact.phone.toLowerCase()
    );
    if (foundNumber) {
      return notify(
        `${elements.phone.value} is already belong to ${foundNumber.name}`
      );
    }
    dispatch(operations.addContact(state));
    onSubmit();
    setState({ ...initialState });
  };

  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit}>
      <Box>
        <StyledInput
          type="text"
          value={state.name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          id={nameInputId}
          placeholder=" "
        />
        <StyledLabel htmlFor={nameInputId}>Name*</StyledLabel>
      </Box>
      <Box>
        <StyledInput
          type="tel"
          value={state.phone}
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          id={telInputId}
          placeholder=" "
        />
        <StyledLabel htmlFor={telInputId}>Number*</StyledLabel>
      </Box>
      <Box>
        <StyledInput
          value={state.avatar}
          type="url"
          name="avatar"
          id={imgInputId}
          placeholder=" "
          onChange={handleChange}
        />
        <StyledLabel htmlFor={imgInputId}>
          Add path to photo if you like
        </StyledLabel>
      </Box>

      <Checkbox
        label="Add to favorite"
        name="favorite"
        onChange={handleChange}
        isChecked={state.favorite}
        value={state.favorite}
      />
      <Button text="Add contact" type="submit" active={false} />
      <ToastContainer autoClose={2000} />
    </StyledForm>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// const isDuplicate = ({ name, phone }, contacts) => {
//   const normalizedName = name.value.toLowerCase();
//   const normalizedPhone = phone.value.toLowerCase();

//   if (contacts.find(contact => normalizedName === contact.name.toLowerCase())) {
//     return notify(`${name.value} is already in contacts`);
//   }

//   const foundNumber = contacts.find(
//     contact => normalizedPhone === contact.phone.toLowerCase()
//   );
//   if (foundNumber) {
//     return notify(`${phone.value} is already belong to ${foundNumber.name}`);
//   }
// };
