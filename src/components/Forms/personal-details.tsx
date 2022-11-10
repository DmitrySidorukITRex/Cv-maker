import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PersonalDetailsModel } from '../../interfaces/shared.interface';
import * as Styled from './styled';

interface PersonalDetailsFormProps {
  personalDetails: PersonalDetailsModel | {};
  onChange: (data: PersonalDetailsModel) => void;
}

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({
  personalDetails,
  onChange,
}) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm<PersonalDetailsModel>({ defaultValues: personalDetails });

  React.useEffect(() => {
    const subscription = watch((data) => {
      onChange(data as PersonalDetailsModel);
    });

    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <Styled.Form>
      <Styled.FormRow>
        <Styled.FormGroup>
          <Styled.FormLabel htmlFor="firstname">First name</Styled.FormLabel>
          <Styled.FormControlInput
            {...register('firstname', { required: true })}
            type="text"
            id="firstname"
            autoComplete="disabled"
          />
          {errors.firstname && (
            <Styled.Error>First name is required.</Styled.Error>
          )}
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Styled.FormLabel htmlFor="lastname">Last name</Styled.FormLabel>
          <Styled.FormControlInput
            {...register('lastname', { required: true })}
            type="text"
            id="lastname"
            autoComplete="disabled"
          />
          {errors.lastname && (
            <Styled.Error>Last name is required.</Styled.Error>
          )}
        </Styled.FormGroup>
      </Styled.FormRow>
      <Styled.FormRow>
        <Styled.FormGroup>
          <Styled.FormLabel htmlFor="email">Email</Styled.FormLabel>
          <Styled.FormControlInput
            {...register('email', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
            type="text"
            id="email"
            autoComplete="disabled"
          />
          {errors.email?.type === 'required' && (
            <Styled.Error>Email is required.</Styled.Error>
          )}
          {errors.email?.type === 'pattern' && (
            <Styled.Error>Email is incorrect.</Styled.Error>
          )}
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Styled.FormLabel htmlFor="phone">Phone</Styled.FormLabel>
          <Styled.FormControlInput
            {...register('phone', { required: true })}
            type="text"
            id="phone"
            autoComplete="disabled"
          />
          {errors.phone && <Styled.Error>Phone is required.</Styled.Error>}
        </Styled.FormGroup>
      </Styled.FormRow>
      <Styled.FormGroup>
        <Styled.FormLabel htmlFor="address">Address</Styled.FormLabel>
        <Styled.FormControlInput
          {...register('address')}
          type="text"
          id="address"
          autoComplete="disabled"
        />
      </Styled.FormGroup>
      <Styled.FormRow>
        <Styled.FormGroup>
          <Styled.FormLabel htmlFor="city">City</Styled.FormLabel>
          <Styled.FormControlInput
            {...register('city', { required: true })}
            type="text"
            id="city"
            autoComplete="disabled"
          />
          {errors.city && <Styled.Error>City is required.</Styled.Error>}
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Styled.FormLabel htmlFor="code">Zip code</Styled.FormLabel>
          <Styled.FormControlInput
            {...register('code')}
            type="text"
            id="code"
            autoComplete="disabled"
          />
        </Styled.FormGroup>
      </Styled.FormRow>
    </Styled.Form>
  );
};

export default PersonalDetailsForm;
