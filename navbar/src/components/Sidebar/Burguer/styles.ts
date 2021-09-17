import styled from 'styled-components';

interface ButtonProps {
  open: boolean;
}
export const StyledBurger = styled.button<ButtonProps>`
  margin-top: 13px;
  margin-bottom: 13px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: ${({ open }) => (open ? '0' : '101')};

  &:focus {
    outline: none;
  }

  span {
    width: 1.5rem;
    height: 3px;
    background: #92a2d2;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    opacity: ${({ open }) => (open ? '0' : '1')};
  }
`;
