import { useMutation } from '@apollo/client';
import { SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import AuthLayout from '../layouts/AuthLayout';
import { GET_USER, SIGN_IN } from '../apollo/queries';
import { LoginModel } from '../interfaces/auth.interface';
import { URL } from '../appConstants';

const Login = () => {
  const [signIn, { error, loading }] = useMutation(SIGN_IN, {
    update(cache, { data: { signIn: signedInUser } }) {
      cache.writeQuery({
        query: GET_USER,
        data: { user: signedInUser },
      });
    },
  });
  const router = useRouter();

  const onLogin: SubmitHandler<LoginModel> = (data: LoginModel) => {
    signIn({ variables: data }).then((value) => {
      router.push(URL.MAIN_PAGE);
    });
  };

  return (
    <AuthLayout
      onSubmit={onLogin}
      error={error?.graphQLErrors[0].message}
      pathname={router.pathname}
      loading={loading}
    />
  );
};

export default Login;
