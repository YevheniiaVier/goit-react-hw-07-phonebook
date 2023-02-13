import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Title } from 'components/Title/Title';
import { Notification } from 'components/Notification/Notification';
import { Modal } from 'components/Modal/Modal';
import { IconButton } from 'components/IconButton/IconButton';
import noContactImg from '../../images/no-contacts.png';
import { ReactComponent as AddIcon } from '../../icons/addContact.svg';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import { addContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

export const MyContacts = () => {
  const [showModal, setShowModal] = useState(false);
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onAddContact = payload => {
    const action = addContact(payload);
    dispatch(action);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };
  const onClearBtnClick = () => {
    dispatch(setFilter(''));
  };

  return (
    <>
      <IconButton onClick={toggleModal} type="button" aria-label="Add contact">
        <AddIcon width="40" height="40" fill="#29668b" />
      </IconButton>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm actualContacts={contacts} onSubmit={onAddContact} />
          <IconButton
            onClick={toggleModal}
            type="button"
            aria-label="Close modal window"
          >
            <CloseIcon width="20" height="20" fill="#29668b" />
          </IconButton>
        </Modal>
      )}
      <Title text="Phonebook" />
      <Filter value={filter} onChange={onSetFilter} onClear={onClearBtnClick} />
      <Title text="Contacts" />
      {contacts.length > 0 && <ContactList contacts={contacts} />}
      {filter === '' && !contacts[0] && (
        <Notification
          text="There is no contact yet, you can add a new one!"
          imgPath={noContactImg}
        />
      )}
      {filter && !contacts[0] && (
        <Notification text="No contact found" imgPath={noContactImg} />
      )}
    </>
  );
};
