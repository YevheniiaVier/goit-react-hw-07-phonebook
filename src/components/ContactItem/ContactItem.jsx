import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { removeContact } from 'redux/contacts/contacts-operations';
// import { contactsReducer } from 'redux/contacts';
import { Modal } from 'components/Modal/Modal';
import { IconButton } from 'components/IconButton/IconButton';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import { ContactEditForm } from 'components/ContactEditModal/ContactEditForm';
// import { removeContact } from 'redux/contacts/contacts-operations';

import {
  StyledItem,
  ContactImg,
  Box,
  ButtonBox,
  TelBox,
} from './ContactItem.styled';
import defaultUserImg from '../../images/default.png';
import { ReactComponent as PhoneIcon } from '../../icons/phone.svg';
import { ReactComponent as StarIcon } from '../../icons/star.svg';
import { ReactComponent as EditIcon } from '../../icons/edit.svg';
// import { editContact } from 'redux/contacts/contacts-slice';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import { ItemIconButton } from './IconButton';

export const ContactItem = ({ id, name, avatar, phone, favorite }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      dispatch(removeContact(id));
    }
  };

  // const handleEdit = payload => {
  //   const action = editContact(payload);
  //   dispatch(action);
  //   toggleEditModal();
  // };

  const toggleEditModal = () => {
    setShowEditModal(prevState => !prevState);
  };

  return (
    <>
      {showEditModal && (
        <Modal onClose={toggleEditModal}>
          <ContactEditForm
            contactId={id}
            name={name}
            avatar={avatar}
            phone={phone}
            favorite={favorite}
            onSubmit={toggleEditModal}
          />
          <IconButton
            onClick={toggleEditModal}
            type="button"
            aria-label="Close modal window"
          >
            <CloseIcon width="20" height="20" fill="#29668b" />
          </IconButton>
        </Modal>
      )}
      <StyledItem>
        <Box>
          <StarIcon
            width="30"
            height="30"
            fill={favorite ? 'yellow' : 'grey'}
          />
          <ContactImg
            src={avatar === '' ? defaultUserImg : avatar}
            alt={name}
          />
          {name}
          <TelBox>
            <PhoneIcon width="20" height="20" fill="#29668b"></PhoneIcon>
            {phone}
          </TelBox>
        </Box>
        <ButtonBox>
          <ItemIconButton
            onClick={toggleEditModal}
            type="button"
            aria-label="Edit contact"
          >
            <EditIcon width="30" height="30" fill="#38D2D2" />
          </ItemIconButton>
          <ItemIconButton
            onClick={handleDelete}
            type="button"
            aria-label="Remove contact"
          >
            <DeleteIcon width="33" height="33" fill="#38D2D2" />
          </ItemIconButton>
        </ButtonBox>
      </StyledItem>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  favorite: PropTypes.bool,
  createdAt: PropTypes.string,
};
