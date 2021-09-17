import React from 'react';
import * as singleSpa from 'single-spa';
import { MdClose } from 'react-icons/md';
import { FaHorse,  FaCat, FaChild, FaGhost } from "react-icons/fa";
import * as S from './styles';

interface MenuProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (link: string) => {
    singleSpa.navigateToUrl(`${link}`);
    handleClose();
  };
  
  return (
    <S.StyledMenu open={open}>
      <MdClose size="36" onClick={handleClose} />

      <S.Link onClick={() => handleClick('/app-modulo-1')}>
        <FaHorse size="24" />
        Módulo 1 - (Aplicação 1)
      </S.Link>

      <S.Link onClick={() => handleClick('/app-modulo-2')}>
      <FaCat size="24" />
        Módulo 2 - (Aplicação 1)
      </S.Link>

      <S.Link onClick={() => handleClick('/micro-app/app-modulo-3')}>
        <FaChild size="24" />
        Módulo 3 - (Aplicação 2)
      </S.Link>

      <S.Link onClick={() => handleClick('/micro-app/app-modulo-4')}>
      <FaGhost size="24" />
        Módulo 4 - (Aplicação 2)
      </S.Link>
    </S.StyledMenu>
  );
};

export default Menu;
