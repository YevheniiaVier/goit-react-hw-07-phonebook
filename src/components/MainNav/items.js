import { nanoid } from 'nanoid';

const navItems = [
  {
    id: nanoid(),
    to: '/',
    text: 'Phonebook',
  },
  {
    id: nanoid(),
    to: '/favorite-contacts',
    text: 'Favorite Contacts',
  },
];

export default navItems;
