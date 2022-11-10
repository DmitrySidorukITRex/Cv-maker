import { useMutation } from '@apollo/client';
import { SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import AuthLayout from '../layouts/AuthLayout';
import { SIGN_UP } from '../apollo/queries';
import { SignUpModel } from '../interfaces/auth.interface';
import { URL } from '../appConstants';

const Register = () => {
  const [signUp, { error, loading }] = useMutation(SIGN_UP);
  const router = useRouter();

  const onRegister: SubmitHandler<SignUpModel> = (data: SignUpModel) => {
    signUp({ variables: data }).then((value) => {
      router.push(URL.LOGIN);
    });
  };

  return (
    <AuthLayout
      onSubmit={onRegister}
      error={error?.graphQLErrors[0].message}
      pathname={router.pathname}
      loading={loading}
    />
  );
};

export default Register;
