import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { LoginModel } from '../../interfaces/auth.interface';
import * as Styled from './styled';

interface LoginFormProps {
  onSubmit: SubmitHandler<LoginModel>;
  loading: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ loading, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginModel>();

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.FormGroup>
        <Styled.FormLabel htmlFor="email">Email</Styled.FormLabel>
        <Styled.FormControlInput
          {...register('email', {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          type="email"
          id="email"
          autoComplete="disabled"
        />
        {errors.email && <Styled.Error>Email is required.</Styled.Error>}
      </Styled.FormGroup>
      <Styled.FormGroup>
        <Styled.FormLabel htmlFor="password">Password</Styled.FormLabel>
        <Styled.FormControlInput
          {...register('password', { required: true })}
          type="password"
          id="password"
          autoComplete="new-password"
        />
        {errors.password && <Styled.Error>Password is required.</Styled.Error>}
      </Styled.FormGroup>
      <Styled.SubmitButton type="submit" disabled={loading}>
        Log In
      </Styled.SubmitButton>
    </Styled.Form>
  );
};

export default LoginForm;
