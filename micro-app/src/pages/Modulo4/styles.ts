import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1600px;
  margin-left: 50px;
  padding: 30px;

  @media (max-width: 1400px) {
    padding: 15px 30px;
  }

  @media (max-width: 650px) {
    padding: 20px;
  }
  @media (max-width: 400px) {
    padding: 10px;
  }
`;
