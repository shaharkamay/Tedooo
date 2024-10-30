import React from 'react'
import styled from 'styled-components'
import NavItem from '../NavItem/NavItem';
import HomeIcon from './HomeIcon';
import MessagingIcon from './MessagingIcon';
import NotificationsIcon from './NotificationsIcon';

const List = styled.ul`
    display: flex;
    list-style: none;
    gap: 2rem;
`;

function NavList() {
  return (
    <List>
        <NavItem link='#' isActive={true}><HomeIcon /> Home</NavItem>
        <NavItem link='#'><MessagingIcon /> Messaging</NavItem>
        <NavItem link='#'><NotificationsIcon /> Notifications</NavItem>
    </List>
  )
}

export default NavList