import React, { useEffect, useState, useRef } from 'react';
import * as singleSpa from 'single-spa';
import Burger from './Burguer';
import Menu from './Menu';
import { FaHorse,  FaCat, FaChild, FaGhost } from "react-icons/fa";

import * as S from './styles';

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const refMenu = useRef<HTMLDivElement>(null);

  const handleClick = (e: Event) => {
    if (refMenu.current && !refMenu.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return (
      <S.Container ref={refMenu}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />

        <S.Items>
          <S.Link onClick={() => singleSpa.navigateToUrl('/app-modulo-1')}>
         
            <FaHorse size="24" />
          </S.Link>

          <S.Link onClick={() => singleSpa.navigateToUrl('/app-modulo-2')}>
            
             <FaCat size="24" />
          </S.Link>

          <S.Link onClick={() => singleSpa.navigateToUrl('/micro-app/app-modulo-3')}>
            
            <FaChild size="24" />
          </S.Link>

          <S.Link onClick={() => singleSpa.navigateToUrl('/micro-app/app-modulo-4')}>
            
            <FaGhost size="24" />
          </S.Link>
        </S.Items>
      </S.Container>
  );
};

export default Sidebar;
