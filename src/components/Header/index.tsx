import Link from 'next/link';
import { Routes } from './constants';
import * as Styled from './styled';

const Header = () => {
  return (
    <Styled.Header>
      <Styled.Logo>cv maker</Styled.Logo>
      <Styled.Navigation>
        <div>
          {Routes.map((route) => (
            <Link key={route.title} href={route.url} passHref>
              <Styled.NavLink>{route.title}</Styled.NavLink>
            </Link>
          ))}
        </div>
      </Styled.Navigation>
      <div>
        <Link href={'/login'} passHref>
          <Styled.NavLink>Login</Styled.NavLink>
        </Link>
      </div>
    </Styled.Header>
  );
};

export default Header;
