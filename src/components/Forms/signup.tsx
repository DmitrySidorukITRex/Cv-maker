import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SignUpModel } from '../../interfaces/auth.interface';
import * as Styled from './styled';

interface SignUpFormProps {
  onSubmit: SubmitHandler<SignUpModel>;
  loading: boolean;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ loading, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpModel>();

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.FormGroup>
        <Styled.FormLabel htmlFor="avatar">Avatar</Styled.FormLabel>
        <Styled.FormControlInput
          {...register('avatar')}
          type="text"
          id="avatar"
          autoComplete="disabled"
        />
      </Styled.FormGroup>
      <Styled.FormGroup>
        <Styled.FormLabel htmlFor="username">Username</Styled.FormLabel>
        <Styled.FormControlInput
          {...register('username', { required: true })}
          type="text"
          id="username"
          autoComplete="disabled"
        />
        {errors.username && <Styled.Error>Username is required.</Styled.Error>}
      </Styled.FormGroup>
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
      <Styled.FormGroup>
        <Styled.FormLabel htmlFor="passwordConfirmation">
          Password Confirmation
        </Styled.FormLabel>
        <Styled.FormControlInput
          {...register('passwordConfirmation', { required: true })}
          type="password"
          id="passwordConfirmation"
          autoComplete="new-password"
        />
        {errors.passwordConfirmation && (
          <Styled.Error>Password confirmation is required.</Styled.Error>
        )}
      </Styled.FormGroup>
      <Styled.SubmitButton type="submit" disabled={loading}>
        Submit
      </Styled.SubmitButton>
    </Styled.Form>
  );
};

export default SignUpForm;
