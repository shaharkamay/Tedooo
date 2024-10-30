import React from 'react'
import styled from 'styled-components'
import Content from '../Content/Content';

const HeaderComponent = styled.header`
    width: 100%;
    background-color: #FFFFFF;
`;

function Header() {
  return (
    <HeaderComponent>
      <Content>
        Header
      </Content>
    </HeaderComponent>
  )
}

export default Header