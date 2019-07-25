import * as React from "react";

import * as S from "./../style";
import { pickinLogo } from "./../../../assets/index";
import { InputBox, ClauseAdmit } from "./../../../component/index";

const AgencySignUp: React.FC = () => {
  const [checked, setChecked] = React.useState<boolean | null>(false);
  return (
    <S.SignUpFormContainer>
      <S.SignUpFormLogo src={pickinLogo} />
      <InputBox boxName="Company Name" checkAgency={false} type="text" />
      <InputBox boxName="Name" checkAgency={false} type="text" />
      <InputBox boxName="E-mail" checkAgency={false} type="text" />
      <InputBox boxName="Password" checkAgency={false} type="password" />
      <InputBox
        boxName="Password Confirm"
        checkAgency={false}
        type="password"
      />
      <ClauseAdmit checked={checked} setChecked={() => setChecked(!checked)} />
      <S.SignUpFormBtn>
        Sign Up
      </S.SignUpFormBtn>
    </S.SignUpFormContainer>
  );
};

export default AgencySignUp;
