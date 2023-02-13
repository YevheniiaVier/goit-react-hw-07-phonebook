import styled from 'styled-components';

export const StyledIconBtn = styled.button`
  padding: ${p => p.theme.space[0]}px;
  border: ${p => p.theme.borders.none};
  padding: ${p => p.theme.space[0]}px;
  background-color: ${p => p.theme.colors.transparent};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
