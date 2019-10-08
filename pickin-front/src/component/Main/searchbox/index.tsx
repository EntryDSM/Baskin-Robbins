import * as React from "react";

import * as S from "./style";
import { searchIcon } from "./../../../assets";

interface Props {
  value: string;
  changeValue(e: React.ChangeEvent<HTMLInputElement>): void;
}

const SearchBox: React.FC<Props> = ({ value, changeValue }) => (
  <S.SearchBoxContainer>
    <S.SearchIcon src={searchIcon} />
    <S.SearchInput
      placeholder="검색어를 입력해 주세요"
      value={value}
      onChange={changeValue.bind(this)}
    />
  </S.SearchBoxContainer>
);

export default SearchBox;
