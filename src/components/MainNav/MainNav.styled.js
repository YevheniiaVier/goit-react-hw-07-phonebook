import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  display: flex;
  z-index: 10;
  padding: ${p => p.theme.space[3]}px;
  justify-content: center;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #efefbb; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #d4d3dd, #efefbb);
  background: linear-gradient(to right, #d4d3dd, #efefbb);
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

export const Item = styled.li``;

export const Link = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  border-radius: 10rem;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.grey};
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.m};

  font-weight: ${p => p.theme.fontWeights.bolder};
  transition: all 200ms 100ms;
  &.active {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accentDark};
  }
  :hover {
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accentDark};
  }
`;
