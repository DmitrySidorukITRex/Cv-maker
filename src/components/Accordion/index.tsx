import React, { useState } from 'react';
import * as Styled from './styled';

interface AccordionProps {
  children: React.ReactNode;
  headerEl: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ children, headerEl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styled.Wrapper>
      <Styled.Header onClick={() => setIsOpen((state) => !state)}>
        {headerEl}
      </Styled.Header>
      {isOpen && <Styled.Content>{children}</Styled.Content>}
    </Styled.Wrapper>
  );
};

export default Accordion;
