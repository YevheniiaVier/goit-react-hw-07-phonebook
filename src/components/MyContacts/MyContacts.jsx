import { useState, useEffect } from 'react';
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
import { Loader } from 'components/Loader/Loader';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { addContact } from 'redux/contacts/contacts-operations';
import { setFilter } from 'redux/filter/filter-slice';
import { contactsSelectors } from 'redux/contacts';
import { getFilter } from 'redux/filter/filter-selectors';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

export const MyContacts = () => {
  const [showModal, setShowModal] = useState(false);
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(contactsSelectors.getIsLoading);
  const error = useSelector(contactsSelectors.getError);
  const items = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    // console.log('dispatch fetch');
  }, [dispatch]);

  // const onAddContact = payload => {
  //   const action = addContact(payload);
  //   dispatch(action);
  //   toggleModal();
  // };

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
          <ContactForm onSubmit={toggleModal} />
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
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {contacts.length > 0 && <ContactList contacts={contacts} />}
      {!isLoading && filter === '' && !contacts[0] && (
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
