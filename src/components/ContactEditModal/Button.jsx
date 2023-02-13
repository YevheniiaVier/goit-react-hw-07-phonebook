import PropTypes from 'prop-types';

import { StyledButton } from './Button.styled';

export const ModalButton = ({ text, type, active, onClick, disabled }) => {
  return (
    <StyledButton
      type={type}
      active={active}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

ModalButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
