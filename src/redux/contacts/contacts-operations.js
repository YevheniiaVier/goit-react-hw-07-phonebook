import {
  getContacts,
  postContact,
  deleteContact,
  putContact,
} from 'services/contacts-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

// import {
//   fetchingError,
//   fetchingInProgress,
//   fetchingSuccess,
// } from './contacts-slice';

// export const fetchContacts = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await getContacts();
//     dispatch(fetchingSuccess(response));
//   } catch (error) {
//     dispatch(fetchingError(error.message));
//   }
// };

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getContacts();
      // console.log(response, 'fetchhh');
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await postContact(contact);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkAPI) => {
    try {
      const response = await deleteContact(contactId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (contact, thunkAPI) => {
    try {
      const response = await putContact(contact);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// editContact: (store, { payload }) => {
//   return store.map(contact =>
//     contact.id === payload.id ? payload : contact
//   );
// },
