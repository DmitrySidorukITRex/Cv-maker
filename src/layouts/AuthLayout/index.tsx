import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import LoginForm from '../../components/Forms/login';
import SignUpForm from '../../components/Forms/signup';
import { LoginModel, SignUpModel } from '../../interfaces/auth.interface';
import * as Styled from './styled';

interface AuthLayoutProps {
  onSubmit: SubmitHandler<SignUpModel | LoginModel>;
  error: string | undefined;
  pathname: string;
  loading: boolean;
}

const RegisterLayout: React.FC<AuthLayoutProps> = ({
  onSubmit,
  error,
  pathname,
  loading,
}) => {
  const isLoginPage = pathname.includes('login');

  return (
    <Styled.Wrapper>
      <Styled.Content>
        <h1>{isLoginPage ? 'Login' : 'Register'}</h1>
        <Styled.FormLayout>
          {isLoginPage ? (
            <LoginForm loading={loading} onSubmit={onSubmit} />
          ) : (
            <SignUpForm loading={loading} onSubmit={onSubmit} />
          )}

          {error && <Styled.Error>{error}</Styled.Error>}
        </Styled.FormLayout>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default RegisterLayout;
