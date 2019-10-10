import * as React from "react";

import * as S from "./style";
import { next } from "./../../assets";
import Header from "./../../utils/Header";

interface Title {
  title: string;
  explanation: string;
}

interface Props {
  handleLoginStatus(isLogin: boolean): void;
}

const Certification: React.FC<Props> = ({ handleLoginStatus }) => {
  const [title, setTitle] = React.useState<Title>({
    title: "면접 제목",
    explanation: "면접 설명입니다."
  });
  return (
    <div>
      <Header isAdmin={false} handleLoginStatus={handleLoginStatus} />
      <S.CertificationContainer>
        <div>
          <S.CertificationTitle>{title.title}</S.CertificationTitle>
          <S.CertificationExplanation>
            {title.explanation}
          </S.CertificationExplanation>
          <S.CertificationExplanation>
            지원자의 수험번호를 입력해 주세요.
          </S.CertificationExplanation>
        </div>
        <S.CertificationInputContainer>
          <S.CertificationInputLabel>수험번호</S.CertificationInputLabel>
          <S.CertificationInput placeholder="수험번호를 입력해 주세요" />
        </S.CertificationInputContainer>
        <S.CertificationSubmitBtn>
          <p>다음</p>
          <S.CertificationSubmitIcon src={next} />
        </S.CertificationSubmitBtn>
      </S.CertificationContainer>
    </div>
  );
};

export default Certification;
