import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 5px 10px;
`;

interface OpenProps {
  open: boolean;
}

export const OpenMore = styled.div<OpenProps>`
  color: ${({ open }) => (open ? '#666' : '#92a2d2')};
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  transition: 250ms;
  display: flex;
  align-items: center;
  margin-right: 45px;
  user-select: none;

  @media (max-width: 450px) {
    margin-right: 5px;
  }

  &:hover {
    color: #666;
  }

  svg {
    font-size: 22px;
  }
`;

interface NavProps {
  open: boolean;
  ref: any;
}

export const Nav = styled.nav<NavProps>`
  position: absolute;
  right: 20px;

  margin-top: 5px;
  background: #ffffff;
  border: 1px solid #e4e7ee;
  box-shadow: 0px 3px 6px #00000029;
  color: #666;

  display: ${({ open }) => (open ? 'flex' : 'none')};
  animation: ${({ open }) => (open ? 'show-up 0.3s forwards' : 'none')};

  padding: 5px 10px;

  height: auto;
  width: 190px;

  @media (max-width: 450px) {
    width: 130px;
  }

  align-items: center;

  @keyframes show-up {
    from {
      opacity: 0;
      transform: translate3d(0, 30px, 0);
    }
    to {
      z-index: 999;
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;
