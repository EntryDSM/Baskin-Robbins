import * as React from "react";

import * as S from "./style";
import { wrong } from "./../../../assets";

const OX: React.FC = () => (
  <S.OXContainer>
    <S.OXOIcon />
    <S.OXXIcon src={wrong} />
  </S.OXContainer>
);

export default OX;
