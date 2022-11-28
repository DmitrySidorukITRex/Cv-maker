import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-top: 1px solid #e5e5e5;
`;

export const ItemInfo = styled.div``;

export const ItemTitle = styled.div`
  font-weight: 700;
`;

export const ItemSubtitle = styled.div`
  font-size: 14px;
`;

export const ItemActions = styled.div`
  display: flex;
  gap: 15px;
`;

export const ButtonWithIcon = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`;
