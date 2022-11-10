import { useApolloClient, useLazyQuery, useMutation } from '@apollo/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GET_USER, SIGN_OUT } from '../../apollo/queries';
import { URL } from '../../appConstants';
import { User } from '../../interfaces/user.interface';
import { Routes } from './constants';
import * as Styled from './styled';

const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const [hasResponse, setHasResponse] = useState(false);
  const [getUser, { data }] = useLazyQuery(GET_USER);
  const [signOut] = useMutation(SIGN_OUT);
  const router = useRouter();
  const client = useApolloClient();

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (data) {
    if (data.user && !user) {
      setUser(data.user);
    }

    if (!data.user && user) {
      setUser(null);
    }

    if (!hasResponse) {
      setHasResponse(true);
    }
  }

  const logout = () => {
    signOut().then(() => {
      client.resetStore().then(() => router.push(URL.LOGIN));
    });
  };

  const isBuilderRoute = router.pathname.includes(URL.BUILDER);

  return (
    <Styled.Header>
      <Link href={'/'} passHref>
        <Styled.Logo>cv maker</Styled.Logo>
      </Link>
      {!isBuilderRoute && (
        <Styled.Navigation>
          <div>
            {Routes.map((route) => (
              <Link key={route.title} href={route.url} passHref>
                <Styled.NavLink>{route.title}</Styled.NavLink>
              </Link>
            ))}
          </div>
        </Styled.Navigation>
      )}
      {hasResponse && (
        <div>
          {user ? (
            <>
              <Styled.NavLink onClick={logout}>Sign Out</Styled.NavLink>
            </>
          ) : (
            <>
              <Link href={'/login'} passHref>
                <Styled.NavLink>Sign In</Styled.NavLink>
              </Link>
              <Link href={'/register'} passHref>
                <Styled.NavLink>Sign Up</Styled.NavLink>
              </Link>
            </>
          )}
        </div>
      )}
    </Styled.Header>
  );
};

export default Header;
