import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 37px;
    padding-left: 30px;
    margin-left: 50px;

    @media (max-width: 450px) {
      padding-left: 15px;
    }
  }

  button {
    background: transparent;
    border: none;
    width: 100%;
    display: flex;
    color: #92a2d2;
    font-size: 16px;
    transition: 250ms;
    margin: 2px 5px;

    svg {
      margin-right: 5px;
    }

    &:hover {
      color: #f41938;
    }
  }
`;
