import styled from 'styled-components';

export const CheckboxLabel = styled.label`
  color: ${p => p.theme.colors.accentDark};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
`;
export const CheckBox = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
export const CheckboxText = styled.span``;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${p => (p.checked ? `${p.theme.colors.accent}` : 'papayawhip')};
  border-radius: 3px;
  transition: all 150ms;
  margin-right: 10px;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${p => p.theme.colors.accentDark};
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;
