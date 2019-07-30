import * as React from "react";

import * as S from "./../style";

interface Props {
  type: string;
  boxName: string;
  isAgency: boolean;
}

const InputBox: React.FC<Props> = ({ boxName, isAgency, type }) => (
  <div>
    <S.SignUpBoxName>{boxName}</S.SignUpBoxName>
    <S.SignUpInputContainer>
      <S.SignUpInputBox placeholder={boxName} type={type} />
      {isAgency && <S.CheckAgencyBtn>기관 확인</S.CheckAgencyBtn>}
    </S.SignUpInputContainer>
  </div>
);

export default InputBox;
