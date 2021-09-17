import React from 'react';

import { FiLogOut } from 'react-icons/fi';
import { SiBandsintown } from "react-icons/si";

import DropDown from '../DropDown';
import { Container } from './styles';

const Header: React.FC = () => {
  
  return (
    <Container>
      <SiBandsintown />
     
      <DropDown label={`Felipe Pedroso`}>
        <button type="button" onClick={() =>({})}>
          <FiLogOut />
          Sair
        </button>
      </DropDown>
    </Container>
  );
};

export default Header;
