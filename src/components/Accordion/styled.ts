import styled from 'styled-components';

export const Wrapper = styled.div`
  visibility: hidden;
  padding: 20px 40px;
  box-shadow: 0 15px 35px rgb(50 50 93 / 10%), 0 5px 15px rgb(0 0 0 / 7%);
  transition: visibility 1s, opacity 0.5s linear;
  visibility: visible;
`;

export const Header = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  cursor: pointer;
`;

export const Content = styled.div`
  margin-top: 25px;
`;
