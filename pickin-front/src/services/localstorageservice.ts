interface TokenType {
  access: string;
  refresh: string;
}

export const setToken = (token: TokenType) => {
  sessionStorage.setItem("access", token.access);
  sessionStorage.setItem("refresh", token.refresh);
};

export const getAccessToken = () => sessionStorage.getItem("access");

export const getRefreshToken = () => sessionStorage.getItem("refresh");
