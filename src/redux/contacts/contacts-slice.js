import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

import initialContacts from '../../contacts.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer: (store, { payload }) => {
        store.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            ...data,
            id: shortid(),
          },
        };
      },
    },
    removeContact: (store, { payload }) =>
      store.filter(item => item.id !== payload),

    editContact: (store, { payload }) => {
      return store.map(contact =>
        contact.id === payload.id ? payload : contact
      );
    },
  },
});

export const { addContact, removeContact, editContact } = contactsSlice.actions;
export default contactsSlice.reducer;
