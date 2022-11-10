import React, { useState } from 'react';
import * as Styled from './styled';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styled.Wrapper>
      <Styled.Header onClick={() => setIsOpen((state) => !state)}>
        {title}
      </Styled.Header>
      {isOpen && <Styled.Content>{children}</Styled.Content>}
    </Styled.Wrapper>
  );
};

export default Accordion;
