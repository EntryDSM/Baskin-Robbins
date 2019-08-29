import * as React from "react";

import * as S from "./../style";

interface Props {
  boxType: string;
  btnType: string;
}

const InputBox: React.FC<Props> = ({boxType, btnType}) => (
  <S.SignUpInputContainer>
    <S.SignUpInputBox placeholder={boxType} />
    <S.CheckBtn>{btnType}</S.CheckBtn>
  </S.SignUpInputContainer>
);

export default InputBox;
