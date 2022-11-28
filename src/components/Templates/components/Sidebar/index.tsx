import React from 'react';
import { TemplateSidebarItem } from '../../../../interfaces/templates';
import * as Styled from './styled';

export interface TemplateSidebarProps {
  items: TemplateSidebarItem[];
}

const TemplateSidebar: React.FC<TemplateSidebarProps> = ({ items }) => {
  return (
    <Styled.Sidebar>
      <Styled.SidebarTitle>Personal</Styled.SidebarTitle>
      {items.map((item, i) => {
        return (
          <>
            {item.value && item.value.trim() !== '' ? (
              <Styled.SidebarItem>
                <Styled.SidebarItemLabel>{item.label}</Styled.SidebarItemLabel>
                {item.value}
              </Styled.SidebarItem>
            ) : null}
          </>
        );
      })}
    </Styled.Sidebar>
  );
};

export default TemplateSidebar;
