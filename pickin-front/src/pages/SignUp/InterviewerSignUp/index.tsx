import * as React from "react";

import * as S from "./../style";
import { pickinLogo } from "./../../../assets";
import { InputBox, ClauseAdmit } from "./../../../component";

const InterviewerSignUp: React.FC = () => {
  const [isChecked, setChecked] = React.useState<boolean>(false);
  return (
    <S.SignUpFormContainer>
      <S.SignUpFormLogo src={pickinLogo} />
      <InputBox boxName="Company Code" isAgency={true} type="text" />
      <InputBox boxName="Name" isAgency={false} type="text" />
      <InputBox boxName="E-mail" isAgency={false} type="text" />
      <InputBox boxName="Password" isAgency={false} type="password" />
      <InputBox
        boxName="Password Confirm"
        isAgency={false}
        type="password"
      />
      <ClauseAdmit isChecked={isChecked} setChecked={() => setChecked(!isChecked)} />
      <S.SignUpFormBtn>Sign Up</S.SignUpFormBtn>
    </S.SignUpFormContainer>
  );
};

export default InterviewerSignUp;
