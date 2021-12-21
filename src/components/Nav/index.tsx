import React from 'react';
import Link from 'next/link';
import { NavContainer } from './styles';

const Nav = () => {
  return (
    <NavContainer>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/examples">
          <a>Examples</a>
        </Link>
      </li>
      <li>
        <Link href="/showcase">
          <a>Showcase</a>
        </Link>
      </li>
    </NavContainer>
  );
};

export default Nav;
