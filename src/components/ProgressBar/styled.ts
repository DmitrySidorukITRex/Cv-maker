import styled from 'styled-components';

interface ItemProps {
  isActive: boolean;
  isPassed: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-directon: column;
`;

export const Item = styled.div<ItemProps>`
  position: relative;
  width: 200px;
  background-color: transparent;
  text-align: center;
  z-index: 0;
  font-size: 16px;
  font-weight: ${({ isActive }) => (isActive ? '700' : '400')};
  letter-spacing: 1px;
  cursor: pointer;

  &:not(:first-child) {
    :before {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      left: -46%;
      bottom: 12px;
      background-color: ${({ isPassed }) => (isPassed ? '#3d50ff' : '#023642')};
      z-index: -1;
    }
  }

  :after {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    margin: 5px auto;
    border-radius: 50%;
    background-color: ${({ isPassed }) => (isPassed ? '#3d50ff' : '#00212d')};
    border: ${({ isPassed }) =>
      isPassed ? '2px solid #3d50ff' : '2px solid #023642'};
    z-index: 0;
  }
`;

// export const Title = styled.div``;
