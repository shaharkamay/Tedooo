import React from 'react'
import styled from 'styled-components'
import ContentOrigin from '../Content/Content';
import Logo from '../Logo';
import Profile from '../Profile/Profile';
import Nav from '../Nav/Nav';

const HeaderComponent = styled.header`
    width: 100%;
    background-color: #FFFFFF;
`;

const Content = styled(ContentOrigin)`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: #949796;
`;

const LogoAndSearch = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-block: 9px; // according to figma design
`;

const NavAndProfile = styled.div`
  display: flex;
  align-items: stretch;
  gap: 1rem;
`;

const Input = styled.input`
  border: none;
  border-radius: 2rem;
  padding-inline: 0.75rem;
  background-color: #F4F5F5;
  width: 13.5rem;
`;

function Header() {
  return (
    <HeaderComponent>
      <Content>
        <LogoAndSearch>
          <Logo />
          <Input type="search" placeholder="&#x1F50E; Search..." />
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