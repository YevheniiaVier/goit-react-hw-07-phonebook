import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://63ea2fca811db3d7ef08adf5.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get(`/`);
  return data;
};

export const postContact = async contact => {
  const { data } = await instance.post('/', contact);
  return data;
};

export const deleteContact = async contactId => {
  const { data } = await instance.delete(`/${contactId}`);
  return data;
};

export const putContact = async contact => {
  const { data } = await instance.put(`/${contact.id}`, contact);
  return data;
};
