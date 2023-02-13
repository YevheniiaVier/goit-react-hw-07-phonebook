import {
  HiddenCheckbox,
  CheckboxLabel,
  CheckboxText,
  CheckBox,
  Icon,
  StyledCheckbox,
} from './Checkbox.styled';

export const Checkbox = ({ label, onChange, name, isChecked }) => {
  return (
    <CheckBox>
      <CheckboxLabel>
        <HiddenCheckbox
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange={onChange}
        />
        <StyledCheckbox checked={isChecked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
        <CheckboxText>{label}</CheckboxText>
      </CheckboxLabel>
    </CheckBox>
  );
};
