import React from "react";
import styled from "styled-components";

const Item = styled.li<{ $isActive?: boolean }>`
  display: flex;
  align-items: stretch;
  font-family: Poppins;
  ${({ $isActive }) =>
    $isActive
      ? `
        color: #2DB8A1;
        border-bottom: 2px solid currentColor;
    `
      : ""};
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-block: 9px;
  padding-inline-end: 0.5rem;
`;

function NavItem({
  children,
  link,
  isActive,
}: {
  children: React.ReactNode;
  link: string;
  isActive?: boolean;
}) {
  return (
    <Item $isActive={isActive}>
      <Link href={link}>{children}</Link>
    </Item>
  );
}

export default NavItem;
