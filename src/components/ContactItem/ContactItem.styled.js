import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  position: relative;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  color: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.big};
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  & button {
  }
`;

export const ContactImg = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 50px;
  height: auto;
  margin-right: ${p => p.theme.space[3]}px;
  border: ${p => `2px solid ${p.theme.colors.accent}`};
  border-radius: ${p => p.theme.radii.big};
  background-color: ${p => p.theme.colors.accentDark}; ;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${p => p.theme.space[3]}px;
`;

export const ButtonBox = styled.div`
  display: flex;

  gap: ${p => p.theme.space[3]}px;
`;

export const TelBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  align-self: right;
`;
