import styled from "styled-components";

export const MainPageContainer = styled.div`
  height: 100vh;
  overflow: auto;
`;

export const MainContainer = styled.div`
  margin: 61px 390px 48px;
`;

export const MainListDeterminent = styled.div`
  margin-bottom: 68px;
  display: flex;
  justify-content: space-between;
`;

export const MainCategoryBtn = styled.button`
  display: inline-block;
  width: 190px;
  height: 45px;
  margin-right: 10px;
  border-radius: 5px;
  border: solid 1px #e5a39a;
  color: rgba(0, 0, 0, 0.8);
  font-size: 18px;
  text-align: center;
`;

export const MainCategoryCaretDown = styled.img`
  position: relative;
  left: 10px;
  bottom: 2px;
  width: 10px;
  height: 7px;
`;
