import * as React from "react";

import * as S from "./style";
import { dropdown } from "./../../../assets";

interface Props {
  currentIndex: number;
  type: number;
  HandleChangeType(currentType: number, newType: number): void;
}

const Dropdown: React.FC<Props> = ({ currentIndex, type, HandleChangeType }) => {
  const [isDroped, setIsDroped] = React.useState(false);

  const types = ["서술형", "체크리스트", "O/X", "등급"];

  const TypeList = types.map((typeName, index) => (
    <S.DropdownType
      onClick={() => {
        HandleChangeType(currentIndex, index);
        setIsDroped(!isDroped);
      }}
    >
      {typeName}
    </S.DropdownType>
  ));

  return (
    <S.DropdownWrapper>
      <S.DropdownBtn onClick={() => setIsDroped(!isDroped)}>
        {types[type]} <S.DropdownCaretdown src={dropdown} />
      </S.DropdownBtn>
      {isDroped && (
        <S.DropdownContainer>
          <S.DropdownCurrentType onClick={() => setIsDroped(!isDroped)}>
            {types[type]}
          </S.DropdownCurrentType>
          {TypeList}
        </S.DropdownContainer>
      )}
    </S.DropdownWrapper>
  );
};

export default Dropdown;
