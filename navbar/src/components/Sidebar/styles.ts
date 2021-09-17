import styled from 'styled-components';

interface MenuProps {
  ref: any;
}

export const Container = styled.div<MenuProps>`
  width: 50px;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 998;
`;

export const Items = styled.div`
  width: 100%;
  height: 100%;

  /* a {
    padding: 13px 13px 13px 11px;
    border-left: 2px solid transparent;
    display: block;
    color: #9ca2b3;
    transition: 250ms;

    &:hover {
      color: #6d7384;
    }
  }

  a.active {
    color: #f41938;
    border-color: #f41938;
  } */
`;


export const Link = styled.a`

  padding: 13px 13px 13px 11px;
  border-left: 2px solid transparent;
  display: block;
  color: #92a2d2;
  transition: 250ms;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }

`;