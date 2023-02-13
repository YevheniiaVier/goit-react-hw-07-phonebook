import PropTypes from 'prop-types';

import { StyledIconBtn } from './IconButton.styled';

export const ItemIconButton = ({ children, type, onClick, ...allyProps }) => {
  return (
    <StyledIconBtn type={type} onClick={onClick} {...allyProps}>
      {children}
    </StyledIconBtn>
  );
};

ItemIconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

ItemIconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
