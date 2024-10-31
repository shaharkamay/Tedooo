import React from 'react'
import styled from 'styled-components'
import ContentOrigin from '../Content/Content';
import Logo from '../Logo';
import Profile from '../Profile/Profile';
import Nav from '../Nav/Nav';

const HeaderComponent = styled.header`
    width: 100%;
    background-color: #FFFFFF;
    box-shadow: 0px 7px 7px 0px rgba(109, 109, 109, 0.04);
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
          <Profile src={"https://s3-alpha-sig.figma.com/img/221a/056c/8648ad917d5ce4117fc3c56ceb4adf90?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EiC-Vudzx~0sYZJFgi7xDIM7OiHCf8J~2wlRixKBgPvKrd6ieZCeFj9JIwMglPwPTFpja4TKQxhJBtDjfnM9WsOJkNl56Ss3FFL-U7IPGtpB28m2A0Qbs6blc7wzgW70AG4tOIWCObBcjfzmxXK33zaqmELIKNsZodHPiwVgC8puLHEpMbRGc65AGiJg9erQTg-e3fJW2vfCok-~o3U-Bw1-eo-SmwWdKRc5xSPiFN9v9tRvrp2j2rZM5ED~0H4fXn9hieVFaOPp2huahp9nZWS-X38SH0U2u4NIt1~5MI~ugkqC9lnbKyNrcH9gJIk3JF62448-odiALgK-OabvoQ__"} alt="Profile" />
        </NavAndProfile>
      </Content>
    </HeaderComponent>
  )
}

export default Header