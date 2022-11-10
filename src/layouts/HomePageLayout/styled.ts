import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
`;

export const Button = styled.a`
  display: inline-block;
  padding: 30px 20px;
  margin-top: 30px;
  // background-color: #3d50ff;
  border: 3px solid #3d50ff;
  border-radius: 3px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: #bf2f74;
    border-color: #bf2f74;
  }
`;
