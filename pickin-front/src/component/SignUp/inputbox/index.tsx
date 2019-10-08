import * as React from "react";

import * as S from "./../style";

interface Props {
  boxType: string;
  btnType: string;
  value: string;
  changeState(e: React.ChangeEvent<HTMLInputElement>): void;
}

const InputBox: React.FC<Props> = ({ boxType, btnType, value, changeState }) => (
  <S.SignUpInputContainer>
    <S.SignUpInputBox
      placeholder={boxType}
      value={value}
      onChange={changeState.bind(this)}
    />
    <S.CheckBtn>{btnType}</S.CheckBtn>
  </S.SignUpInputContainer>
);

export default InputBox;
