import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../hooks/useClickOutside';
import { SelectItem } from '../../interfaces/shared.interface';
import * as Styled from './styled';

interface SelectProps {
  items: SelectItem[];
  initialValue: string;
  onSelect: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ items, initialValue, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialValue);
  const selectRef = useRef(null);

  const onSelectItem = (item: SelectItem) => {
    setSelectedValue(item.value);
    setIsOpen(false);
    onSelect(item.value);
  };

  const label = items.find((x) => x.value === selectedValue)?.name;

  useOnClickOutside(selectRef, () => setIsOpen(false));

  return (
    <Styled.Wrapper ref={selectRef}>
      <Styled.Header
        isOpen={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        {label}
      </Styled.Header>
      {isOpen && (
        <Styled.List>
          {items.map((item) => (
            <Styled.ListItem
              key={item.value}
              isSelected={item.value === selectedValue}
              onClick={() => onSelectItem(item)}
            >
              {item.name}
            </Styled.ListItem>
          ))}
        </Styled.List>
      )}
    </Styled.Wrapper>
  );
};

export default Select;
