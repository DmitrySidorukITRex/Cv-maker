import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { EducationDetailsModel } from '../../interfaces/shared.interface';
import Select from '../Select';
import { GraduationMonthsSelect, GraduationYearsSelect } from './constants';
import * as Styled from './styled';

interface EducationDetailsFormProps {
  educationDetails: EducationDetailsModel | {};
  onChange: (data: EducationDetailsModel) => void;
}

const EducationDetailsForm: React.FC<EducationDetailsFormProps> = ({
  educationDetails,
  onChange,
}) => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EducationDetailsModel>({ defaultValues: educationDetails });

  const graduationMonthsSelect = GraduationMonthsSelect;
  const graduationYearsSelect = GraduationYearsSelect;

  React.useEffect(() => {
    const subscription = watch((data) => {
      onChange(data as EducationDetailsModel);
    });

    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <Styled.Form>
      <Styled.FormRow>
        <Styled.FormGroup>
          <Styled.FormLabel htmlFor="degree">Degree</Styled.FormLabel>
          <Styled.FormControlInput
            {...register('degree')}
            type="text"
            id="degree"
            autoComplete="disabled"
          />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Styled.FormLabel htmlFor="city">City/Town</Styled.FormLabel>
          <Styled.FormControlInput
            {...register('city')}
            type="text"
            id="city"
            autoComplete="disabled"
          />
        </Styled.FormGroup>
      </Styled.FormRow>
      <Styled.FormGroup>
        <Styled.FormLabel htmlFor="school">School</Styled.FormLabel>
        <Styled.FormControlInput
          {...register('school')}
          type="text"
          id="school"
          autoComplete="disabled"
        />
      </Styled.FormGroup>
      <Styled.FormRow>
        <Styled.FormGroup>Graduation date</Styled.FormGroup>
        <Styled.FormGroup>
          <Controller
            name="graduationMonth"
            control={control}
            defaultValue={graduationMonthsSelect.items[0].value}
            render={({ field: { value, onChange } }) => (
              <Select
                items={graduationMonthsSelect.items}
                initialValue={value}
                onSelect={onChange}
              />
            )}
          />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Controller
            name="graduationYear"
            control={control}
            defaultValue={graduationYearsSelect.items[0].value}
            render={({ field: { value, onChange } }) => (
              <Select
                items={graduationYearsSelect.items}
                initialValue={value}
                onSelect={onChange}
              />
            )}
          />
        </Styled.FormGroup>
      </Styled.FormRow>
      <Styled.FormGroup>
        <Styled.FormLabel htmlFor="details">Details</Styled.FormLabel>
        <Styled.FormControlTextArea
          {...register('details')}
          rows={5}
          id="details"
          autoComplete="disabled"
        />
      </Styled.FormGroup>
    </Styled.Form>
  );
};

export default EducationDetailsForm;
