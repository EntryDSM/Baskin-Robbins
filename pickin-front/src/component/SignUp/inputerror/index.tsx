import * as React from "react";

import * as S from "./../style";

interface Props {
  errorMessage: string;
}

const InputError: React.FC<Props> = ({ errorMessage }) => (
  <S.InputError>{errorMessage}</S.InputError>
);

export default InputError;
