import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 390px;
  background-color: white;
  border-bottom: solid 0.5px rgba(95, 95, 95, 0.4);
`;

export const HeaderLogo = styled.img`
  width: 100px;
  height: 26px;
`;

export const HeaderMenuContainer = styled.div`
  display: inline-block;
`;

export const HeaderMenuItem = styled.button`
  margin-left: 56px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`;
