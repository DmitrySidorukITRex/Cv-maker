import styled from 'styled-components';

interface HeaderProps {
  isOpen: boolean;
}

interface ListItemProps {
  isSelected: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const Header = styled.div<HeaderProps>`
  padding: 15px;
  font-size: 16px;
  border: 1px solid #c7d8e0;
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    border-left: 5px solid transparent !important;
    border-right: 5px solid transparent !important;
    border-top: 5px solid #333;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'none')};
  }
`;

export const List = styled.div`
  position: absolute;
  top: 50px;
  background-color: #fff;
  width: 100%;
  max-height: 250px;
  overflow: hidden;
  overflow-y: auto;
  border: 1px solid #c7d8e0;
  z-index: 999;
`;

export const ListItem = styled.div<ListItemProps>`
  padding: 10px 15px;
  color: #58585f;
  cursor: pointer;
  font-size: 13px;
  line-height: 20px;
  font-weight: ${({ isSelected }) => (isSelected ? '700' : '400')};
  background-color: ${({ isSelected }) => (isSelected ? '#f2f2f2' : '#fff')};

  :hover {
    background-color: #f2f2f2;
  }
`;
