import styled from 'styled-components';

interface MenuProps {
  open: boolean;
}

export const StyledMenu = styled.nav<MenuProps>`
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #ffffff;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  pointer-events: ${({ open }) => (open ? 'all' : 'none')};

  width: 300px;
  height: 100vh;
  text-align: left;
  padding: 80px 20px;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: ${({ open }) => (open ? '0px 10px 40px #00000038' : 'none')};
  transition: all 0.3s ease-in-out;

  > svg {
    color: #92a2d2;
    transition: 250ms;
    position: absolute;
    left: 15px;
    top: 15px;
    cursor: pointer;
  }

  @media (max-width: 450px) {
    width: 100vw;
  }

`;


export const Link = styled.a`

 display: flex;
  width: 100%;
  font-size: 1.4rem;
  padding: 15px 0;
   
  text-decoration: none;
  transition: color 0.3s linear;
  border: none;

  display: block;
  color: #92a2d2;
  transition: 250ms;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }

    svg {
      margin-right: 5px;
    }

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

`;