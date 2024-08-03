import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #222831;
  color: #000000;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  

  .tag__nav {
    font-size: 1.5rem;
    color: #fefefe;
    text-align: center;

  }

`;

export const Nav = styled.nav<{ open: boolean }>`
  display: flex;
  gap: 0rem;
  font-size: 14px;
  font-weight: bold;
  justify-content: center;

`;

export const NavLink = styled.a`
  color: #1E1E1E;
  text-decoration: none;
  height: 100%;
  text-align: center;
  padding: 5px 10px;
  border-radius: 5px;
  

  &:hover {
    transition: .3s ease-out;
    background-color: #1E1E1E;
    
  }

`;
