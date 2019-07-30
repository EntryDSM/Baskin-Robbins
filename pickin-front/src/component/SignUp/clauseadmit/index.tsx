import * as React from "react";

import * as S from "./../style";
import { checkedIcon } from "./../../../assets";

interface Props {
  isChecked: boolean;
  setChecked(e: boolean): void;
}

const ClauseAdmit: React.FC<Props> = ({ isChecked, setChecked }) => (
  <div>
    <span onClick={e => setChecked(!e)}>
      <S.ClauseCheckbox>
        {isChecked ? <S.ClauseChecked src={checkedIcon} /> : ""}
      </S.ClauseCheckbox>
      <S.ClauseCheckText>개인정보 이용 약관에 동의합니다.</S.ClauseCheckText>
    </span>
    <S.ClauseDocument>약관보기</S.ClauseDocument>
  </div>
);

export default ClauseAdmit;
