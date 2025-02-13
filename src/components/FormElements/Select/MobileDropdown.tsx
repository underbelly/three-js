import React from 'react';

import {
  MobileDrop,
  Arrow,
  MobileDropContainer,
  MobileSelect,
  Label,
} from './styles';

interface Props {
  onClick: (filter: string) => void;
  options: Array<string>;
  selectedItem: string;
  placeholder: string;
  hasError: boolean;
}

const MobileDropdown = ({
  onClick,
  options,
  selectedItem,
  placeholder,
  ...rest
}: Props) => {
  const ref = React.useRef<HTMLSelectElement>(null);
  return (
    <MobileDrop {...rest}>
      <MobileDropContainer onClick={() => ref?.current?.click()}>
        <Label hasSelected={!!selectedItem}>
          <h4>{placeholder}</h4>
        </Label>
        <MobileSelect
          data-testid="mobile-select"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            onClick(e.target.value)
          }
          value={selectedItem}
          hasSelected={!!selectedItem}
          ref={ref}
        >
          <option key="featured" value="featured" />
          {options.map((option: string) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </MobileSelect>
        <Arrow />
      </MobileDropContainer>
    </MobileDrop>
  );
};

export default MobileDropdown;
