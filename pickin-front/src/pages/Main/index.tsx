import * as React from "react";

import * as S from "./style";
import Header from "./../../utils/Header";
import Footer from "./../../utils/Footer";

interface Props {
  isAdmin: boolean;
}

const Main: React.FC<Props> = ({ isAdmin }) => (
  <div>
    <S.MainContainer>
      <Header isAdmin={isAdmin} />
    </S.MainContainer>
    <Footer />
  </div>
);

export default Main;
