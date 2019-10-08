import * as React from "react";
import { Link } from "react-router-dom";

import * as S from "./style";
import { pickinLogo } from "./../../assets";

interface Props {
    isAdmin: boolean;
}

const Header: React.FC<Props> = ({isAdmin}) => (
  <S.HeaderContainer>
    <Link to="/">
      <S.HeaderLogo src={pickinLogo} />
    </Link>
    <S.HeaderMenuContainer>
      {isAdmin && <><S.HeaderMenuItem>면접 생성하기</S.HeaderMenuItem>
      <S.HeaderMenuItem>기관 관리</S.HeaderMenuItem>
      <S.HeaderMenuItem>면접관 관리</S.HeaderMenuItem></>}
      <S.HeaderMenuItem>로그아웃</S.HeaderMenuItem>
    </S.HeaderMenuContainer>
  </S.HeaderContainer>
);

export default Header;
