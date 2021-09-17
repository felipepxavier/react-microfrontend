import React, { useState, useEffect, useRef } from 'react';

import { FiChevronDown } from 'react-icons/fi';
import { Container, OpenMore, Nav } from './styles';

interface DropDownProps {
  label: string;
}

const DropDown: React.FC<DropDownProps> = ({ label, children }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const handleMenu = () => setIsActive(!isActive);

  const refDrop = useRef<HTMLDivElement>(null);

  const handleClick = (e: Event) => {
    if (refDrop.current && !refDrop.current.contains(e.target as Node)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return (
    <Container ref={refDrop}>
      <OpenMore open={isActive} onClick={handleMenu}>
        {label}

        <FiChevronDown />
      </OpenMore>

      <Nav open={isActive} ref={dropdownRef}>
        {children}
      </Nav>
    </Container>
  );
};

export default DropDown;
