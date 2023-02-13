import PropTypes from 'prop-types';

import { Box, List, Item, Link } from './MainNav.styled';
import navItems from './items';

export const MainNav = () => {
  const elements = navItems.map(({ id, to, text }) => (
    <Item key={id}>
      <Link to={to}>{text}</Link>
    </Item>
  ));
  return (
    <Box>
      <List>{elements}</List>
    </Box>
  );
};

MainNav.propTypes = {
  navItems: PropTypes.shape({
    id: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
