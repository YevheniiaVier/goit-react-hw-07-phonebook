export const getContacts = ({ contacts }) => {
  // console.log(contacts);
  return contacts.items;
};
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getFavoriteContacts = ({ contacts }) => {
  const favoriteContacts = contacts.items.filter(({ favorite }) => favorite);
  return favoriteContacts;
};

export const getFilteredContacts = ({ contacts, filter }) => {
  const normalizedFilter = filter.toLowerCase();
  // console.log('filter', contacts);
  const filteredContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return filteredContacts;
};
