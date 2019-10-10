import * as React from "react";
import { Link, Redirect } from "react-router-dom";

import * as S from "./style";
import { pickinLogo } from "./../../assets";
import { getUserToken } from "./../../services/post";

interface StorageKey {
  access: string;
  refresh: string;
}

interface Props {
  isLogin: boolean;
  handleLoginStatus(loginStatus: boolean): void;
}

const SignIn: React.FC<Props> = ({ isLogin, handleLoginStatus }) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isFail, setIsFail] = React.useState<boolean>(false);

  // React.useEffect(, [isFail]);

  const storageKey: StorageKey = {
    access: "access_token",
    refresh: "refresh_token"
  };

  const signInInfoSubmit = async () => {
    try {
      const response = await getUserToken({
        email: email,
        password: password
      });

      sessionStorage.setItem(storageKey.access, response.access_token);
      localStorage.setItem(storageKey.refresh, response.refresh_token);

      handleLoginStatus(true);
    } catch (error) {
      if (error.response.status === 400) {
        handleLoginStatus(false);
        setIsFail(true);
        console.log(isFail);
      } else {
        console.log(error.response);
      }
    }
  };

  return (
    <div>
      {isLogin && <Redirect to="/" />}
      <S.SignInContainer>
        <Link to="/">
          <S.SignInLogo src={pickinLogo} />
        </Link>
        <S.SignInInput
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <S.SignInInput
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {isFail && (
          <S.SignInError>
            이메일 혹은 비밀번호를 정확히 입력해 주세요
          </S.SignInError>
        )}
        <S.SignInBtn onClick={() => signInInfoSubmit()}>Sign In</S.SignInBtn>
        {/* <S.CreateAccountText>
      Do not have an account?
      <Link to="/signup">
        <p>Create Account</p>
      </Link>
    </S.CreateAccountText> */}
      </S.SignInContainer>
    </div>
  );
};

export default SignIn;
