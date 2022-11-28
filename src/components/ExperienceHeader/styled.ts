import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled.div``;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonWithIcon = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;

  span {
    font-size: 36px;
  }
`;
