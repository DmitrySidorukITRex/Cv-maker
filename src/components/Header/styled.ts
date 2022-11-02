import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  letter-spacing: 2px;
`;

export const Logo = styled.div`
  font-size: 40px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 10px;
  cursor: pointer;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLink = styled.a`
  padding-bottom: 5px;

  &:not(:last-child) {
    margin-right: 40px;
  }

  &:hover {
    border-bottom: 2px solid #56be96;
  }
`;
