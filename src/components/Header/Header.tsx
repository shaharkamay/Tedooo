import React from 'react'
import styled from 'styled-components'
import ContentOrigin from '../Content/Content';
import Logo from '../Logo';
import Profile from '../Profile/Profile';
import Nav from '../Nav/Nav';

const HeaderComponent = styled.header`
    width: 100%;
    background-color: #FFFFFF;
    padding-block: 9px; // According to the figma design
`;

const Content = styled(ContentOrigin)`
  display: flex;
  justify-content: space-between;
`;

const LogoAndSearch = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const NavAndProfile = styled.div`
  display: flex;
  gap: 1rem;
`;

function Header() {
  return (
    <HeaderComponent>
      <Content>
        <LogoAndSearch>
          <Logo />
          <input type="text" placeholder="Search..." />
        </LogoAndSearch>
        <NavAndProfile>
          <Nav />
          <Profile />
        </NavAndProfile>
      </Content>
    </HeaderComponent>
  )
}

export default Header