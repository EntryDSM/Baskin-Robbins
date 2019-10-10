import * as React from "react";

import Header from "./../../utils/Header";

interface Props {
  handleLoginStatus(isLogin: boolean): void;
}

const Certification: React.FC<Props> = ({ handleLoginStatus }) => (
  <div>
    <Header isAdmin={false} handleLoginStatus={handleLoginStatus} />
  </div>
);

export default Certification;
