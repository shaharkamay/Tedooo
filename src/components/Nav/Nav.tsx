import React from 'react'
import NavList from './NavList/NavList'
import styled from 'styled-components'

const NavComponent = styled.nav`
    display: flex;
    align-items: stretch;
`;

function Nav() {
  return (
    <NavComponent>
        <NavList />
    </NavComponent>
  )
}

export default Nav