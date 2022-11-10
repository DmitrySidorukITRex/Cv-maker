import styled, { css } from 'styled-components';

export const Form = styled.form`
  width: 100%;
  margin-top: 40px;
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 20px;

  ${FormGroup} {
    flex: 1;
  }
`;

const inputBaseCss = css`
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #c7d8e0;
`;

export const FormControlInput = styled.input`
  ${inputBaseCss};
  height: 38px;
`;

export const FormControlTextArea = styled.textarea`
  ${inputBaseCss};
  font-family: 'Arial';
  resize: none;
`;

export const FormLabel = styled.label`
  color: rgb(2, 54, 66);
`;

export const SubmitButton = styled.button`
  background: #3d50ff;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  border: 2px solid #3d50ff;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #bf2f74;
    border-color: #bf2f74;
  }
`;

export const CancelButton = styled.button`
  font-size: 18px;
  font-weight: 700;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  color: #023642;
  border: 1px solid #c7d8e0;
  background-color: #fff;

  &:hover {
    border-color: #000;
  }
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const Error = styled.div`
  color: red;
  margin-top: 5px;
`;
