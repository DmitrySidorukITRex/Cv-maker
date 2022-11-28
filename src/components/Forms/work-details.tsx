import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { WorkDetailsModel } from '../../interfaces/shared.interface';
import Select from '../Select';
import { MonthSelect, YearSelect } from './constants';
import * as Styled from './styled';

interface WorkDetailsFormProps {
  workDetails: WorkDetailsModel | {};
  onCancel: () => void;
  onSave: SubmitHandler<WorkDetailsModel>;
}

const WorkDetailsForm: React.FC<WorkDetailsFormProps> = ({
  workDetails,
  onCancel,
  onSave,
}) => {
  const { register, control, handleSubmit } = useForm<WorkDetailsModel>({
    defaultValues: workDetails,
  });

  const monthSelect = MonthSelect;
  const yearSelect = YearSelect;

  return (
    <Styled.Form onSubmit={handleSubmit(onSave)}>
      <Styled.FormRow>
        <Styled.FormGroup>
          <Styled.FormLabel htmlFor="jobTitle">Job title</Styled.FormLabel>
          <Styled.FormControlInput
            {...register('jobTitle')}
            type="text"
            id="jobTitle"
            autoComplete="disabled"
          />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Styled.FormLabel htmlFor="city">City</Styled.FormLabel>
          <Styled.FormControlInput
            {...register('city')}
            type="text"
            id="city"
            autoComplete="disabled"
          />
        </Styled.FormGroup>
      </Styled.FormRow>
      <Styled.FormGroup>
        <Styled.FormLabel htmlFor="employer">Employer</Styled.FormLabel>
        <Styled.FormControlInput
          {...register('employer')}
          type="text"
          id="employer"
          autoComplete="disabled"
        />
      </Styled.FormGroup>
      <Styled.FormRow>
        <Styled.FormGroup>Start date</Styled.FormGroup>
        <Styled.FormGroup>
          <Controller
            name="startDateMonth"
            control={control}
            defaultValue={monthSelect.items[0].value}
            render={({ field: { value, onChange } }) => (
              <Select
                items={monthSelect.items}
                initialValue={value}
                onSelect={onChange}
              />
            )}
          />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Controller
            name="startDateYear"
            control={control}
            defaultValue={yearSelect.items[0].value}
            render={({ field: { value, onChange } }) => (
              <Select
                items={yearSelect.items}
                initialValue={value}
                onSelect={onChange}
              />
            )}
          />
        </Styled.FormGroup>
      </Styled.FormRow>
      <Styled.FormRow>
        <Styled.FormGroup>End date</Styled.FormGroup>
        <Styled.FormGroup>
          <Controller
            name="endDateMonth"
            control={control}
            defaultValue={monthSelect.items[0].value}
            render={({ field: { value, onChange } }) => (
              <Select
                items={monthSelect.items}
                initialValue={value}
                onSelect={onChange}
              />
            )}
          />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <Controller
            name="endDateYear"
            control={control}
            defaultValue={yearSelect.items[0].value}
            render={({ field: { value, onChange } }) => (
              <Select
                items={yearSelect.items}
                initialValue={value}
                onSelect={onChange}
              />
            )}
          />
        </Styled.FormGroup>
      </Styled.FormRow>
      <Styled.FormGroup>
        <Styled.FormLabel htmlFor="details">Responsibilities</Styled.FormLabel>
        <Styled.FormControlTextArea
          {...register('responsibilities')}
          rows={5}
          id="details"
          autoComplete="disabled"
        />
      </Styled.FormGroup>

      <Styled.FormActions>
        <Styled.CancelButton onClick={onCancel}>Cancel</Styled.CancelButton>
        <Styled.SubmitButton type="submit">Save</Styled.SubmitButton>
      </Styled.FormActions>
    </Styled.Form>
  );
};

export default WorkDetailsForm;
