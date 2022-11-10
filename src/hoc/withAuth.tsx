/* eslint-disable react/display-name */
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';
import { GET_USER } from '../apollo/queries';
import { URL } from '../appConstants';

export function withAuth<P>(
  WrappedComponent: React.ComponentType<P>,
  role: string
): React.FC<P> {
  return ({ ...props }) => {
    const { data, loading, error } = useQuery(GET_USER, {
      fetchPolicy: 'network-only',
    });
    const router = useRouter();

    if (!loading && (!data?.user || error) && typeof window !== 'undefined') {
      router.push(URL.LOGIN);
    }

    if (data?.user) {
      if (role && data?.user.role !== role) {
        router.push(URL.LOGIN);
      }
      return <WrappedComponent {...props} />;
    }

    return <p>Authenticating...</p>;
  };
}
