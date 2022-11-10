import styled from 'styled-components';

export const Headline = styled.h1`
  margin-top: 0;
  line-height: 38px;
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
